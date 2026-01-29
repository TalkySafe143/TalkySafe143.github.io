---
date:
  created: 2026-01-12
draft: false
tags:
  - Competitive Programming
  - Mathematics
  - Medium Difficulty
---

# Principle of Inclusion-Exclusion (PIE)

??? info "Prerequisites"
    - I would say bitmasks, although they are not strictly necessary
    - LCA for the example below, although it's only an example
    - Set theory and its terminology.

---

At first it is intuitive to think:

> **_If I count something twice, I just subtract it once_**.

A simple example is when we want to calculate distances between two nodes in a tree: If a node u and another node v have an LCA a, then we can calculate the distance with respect to the root r as follows:

$$
d(r,u)+d(r, v)-2\cdot d(r, a)
$$

When we subtract the distance from the root to the LCA, we are compensating for the fact that we counted that distance twice when looking at each node to the root separately.

However, in some problems it's not so simple to say

> **_If I count something twice, I just subtract it once_**.

---

## Formality

Consider a finite set $X$ and 3 subsets $A,B,C \subseteq X$. To obtain $|A \cup B \cup C|$ we could simply take $|A|+|B|+|C|$, but what if those sets intersect? If they intersect, we may have counted some elements more than once.

The elements we counted extra are those that are inside the sets $A \cap B, A \cap C, B \cap C$, so we can subtract from the count $|A \cap B|+ |A \cap C| + |B \cap C|$.

But now we have subtracted too much for elements that are in $A \cap B \cap C$, so we add them back. This gives:

$$
|A \cup B \cup C| = |A|+|B|+|C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
$$

You can test this with some sets and you'll see it works. For a rigorous proof, you can read this section on [cp-algorithms](https://cp-algorithms.com/combinatorics/inclusion-exclusion.html#proof).

## Formulas

Suppose there is a universe set $X$ from which we want to apply the principle of inclusion-exclusion; then the formula for $n$ sets is given by:

### Unrestricted principle

$$
\left|\bigcup_{i=1}^n A_i \right| = \sum_{\emptyset \neq J\subseteq \{1,2,\ldots ,n\}} (-1)^{|J|-1}{\Biggl |}\bigcap_{j\in J}A_{j}{\Biggr |}
$$

Dont be scared by this formula; you can consider all subsets of the set $\{1,2,\dots,n\}$, and depending on the size of the subset you will add or subtract the cardinality of the intersection of the sets $A_j$ for which $j \in J$, where $J$ is the subset we fix.

??? example "Simulation with small sets"
    We can simulate with $J = \{1, 2\}$. If we have this set, it means we have $A_1, A_2$, then we consider all subsets (also called $\mathscr{P}(J)$). Note that $J \neq \emptyset$, so we will start with a non-empty one.

    - $\{1\}$: We select $A_1$ and $|J| - 1 = 0$, therefore the expression inside the sum becomes $1 \cdot |A_1|$.
    - $\{1, 2\}$: We select $A_1, A_2$ and $|J| - 1 = 1$, therefore the expression inside the sum becomes $(-1) \cdot |A_1 \cap A_2|$. Note that in this case we subtract the cardinality of the intersection, because these are the elements we ended up counting extra.
    - $\{2\}$: We select $A_2$ and $|J| - 1 = 0$, therefore the expression inside the sum becomes $1 \cdot |A_2|$.

### Principle with restriction

For a universe $X$, with $A_1, A_2, \dots, A_n$ subsets of that universe, the principle of inclusion-exclusion can be written as:

$$
\left|X\setminus\bigcup_{i=1}^n A_i \right| = |X|+\sum_{\emptyset \neq J\subseteq \{1,2,\ldots ,n\}} (-1)^{|J|}{\Biggl |}\bigcap_{j\in J}A_{j}{\Biggr |}
$$

Note that now the subsets with odd size are subtracted, since we are finding the difference with respect to the universe.

## Implementation

The straightforward implementation of PIE can be done using bitmasks to enumerate all subsets of $J$ explicitly.

```cpp
int answer = 0;
for (int mask = 0; mask < (1 << n); mask++) {
    // (1)
    int cnt = 0, intersection_size = 0;
    for (int i = 0; i < n; i++) { // (2)
        if (mask & (1 << i)) cnt++;
        // (3)
    }
    if (cnt & 1) answer -= intersection_size;
    else answer += intersection_size;
}
```

1. If you have another way to iterate all bitmasks, that's fine too.
2. You can use `__builtin_popcount` but people often use the `for` above to compute the cardinality of the intersection.
3. Compute the intersection size of the active subset J in some way.


!!! note "Not always implemented like this"
    In practice, PIE can be observed in many ways when solving problems; the bitmask implementation is rarely used because the constraints often make this implementation impractical.

    The core idea is what's valuable, since it can be used with combinatorics or counting in general, and it won't always be expressed in terms of sets and subsets.

With this implementation the complexity is $O(2^n n)$ excluding the computation of the intersection cardinality.

However, remember that PIE can appear in many forms; the bitmask/subset implementation is only a particular case.

## Problem explained

### [Count GCD](https://codeforces.com/problemset/problem/1750/D)

> _As a prerequisite it is important to understand the idea or observations of the solution; read the editorial if necessary, but it's good to think about the problem first_

??? example "Solution"
    The idea is that we need to find all numbers $k$ such that $\gcd\left(\frac{a_{i-1}}{a_i}, k\right) = 1$, i.e., that are coprime.
    We know that $k \le \frac{m}{a_i}$ since we must remove the resulting gcd that we want, so our universe $X$ will be the set of numbers that $k$ can take. That means: $|X| = \left\lfloor\frac{m}{a_i}\right\rfloor$.

    Now, for $\frac{a_{i-1}}{a_i}$ and $k$ to be coprime means they do not share any prime factor. For this we can use PIE.
    Let $A_{p_j}$ be the set of numbers divisible by the prime $p_j$, where $p_j$ is part of the prime factorization of $\frac{a_{i-1}}{a_i}$. Formally we need to compute:
    $$
    \left|X\setminus\bigcup_{i=1}^j A_{p_i} \right| = |X|+\sum_{\emptyset \neq J\subseteq \{1,2,\ldots ,j\}} (-1)^{|J|}{\Biggl |}\bigcap_{w\in J}A_{p_w}{\Biggr |}
    $$
    where $j$ is the number of prime factors of $\frac{a_{i-1}}{a_i}$.
    Now, what does that intersection represent? If we have the intersection of sets $A_{p_1}, A_{p_2}, \dots, A_{p_w}$, then those are the numbers divisible by $p_1$ and $p_2$ and … $p_w$; to know how many such numbers there are, we can simply say:
    $$
    \left\lfloor\frac{|X|}{\prod\limits_{i = 1}^{w}p_i}\right\rfloor
    $$
    Having this, the formula becomes:
    $$
    \text{coprimes} = \sum\limits_{S \subseteq \text{ prime factors of } \frac{a_{i-1}}{a_i}}{(-1)^{|S|}\left\lfloor \frac{|X|}{\prod\limits_{p \in S}p} \right\rfloor}
    $$
    If you look at the solution code, this is exactly the part that uses bitmasks (to iterate all subsets), and it can be shown that any number we will consider cannot have more than 9 prime factors, therefore the complexity is $O(2^9\cdot 9\cdot \log A + \sqrt{m})$.
    Code [here](https://codeforces.com/contest/1750/submission/329267244)


## More problems

Problems can be taken from this [list](https://youkn0wwho.academy/topic-list/principle_of_inclusion_and_exclusion).

## References

- [Cp algo](https://cp-algorithms.com/combinatorics/inclusion-exclusion.html)

