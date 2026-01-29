---
title: Lagrange Polynomials
---
# Lagrange Polynomials

Lagrange polynomials provide a way to construct a degree $n$ polynomial from $n+1$ available points $(x_i, f(x_i))$.

For each point $k$, the basis polynomial $L_{n,k}$ is defined as:

$$
L_{n,k}(x) = \prod\limits_{\substack{i=0 \\ i \neq k}}^n\frac{{(x-x_i)}}{{(x_k-x_i)}}
$$

!!! abstract "Analogy"

    It can be seen as a fraction where the numerator is the product of all $(x - x_i)$ terms except for $i = k$, and the denominator is the same product but evaluated at $x = x_k$.

### The Interpolaing Polynomial

Finally, the $n$-degree polynomial is constructed as a linear combination of the function values and their respective basis polynomials:

$$
P_n(x) = \sum_{i = 0}^n f(x_i)L_{n,i}(x)
$$

This polynomial guarantees that $P_n(x_i) = f(x_i)$ for all given nodes.
