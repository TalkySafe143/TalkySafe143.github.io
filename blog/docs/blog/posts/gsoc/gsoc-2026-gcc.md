---
date:
  created: 2026-11-02
draft: false
tags:
  - GSoC
  - GCC
  - OpenACC
  - Compiladores
---

# GSoC 2026: Mejorando el soporte de OpenACC en GCC

??? info "Resumen rápido"
    - **Organización:** [GCC (GNU Compiler Collection)](https://gcc.gnu.org/)
    - **Proyecto:** *Enhance OpenACC Support in GCC*
    - **Programa:** Google Summer of Code 2026
    - **Resultado:** Soporte para las directivas OpenACC `init`, `set` y `shutdown` en Fortran, C y C++, el alias `dtype` para `device_type` y una corrección de un error de runtime en libgomp.

---

## ¿Qué es OpenACC?

[OpenACC](https://www.openacc.org/) es un estándar de programación paralela basado en directivas. La idea es que el programador anote su código (con `#pragma acc` en C/C++ o `!$acc` en Fortran) y el compilador se encargue de generar el código para ejecutarlo en aceleradores como GPUs de NVIDIA o AMD.

En GCC, el soporte de OpenACC se reparte en dos partes:

- **Los front-ends** (C, C++ y Fortran), que parsean las directivas y sus cláusulas, y las traducen a la representación interna del compilador.
- **libgomp**, la biblioteca de runtime que comparten OpenMP y OpenACC, y que es la que realmente habla con los dispositivos.

Algunas directivas del estándar no estaban implementadas en GCC. Mi proyecto consistía en cerrar parte de esa brecha.

## Las directivas `init`, `set` y `shutdown`

Estas tres son *directivas ejecutables*: no envuelven un bloque de código, sino que hacen algo en el momento en que se ejecutan.

| Directiva | Qué hace | Equivalente en la API de runtime |
|-----------|----------|----------------------------------|
| `init` | Inicializa el runtime para un tipo/número de dispositivo | `acc_init` |
| `shutdown` | Cierra la conexión con el dispositivo | `acc_shutdown` |
| `set` | Cambia el tipo y/o número de dispositivo por defecto | `acc_set_device_type` / `acc_set_device_num` |

Las tres aceptan las cláusulas `device_type(...)`, `device_num(...)` e `if(...)`:

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

Antes de mi trabajo, el usuario solo podía hacer esto llamando a las funciones de la API (`acc_init(acc_device_nvidia)`, etc.). Con las directivas, el código queda más uniforme y es más fácil de mantener, especialmente cuando todo lo demás en el programa ya son pragmas.

## Cómo funciona por dentro

La estrategia general fue la misma en los tres lenguajes:

1. **Parseo:** reconocer la directiva, validar qué cláusulas son válidas para cada una (con máscaras de cláusulas como `OACC_INIT_CLAUSES`, `OACC_SET_CLAUSES`, `OACC_SHUTDOWN_CLAUSES`) y emitir errores cuando algo no cuadra. Por ejemplo, `set` exige al menos una de `device_type` o `device_num`.
2. **Lowering:** convertir la directiva en una llamada a un *builtin* nuevo: `GOACC_init`, `GOACC_shutdown` o `GOACC_set_device`, con argumentos `(device_num, device_type)`. Si no hay `device_num`, se pasa `-1`. Si hay una cláusula `if`, la llamada queda envuelta en una expresión condicional.
3. **Runtime:** implementar esas funciones en libgomp (`oacc-init.c`), reutilizando la lógica que ya existía para la API de runtime y exportándolas en la nueva versión de símbolos `GOACC_2.5`.

Por ejemplo, con `-fdump-tree-original` se puede ver cómo queda la directiva después del front-end:

```c
#pragma acc set device_type(nvidia)
```

se convierte en:

```c
__builtin_GOACC_set_device (-1, 5);
```

donde `-1` significa "sin número de dispositivo explícito" y `5` es la constante interna del tipo de dispositivo NVIDIA.

## Los patches

### 1. Soporte en Fortran para `init`, `set` y `shutdown` (integrado en trunk)

:material-link: [Fortran support for init,set,shutdown OpenACC directives](https://gcc.gnu.org/pipermail/gcc-patches/2026-July/725778.html)

Fue el primer parche y el más grande: unos 31 archivos y más de 1000 líneas, entre el front-end de Fortran (`openmp.cc`, `parse.cc`, `resolve.cc`, `trans-openmp.cc`, ...), los nuevos builtins y la parte de runtime en libgomp.

Además de la implementación, incluí pruebas de compilación en `gfortran.dg/goacc/` y pruebas de ejecución en `libgomp.oacc-fortran/`. En estas últimas se reescribieron tests existentes de la API de runtime usando directivas, para comprobar que ambos caminos se comportan igual.

Después de varias iteraciones de revisión, Thomas Schwinge integró la **v4** en trunk ([`0dbe46ae`](https://gcc.gnu.org/git/?p=gcc.git;a=commit;h=0dbe46aeaf5c06cbd3deaa833e5ae2150fe67c56)), con algunos ajustes finales: adaptar el código a un cambio reciente en la interfaz del plugin de libgomp, corregir un ICE en `resolve_omp_clauses` (se llamaba con `code == NULL` desde algunos caminos de OpenMP) y renombrar el builtin a `GOACC_set_device`.

!!! note "Limitaciones conocidas"
    - `device_type` acepta una sola cláusula por directiva.
    - `set` todavía no soporta `default_async`.

### 2. Serie de octubre

En octubre envié una serie de tres parches que completa el trabajo:

#### [PATCH 1/3] Fortran: corrección de un error de runtime en libgomp

:material-link: [fortran: fix unexpected runtime error in libgomp](https://gcc.gnu.org/pipermail/gcc-patches/2026-October/733394.html)

Con `!$acc set device_type(*)`, el front-end le pasaba a libgomp un tipo de dispositivo inválido y el programa fallaba en ejecución. El problema es que `*` en `set` no significa "todos los dispositivos" (como en otras directivas), sino "el dispositivo por defecto". La corrección mapea ese caso a `GOMP_DEVICE_DEFAULT`, y agregué un test que lo comprueba.

!!! warning "En revisión"
    Este comportamiento todavía se está discutiendo en la revisión. Falta confirmar si mapear `device_type(*)` a `GOMP_DEVICE_DEFAULT` es la interpretación correcta del estándar o si `set` debería manejar este caso de otra forma.

#### [PATCH 2/3] Soporte en C/C++ para `init`, `set` y `shutdown`

:material-link: [C/C++ support for OpenACC init,set,shutdown directives](https://gcc.gnu.org/pipermail/gcc-patches/2026-October/733395.html)

Lleva las mismas directivas a los front-ends de C y C++. Algunos puntos del parche:

- Registrar los pragmas en `c-pragma.cc` y añadir el parseo en `c-parser.cc` y `cp/parser.cc`.
- Una nueva cláusula `OMP_CLAUSE_DEVICE_NUM` en la representación interna (`tree-core.h`, `tree.h`, ...), con su validación semántica, incluyendo plantillas de C++.
- Una función común, `c_finish_oacc_executable_directive` en `c-family/c-omp.cc`, que hace el lowering de las tres directivas a los builtins `GOACC_*` para ambos lenguajes.
- Seis tests nuevos en `c-c++-common/goacc/`, que se ejecutan tanto en C como en C++.

#### [PATCH 3/3] `dtype` como alias de `device_type` (PR126507)

:material-link: [[OpenACC] Accept 'dtype' as alias for 'device_type' [PR126507]](https://gcc.gnu.org/pipermail/gcc-patches/2026-October/733396.html)

El estándar de OpenACC permite escribir `dtype` como forma corta de `device_type`, pero GCC no lo aceptaba. Este parche lo añade en los tres front-ends (C, C++ y Fortran) y resuelve el [PR126507](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=126507). En Fortran se conserva la detección de cláusulas duplicadas, así que `device_type(...) dtype(...)` en la misma directiva sigue siendo un error.

```fortran
!$acc init dtype(host)
!$acc set dtype(nvidia)
!$acc shutdown dtype(radeon) device_num(1)
```

## Resumen de enlaces

| Patch | Descripción |
|-------|-------------|
| [725778](https://gcc.gnu.org/pipermail/gcc-patches/2026-July/725778.html) | Fortran: directivas `init`, `set`, `shutdown` (integrado en trunk) |
| [733394](https://gcc.gnu.org/pipermail/gcc-patches/2026-October/733394.html) | [1/3] Fortran: fix de `set device_type(*)` en libgomp |
| [733395](https://gcc.gnu.org/pipermail/gcc-patches/2026-October/733395.html) | [2/3] C/C++: directivas `init`, `set`, `shutdown` |
| [733396](https://gcc.gnu.org/pipermail/gcc-patches/2026-October/733396.html) | [3/3] Alias `dtype` para `device_type` (PR126507) |

## Trabajo futuro

- Permitir varias cláusulas `device_type` en una misma directiva.
- Soportar `default_async` en la directiva `set`.
- Terminar de integrar la serie de octubre según los comentarios de la revisión.

## Agradecimientos

Gracias a la comunidad de GCC, y en especial a mis mentores Thomas Schwinge y Tobias Burnus, por la guía, las revisiones y la paciencia a lo largo del proceso. Fue mi primer contacto serio con un compilador de producción: entender cómo fluye una directiva desde el parser hasta libgomp, trabajar con ChangeLogs y la lista de correo, y pasar por varias versiones de un mismo parche me enseñó mucho.
