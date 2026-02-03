---
title: Gauss - Jacobi
tags: ['Análisis Numérico (Completo)']
---
Es un sistema iterativo para sistemas de grandes dimensiones,

Se puede resolver la $i$-esima ecuación del sistema $Ax = b$ para $x_i$ teniendo en cuenta la siguiente formula.

$$
x_i^k = \frac{1}{a_{ii}}
\begin{bmatrix}
\sum\limits_{j = 1;i \neq j}^{n}\left(-a_{ij}x_j^{k-1}\right) + b_i
\end{bmatrix}
$$

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
    x^1 = \begin{bmatrix}
    \underbrace{0}_{x_1},
    \underbrace{0}_{x_2},
    \underbrace{0}_{x_3},
    \underbrace{0}_{x_4}
    \end{bmatrix}
    $$
    
    Luego, se puede definir $x_1$ pero para la iteración $2$ con el vector propuesto hasta este momento.
    
    - $x_1^2 = \frac{0}{10} - \frac{2(0)}{10} + \frac{3}{5} = \frac{3}{5}$
    - $x_2^2 = \frac{0}{11} + \frac{0}{11} - \frac{3(0)}{11} + \frac{25}{11} = \frac{25}{11}$
    - $x_3^2 = -\frac{11}{10}$
    - $x_4^2 = \frac{15}{8}$
    
    Note que cada uno de los valores se obtiene reemplazando el vector solución actual con el sistema que se estableció anteriormente para cada una de las variables. Note que el nuevo vector solución es:
    
    $$
    x^2 = \begin{bmatrix}
    \underbrace{\frac{3}{5}}_{x_1},
    \underbrace{\frac{25}{11}}_{x_2},
    \underbrace{-\frac{11}{10}}_{x_3},
    \underbrace{\frac{15}{8}}_{x_4}
    \end{bmatrix}
    $$
    
    Luego, note que la primera variable de la solución, reemplazando con su respectiva ecuación queda de la forma:
    
    - $x_1^3 = \frac{25/11}{10} - \frac{2(-11/10)}{10} + \frac{6}{10} = 1.04727$
    - $x_2^3  = \dots = 1.7159$
    - $x_3^3 = \dots = - 0.805$
    - $x_4^3 = \dots = 0.885$
    
    De esta forma, el vector solución en la tercera iteración queda de la forma:
    
    $$
    x^3 = \begin{bmatrix}
    \underbrace{1.04727}_{x_1},
    \underbrace{1.7159}_{x_2},
    \underbrace{- 0.805}_{x_3},
    \underbrace{0.885}_{x_4}
    \end{bmatrix}
    $$
    
    Sin embargo, hay que determinar cuando parar con las iteraciones.
    
    ## ¿Cuando parar?
    
    Suponga que se tiene un vector $x^i$ resultado de la iteración $i$, luego, podemos compararlo con el vector $x^{i-1}$. Para comparar estos vectores, se puede sacar la norma de la diferencia de los vectores:
    
    $$
    |x^i - x^{i-1}|_2 < \epsilon
    $$
    
    Donde $\epsilon$ es la tolerancia y $|x|_2$ es la norma 2, la cual esta definida como: $\sqrt{x_1^2 + \dots + x_n^2}$ ya que la raiz y los exponentes estan a la 2.
    
    - Código en Matlab
        
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