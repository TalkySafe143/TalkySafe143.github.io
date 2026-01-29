---
title: Bisection
---
# Bisection

To find a root $f(x) = 0$. Based on the Intermediate Value Theorem, if $f \in C[a, b]$ and $f(a)$ and $f(b)$ have opposite signs, then there exists at least one value $p \in (a, b)$ such that $f(p) = 0$.

### Algorithm

The midpoint $p$ is calculated in each iteration:

$$
p = \frac{a+b}{2}
$$

It is a type of binary search that guarantees convergence if the initial signs condition is met.
