---
date:
  created: 2026-11-02
draft: false
tags:
  - GSoC
  - GCC
  - OpenACC
  - Compilers
---

# GSoC 2026: Enhancing OpenACC Support in GCC

??? info "TL;DR"
    - **Organization:** [GCC (GNU Compiler Collection)](https://gcc.gnu.org/)
    - **Project:** *Enhance OpenACC Support in GCC*
    - **Program:** Google Summer of Code 2026
    - **Outcome:** Support for the OpenACC `init`, `set` and `shutdown` directives in Fortran, C and C++, the `dtype` alias for `device_type`, and a fix for a libgomp runtime error.

---

## What is OpenACC?

[OpenACC](https://www.openacc.org/) is a directive-based parallel programming standard. The programmer annotates their code (with `#pragma acc` in C/C++ or `!$acc` in Fortran), and the compiler generates the code that runs on accelerators such as NVIDIA or AMD GPUs.

In GCC, OpenACC support is split into two parts:

- **The front ends** (C, C++ and Fortran), which parse the directives and their clauses and translate them into the compiler's internal representation.
- **libgomp**, the runtime library shared by OpenMP and OpenACC, which is what actually talks to the devices.

Some directives from the standard were not implemented in GCC. My project was about closing part of that gap.

## The `init`, `set` and `shutdown` directives

These three are *executable directives*: they don't wrap a block of code, they do something at the point where they are executed.

| Directive | What it does | Runtime API equivalent |
|-----------|--------------|------------------------|
| `init` | Initializes the runtime for a device type/number | `acc_init` |
| `shutdown` | Shuts down the connection to the device | `acc_shutdown` |
| `set` | Changes the default device type and/or number | `acc_set_device_type` / `acc_set_device_num` |

All three accept the `device_type(...)`, `device_num(...)` and `if(...)` clauses:

```c title="C / C++"
#pragma acc init device_type(nvidia)
#pragma acc set device_type(nvidia) device_num(1)
#pragma acc shutdown device_type(nvidia) if(done)
```

```fortran title="Fortran"
!$acc init device_type(nvidia)
!$acc set device_type(nvidia) device_num(1)
!$acc shutdown device_type(nvidia) if(done)
```

Before this work, users could only do this by calling the API functions (`acc_init(acc_device_nvidia)`, etc.). With directives, the code is more uniform and easier to maintain, especially when everything else in the program is already pragmas.

## How it works under the hood

The overall strategy was the same for all three languages:

1. **Parsing:** recognize the directive, validate which clauses are allowed for each one (using clause masks such as `OACC_INIT_CLAUSES`, `OACC_SET_CLAUSES`, `OACC_SHUTDOWN_CLAUSES`), and emit errors when something is wrong. For example, `set` requires at least one of `device_type` or `device_num`.
2. **Lowering:** turn the directive into a call to a new *builtin*: `GOACC_init`, `GOACC_shutdown` or `GOACC_set_device`, with `(device_num, device_type)` arguments. If there is no `device_num`, `-1` is passed. If there is an `if` clause, the call is wrapped in a conditional expression.
3. **Runtime:** implement those functions in libgomp (`oacc-init.c`), reusing the logic that already existed for the runtime API, and export them under the new `GOACC_2.5` symbol version.

For example, with `-fdump-tree-original` you can see what the directive looks like after the front end:

```c
#pragma acc set device_type(nvidia)
```

becomes:

```c
__builtin_GOACC_set_device (-1, 5);
```

where `-1` means "no explicit device number" and `5` is the internal constant for the NVIDIA device type.

## The patches

### 1. Fortran support for `init`, `set` and `shutdown` (merged into trunk)

:material-link: [Fortran support for init,set,shutdown OpenACC directives](https://gcc.gnu.org/pipermail/gcc-patches/2026-July/725778.html)

This was the first and largest patch: about 31 files and more than 1000 lines, across the Fortran front end (`openmp.cc`, `parse.cc`, `resolve.cc`, `trans-openmp.cc`, ...), the new builtins, and the libgomp runtime side.

Besides the implementation, I added compile tests in `gfortran.dg/goacc/` and execution tests in `libgomp.oacc-fortran/`. In the latter, existing runtime API tests were rewritten using directives to check that both paths behave the same.

After several review iterations, Thomas Schwinge pushed **v4** to trunk ([`0dbe46ae`](https://gcc.gnu.org/git/?p=gcc.git;a=commit;h=0dbe46aeaf5c06cbd3deaa833e5ae2150fe67c56)) with a few final adjustments: adapting the code to a recent change in the libgomp plugin interface, fixing an ICE in `resolve_omp_clauses` (it was called with `code == NULL` from some OpenMP paths), and renaming the builtin to `GOACC_set_device`.

!!! note "Known limitations"
    - `device_type` accepts only one clause per directive.
    - `set` does not support `default_async` yet.

### 2. The October series

In October I sent a three-patch series that completes the work:

#### [PATCH 1/3] Fortran: fix a libgomp runtime error

:material-link: [fortran: fix unexpected runtime error in libgomp](https://gcc.gnu.org/pipermail/gcc-patches/2026-October/733394.html)

With `!$acc set device_type(*)`, the front end passed an invalid device type to libgomp and the program failed at run time. The catch is that `*` in `set` doesn't mean "all devices" (as it does in other directives) but "the default device". The fix maps that case to `GOMP_DEVICE_DEFAULT`, and I added a test that checks it.

!!! warning "Under review"
    This behavior is still being discussed in review. It remains to be confirmed whether mapping `device_type(*)` to `GOMP_DEVICE_DEFAULT` is the correct reading of the standard, or whether `set` should handle this case differently.

#### [PATCH 2/3] C/C++ support for `init`, `set` and `shutdown`

:material-link: [C/C++ support for OpenACC init,set,shutdown directives](https://gcc.gnu.org/pipermail/gcc-patches/2026-October/733395.html)

This brings the same directives to the C and C++ front ends. Some highlights:

- Registering the pragmas in `c-pragma.cc` and adding parsing in `c-parser.cc` and `cp/parser.cc`.
- A new `OMP_CLAUSE_DEVICE_NUM` clause in the internal representation (`tree-core.h`, `tree.h`, ...), with semantic validation, including C++ templates.
- A shared function, `c_finish_oacc_executable_directive` in `c-family/c-omp.cc`, that lowers all three directives to the `GOACC_*` builtins for both languages.
- Six new tests in `c-c++-common/goacc/`, run for both C and C++.

#### [PATCH 3/3] `dtype` as an alias for `device_type` (PR126507)

:material-link: [[OpenACC] Accept 'dtype' as alias for 'device_type' [PR126507]](https://gcc.gnu.org/pipermail/gcc-patches/2026-October/733396.html)

The OpenACC standard allows `dtype` as a short form of `device_type`, but GCC didn't accept it. This patch adds it to all three front ends (C, C++ and Fortran) and fixes [PR126507](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=126507). In Fortran, duplicate-clause detection is preserved, so `device_type(...) dtype(...)` on the same directive is still an error.

```fortran
!$acc init dtype(host)
!$acc set dtype(nvidia)
!$acc shutdown dtype(radeon) device_num(1)
```

## Links summary

| Patch | Description |
|-------|-------------|
| [725778](https://gcc.gnu.org/pipermail/gcc-patches/2026-July/725778.html) | Fortran: `init`, `set`, `shutdown` directives (merged into trunk) |
| [733394](https://gcc.gnu.org/pipermail/gcc-patches/2026-October/733394.html) | [1/3] Fortran: fix for `set device_type(*)` in libgomp |
| [733395](https://gcc.gnu.org/pipermail/gcc-patches/2026-October/733395.html) | [2/3] C/C++: `init`, `set`, `shutdown` directives |
| [733396](https://gcc.gnu.org/pipermail/gcc-patches/2026-October/733396.html) | [3/3] `dtype` alias for `device_type` (PR126507) |

## Future work

- Allow multiple `device_type` clauses on the same directive.
- Support `default_async` in the `set` directive.
- Finish getting the October series merged based on review feedback.

## Acknowledgements

Thanks to the GCC community, and especially to my mentors Thomas Schwinge and Tobias Burnus, for their guidance, reviews and patience throughout the process. This was my first serious contact with a production compiler: understanding how a directive flows from the parser down to libgomp, working with ChangeLogs and the mailing list, and going through several versions of the same patch taught me a lot.
