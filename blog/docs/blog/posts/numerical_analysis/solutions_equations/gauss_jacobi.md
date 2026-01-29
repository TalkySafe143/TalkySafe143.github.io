---
title: Gauss Jacobi
---
# Gauss - Jacobi

Es un sistema iterativo para sistemas de grandes dimensiones. Se puede resolver la $i$-esima ecuación del sistema $Ax = b$ para $x_i$ teniendo en cuenta la siguiente formula:

$$
x_i^k = \frac{1}{a_{ii}}
\left[
\sum\limits_{j = 1;i \neq j}^{n}\left(-a_{ij}x_j^{k-1}\right) + b_i
\right]
$$

??? example "Ejemplo paso a paso"
    
    Resolver la siguiente ecuación:
    
    $$
    \begin{align}
    10x_1-x_2+2x_3 &= 6 \\
    -x_1+11x_2-x_3 + 3x_4 &= 25 \\
    2x_1-x_2+10x_3 - x_4 &= -11 \\
    3x_2-x_3 + 8x_4 &= 15 \\
    \end{align}
    $$
    
    1. **Despejar variables**:
    
        $$
        \begin{align*}
        x_1  &= \frac{x_2}{10} - \frac{2x_3}{10} + \frac{6}{10} \\
        x_2  &= \frac{x_1}{11} + \frac{x_3}{11} - \frac{3x_4}{11} + \frac{25}{11} \\
        x_3 &= -\frac{2x_1}{10} + \frac{x_2}{10} + \frac{x_4}{10} - \frac{11}{10} \\
        x_4 &= -\frac{3x_2}{8} + \frac{x_3}{8} + \frac{15}{8}
        \end{align*}
        $$
    
    2. **Iteración 1**: Iniciamos con el vector $x^1 = [0, 0, 0, 0]$.
    3. **Iteración 2**: Reemplazamos los valores de $x^1$:
        - $x_1^2 = \frac{0}{10} - \frac{2(0)}{10} + \frac{6}{10} = 0.6$
        - $x_2^2 = \frac{0}{11} + \frac{0}{11} - \frac{3(0)}{11} + \frac{25}{11} = 2.2727$
        - $x_3^2 = -1.1$
        - $x_4^2 = 1.875$
        
        Nuevo vector $x^2 = [0.6, 2.2727, -1.1, 1.875]$.
        
    4. **Iteración 3**:
        - $x_1^3 = \frac{2.2727}{10} - \frac{2(-1.1)}{10} + 0.6 = 1.04727$
        - $x_2^3  = \dots = 1.7159$
        - $x_3^3 = \dots = - 0.805$
        - $x_4^3 = \dots = 0.885$
        
        Nuevo vector $x^3 = [1.04727, 1.7159, -0.805, 0.885]$.

### Criterio de parada

Suponga que se tiene un vector $x^k$ resultado de la iteración $k$, luego podemos compararlo con el vector $x^{k-1}$. Se detiene cuando se cumple la tolerancia $\epsilon$:

$$
|x^k - x^{k-1}|_2 < \epsilon
$$

Donde $|x|_2$ es la norma euclidiana: $\sqrt{x_1^2 + \dots + x_n^2}$.

??? example "Código en Matlab"
    
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
