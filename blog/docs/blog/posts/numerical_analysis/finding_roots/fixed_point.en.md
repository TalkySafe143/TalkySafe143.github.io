---
title: Fixed Point
---
# Fixed Point Method

A function has a fixed point if there exists a value for which $g(x) = x$, meaning the function intersects the line $y = x$.

!!! info "Existence and Uniqueness Theorem"
    - If $g \in C[a, b]$ and $g(x) \in [a, b]$ for all $x \in [a, b]$, then $g$ has at least one fixed point in $[a, b]$.
    - If additionally $|g^\prime(x)| \le k < 1$ for all $x \in (a, b)$, then the fixed point is unique.

??? example "Example"

    Given the function $f(x) = x^3 + 4x^2 - 10$, we want to find $x$ such that $f(x) = 0$. We can construct several $g(x)$ functions:
    
    1. $x = \frac{10}{x^2+4x}$
    2. $x = \sqrt{\frac{10-x^3}{4}}$
    3. $x = x^3 + 4x^2 - 10 + x$
    4. $x = \sqrt[3]{10-4x^2}$
    
    In this case, when iterating, $g_2(x)$ is the one that works correctly for the desired range because its derivative meets the convergence condition.
