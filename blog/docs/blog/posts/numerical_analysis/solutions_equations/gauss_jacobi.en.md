---
title: Gauss-Jacobi
---
# Gauss - Jacobi

It is an iterative system for large-scale systems. The $i$-th equation of the system $Ax = b$ can be solved for $x_i$ using the following formula:

$$
x_i^k = \frac{1}{a_{ii}}
\left[
\sum\limits_{j = 1;i \neq j}^{n}\left(-a_{ij}x_j^{k-1}\right) + b_i
\right]
$$

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
        x_1  &= \frac{x_2}{10} - \frac{2x_3}{10} + \frac{6}{10} \\
        x_2  &= \frac{x_1}{11} + \frac{x_3}{11} - \frac{3x_4}{11} + \frac{25}{11} \\
        x_3 &= -\frac{2x_1}{10} + \frac{x_2}{10} + \frac{x_4}{10} - \frac{11}{10} \\
        x_4 &= -\frac{3x_2}{8} + \frac{x_3}{8} + \frac{15}{8}
        \end{align*}
        $$
    
    2. **Iteration 1**: Start with $x^1 = [0, 0, 0, 0]$.
    3. **Iteration 2**: Substitute $x^1$ values:
        - $x_1^2 = \frac{0}{10} - \frac{2(0)}{10} + 0.6 = 0.6$
        - $x_2^2 = \frac{0}{11} + \frac{0}{11} - \frac{3(0)}{11} + \frac{25}{11} = 2.2727$
        - $x_3^2 = -1.1$
        - $x_4^2 = 1.875$
        
        New vector $x^2 = [0.6, 2.2727, -1.1, 1.875]$.
        
    4. **Iteration 3**: Substitute $x^2$ values:
        - $x_1^3 = \frac{2.2727}{10} - \frac{2(-1.1)}{10} + 0.6 = 1.04727$
        - $x_2^3  = \dots = 1.7159$
        - $x_3^3 = \dots = - 0.805$
        - $x_4^3 = \dots = 0.885$
        
        New vector $x^3 = [1.04727, 1.7159, -0.805, 0.885]$.

### Stopping Criterion

Let $x^k$ be the vector result of iteration $k$; we compare it with $x^{k-1}$. The process stops when the tolerance $\epsilon$ is reached:

$$
|x^k - x^{k-1}|_2 < \epsilon
$$

Where $|x|_2$ is the Euclidean norm: $\sqrt{x_1^2 + \dots + x_n^2}$.

??? example "Matlab Code"
    
    ```matlab
    A = [10 -1 2 0; -1 11 -1 3; 2 -1 10 -1; 0 3 -1 8];
    b = [6; 25; -11; 15];
    x_n = [0; 0; 0; 0];
    seed = [0; 0; 0; 0];
    counter = 0;
    epsilon = 0.000001;
    vector_norm = 1;
    
    while vector_norm > epsilon
            x_k = x_n;
           for i = 1:4
               x_k(i) = 1/A(i, i);
               sum = 0;
               for j = 1:4
                   if j == i
                       continue;
                   end
                   sum = sum + (-A(i, j)*x_n(j));
               end
               x_k(i) = x_k(i)*sum + b(i);
           end
           vector_norm = vecnorm(x_k - x_n, 2, 1);
           x_n = x_k;
           counter = counter + 1;
    end
    
    x_n
    counter
    ```
