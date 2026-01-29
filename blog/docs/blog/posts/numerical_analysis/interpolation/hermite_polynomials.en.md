---
title: Hermite Polynomials
---
# Hermite Polynomials

Hermite polynomials are a special case of **osculating polynomials**. These polynomials are capable of replicating both the function values and their derivatives at a given set of nodes.

### Definition

For a set of $n+1$ points, the Hermite polynomial $H_{2n+1}(x)$ is the unique polynomial of least degree ($2n+1$) such that:

- $P(x_i) = f(x_i)$ for all $i = 0, \dots, n$.
- $P^\prime(x_i) = f^\prime(x_i)$ for all $i = 0, \dots, n$.

### Construction using Lagrange Polynomials

It can be expressed as:

$$
P_{2n +1}(x) = \sum\limits_{j = 0}^nf(x_j)H_{n, j}(x) + \sum\limits_{j = 0}^nf^\prime(x_j)\hat{H}_{n, j}(x)
$$

Where:
- $H_{n, j}(x) = [1-2(x-x_j)L^\prime_{n, j}(x_j)] L^2_{n, j}(x)$
- $\hat{H}_{n, j}(x) = (x - x_j)L^2_{n, j}(x)$

$L_{n,j}$ represents the basic Lagrange polynomials.

### Construction using Divided Differences

Newton's method can be extended. We define a new sequence $z_i$ such that each node is repeated:
$$ z_{2i} = z_{2i+1} = x_i $$

To resolve the indeterminacy at repeated points, we use the derivative:
$$ f[z_{2i}, z_{2i+1}] = f^\prime(x_i) $$

Then, the polynomial is constructed normally:
$$
P_{2n + 1}(x) = f[z_0] + \sum_{k = 1}^{2n+1}\left( f[z_0, z_1, \dots, z_k] \prod_{i = 0}^{k-1}(x-z_{i}) \right)
$$

??? example "Step-by-Step Example"
    
    Given points $x_0 = -1, x_1= 0, x_2 = 2$:
    - $f(x_0) = 5, f(x_1) = 2, f(x_2) = -4$
    - $f^\prime(x_0) = 12, f^\prime(x_1) = -7, f^\prime(x_2) = -51$
    
    1. **Lagrange**:
       - $L_0 = (x^2 - 2x)/3, L^\prime_0(-1) = -4/3$
       - $L_1 = (x^2 -x-2)/(-2), L^\prime_1(0) = 1/2$
       - $L_2 = (x^2 + x)/6, L^\prime_2(2) = 5/6$
    2. **Hermite Components**:
       - $H_0 = [1 - 2(x+1)(-4/3)]L_0^2$
       - $H_1 = [1 - 2(x)(1/2)]L_1^2$
       - $H_2 = [1 - 2(x-2)(5/6)]L_2^2$
    3. **Result**: The final $P_5(x)$ polynomial sums these contributions multiplied by $f(x_j)$ and $f^\prime(x_j)$.
