---
title: Gauss - Seidel
tags: ['Análisis Numérico (Completo)']
---
En este caso, este es otro sistema iterativo para la solucion de ecuaciones lineales, y cada una de las variables $i$ en la iteración $k$ se puede ver de la forma:

$$
x_i^k = \frac{1}{a_{ii}}
\left[
- \sum_{j = 1}^n\left(a_{ij}x_{j}^k\right) - \sum_{j = i+1}^n\left(a_{ij}x_j^{k-1}\right) + b_i
\right]
$$

Podemos tomar el mismo ejemplo que Gauss Jacobi

??? example "Ejemplo"
    
    Resolver la siguiente ecuación:
    
    $$
    \begin{align}
    10x_1-x_2+2x_3 &= 6 \\
    -x_1+11x_2-x_3 + 3x_4 &= 25 \\
    2x_1-x_2+10x_3 - x_4 &= -11 \\
    3x_2-x_3 + 8x_4 &= 15 \\
    \end{align}
    $$
    
    Entonces, para cada una de las ecuaciones, vamos a despejar cada una de las variables que pertenecen, tal como la formula:
    
    $$
    \begin{align*}
    x_1  &= \frac{x_2}{10} - \frac{2x_3}{10} + \frac{6}{10} \\
    x_2  &= \frac{x_1}{11} + \frac{x_3}{11} - \frac{3x_4}{11} + \frac{25}{11} \\
    x_3 &= -\frac{2x_1}{10} + \frac{x_2}{10} + \frac{x_4}{10} - \frac{11}{10} \\
    x_4 &= -\frac{3x_2}{8} + \frac{x_3}{8} + \frac{15}{8}
    \end{align*}
    $$
    
    De esta manera, se puede definir un vector inicial para la iteración 1.
    
    $$
    x^0 = \begin{bmatrix}
    \underbrace{0}_{x_1},
    \underbrace{0}_{x_2},
    \underbrace{0}_{x_3},
    \underbrace{0}_{x_4}
    \end{bmatrix}
    $$
    
    Entonces, podemos comenzar a calcular las iteraciones para cada una de las variables:
    
    - $x^1_1 = \frac{0}{10} - \frac{2(0)}{10} + \frac{6}{10} = 0.6$
    
    A diferencia de Gauss Jacobi, en este caso, vamos a tomar el nuevo valor de $x_1$ que acabamos de calcular para la iteración 1.
    
    - $x_2^1 = \frac{0.6}{11} + \frac{0}{11} - \frac{3(0)}{11} + \frac{25}{11} = 2.327$
    
    Entonces, para las demás variables, ya tenemos el nuevo valor de $x_1, x_2$. En general, si vamos en la variable $x_i$, todas las variables $x_j$ tal que $j < i$ ya las deberíamos tener calculadas y las vamos a usar.
    
    Para la primera iteración, vamos a ver que el vector solución queda de la manera:
    
    $$
    x^1 = \begin{bmatrix}
    \underbrace{0.6}_{x_1},
    \underbrace{2.327}_{x_2},
    \underbrace{-0.987}_{x_3},
    \underbrace{0.879}_{x_4}
    \end{bmatrix}
    $$