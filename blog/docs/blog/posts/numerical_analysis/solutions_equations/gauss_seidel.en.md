---
title: Gauss-Seidel
---
# Gauss - Seidel

This is another iterative system for solving linear equations, where each variable $i$ at iteration $k$ is computed as:

$$
x_i^k = \frac{1}{a_{ii}}
\left[
- \sum_{j = 1}^{i-1}\left(a_{ij}x_{j}^k\right) - \sum_{j = i+1}^n\left(a_{ij}x_j^{k-1}\right) + b_i
\right]
$$

Unlike Gauss-Jacobi, in this method, we use the newly calculated values within the same iteration for the subsequent variables in the system.

??? example "Step-by-Step Example"
    
    Solve the following equation:
    
    $$
    \begin{align}
    10x_1-x_2+2x_3 &= 6 \\
    -x_1+11x_2-x_3 + 3x_4 &= 25 \\
    2x_1-x_2+10x_3 - x_4 &= -11 \\
    3x_2-x_3 + 8x_4 &= 15 \\
    \end{align}
    $$
    
    1. **Isolate variables**:
    
        $$
        \begin{align*}
        x_1  &= \frac{x_2}{10} - \frac{2x_3}{10} + 0.6 \\
        x_2  &= \frac{x_1}{11} + \frac{x_3}{11} - \frac{3x_4}{11} + \frac{25}{11} \\
        x_3 &= -\frac{2x_1}{10} + \frac{x_2}{10} + \frac{x_4}{10} - 1.1 \\
        x_4 &= -\frac{3x_2}{8} + \frac{x_3}{8} + \frac{15}{8}
        \end{align*}
        $$
    
    2. **Iteration 1**: Start with $x^0 = [0, 0, 0, 0]$.
        - $x^1_1 = \frac{0}{10} - \frac{2(0)}{10} + 0.6 = 0.6$
        - $x_2^1 = \frac{0.6}{11} + \frac{0}{11} - \frac{3(0)}{11} + \frac{25}{11} = 2.3272$ (Using the new $x_1$ value)
        - $x_3^1 = -\frac{2(0.6)}{10} + \frac{2.3272}{10} + \frac{0}{10} - 1.1 = -0.9873$
        - $x_4^1 = -\frac{3(2.3272)}{8} + \frac{-0.9873}{8} + 1.875 = 0.8789$
        
        New vector $x^1 = [0.6, 2.3272, -0.9873, 0.8789]$.

In general, when computing variable $x_i$, all variables $x_j$ where $j < i$ have already been updated and are used immediately.
