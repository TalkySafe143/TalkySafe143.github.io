---
title: Gauss Seidel
---
# Gauss - Seidel

Este es otro sistema iterativo para la solución de ecuaciones lineales, donde cada una de las variables $i$ en la iteración $k$ se puede ver de la forma:

$$
x_i^k = \frac{1}{a_{ii}}
\left[
- \sum_{j = 1}^{i-1}\left(a_{ij}x_{j}^k\right) - \sum_{j = i+1}^n\left(a_{ij}x_j^{k-1}\right) + b_i
\right]
$$

A diferencia de Gauss Jacobi, en este caso vamos a utilizar los nuevos valores calculados en la misma iteración para las siguientes variables del sistema.

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
        x_1  &= \frac{x_2}{10} - \frac{2x_3}{10} + 0.6 \\
        x_2  &= \frac{x_1}{11} + \frac{x_3}{11} - \frac{3x_4}{11} + \frac{25}{11} \\
        x_3 &= -\frac{2x_1}{10} + \frac{x_2}{10} + \frac{x_4}{10} - 1.1 \\
        x_4 &= -\frac{3x_2}{8} + \frac{x_3}{8} + \frac{15}{8}
        \end{align*}
        $$
    
    2. **Iteración 1**: Iniciamos con $x^0 = [0, 0, 0, 0]$.
        - $x^1_1 = \frac{0}{10} - \frac{2(0)}{10} + 0.6 = 0.6$
        - $x_2^1 = \frac{0.6}{11} + \frac{0}{11} - \frac{3(0)}{11} + \frac{25}{11} = 2.3272$ (Aquí usamos el nuevo valor de $x_1$)
        - $x_3^1 = -\frac{2(0.6)}{10} + \frac{2.3272}{10} + \frac{0}{10} - 1.1 = -0.9873$
        - $x_4^1 = -\frac{3(2.3272)}{8} + \frac{-0.9873}{8} + 1.875 = 0.8789$
        
        Nuevo vector $x^1 = [0.6, 2.3272, -0.9873, 0.8789]$.

En general, si vamos en la variable $x_i$, todas las variables $x_j$ tal que $j < i$ ya las hemos calculado y las vamos a usar inmediatamente.
