---
title: Factorización LU
---
# Factorización LU

Factorizar matrices para solucionar otras ecuaciones. Si bien siempre que tenemos un sistema de ecuaciones que se pueden escribir $Ax = B$, también lo podemos escribirlo de la forma:

$$
LUx = B
$$

Donde $Ux$ es una matriz provisional, la cual se puede denotar $y$ como un vector provisional, luego $Ly = B$ y la idea es que $L$ es la matriz triangular inferior y $U$ es la matriz triangular superior.

??? example "Ejemplo"

    Considere el siguiente sistema:
    
    $$
    \begin{align*}
    x + 2y -z &= 3\\
    2x +y -2z &= 3\\
    -3x + y + z &=-6
    \end{align*}
    $$
    
    Sea
    
    $$
    A = \begin{bmatrix}
    1 & 2 & -1 \\
    2 & 1 & -2 \\
    -3 & 1 & 1 \\
    \end{bmatrix}
    $$
    
    Inicialmente 
    
    $$
    U = \begin{bmatrix}
    1 & 2 & -1 \\
    2 & 1 & -2 \\
    -3 & 1 & 1 \\
    \end{bmatrix}
    $$
    
    Y $L$ es la matriz identidad.
    
    > La factorización LU no admite cambio de filas, entonces tenemos que asegurar que ningún pivote sea $0$
    
    Entonces, tenemos que despejar la matriz triangular inferior en $U$ por medio de las operaciones, y todo lo que le pase a $U$ va a pasar a $L$.
    
    En el ejemplo, podemos hacer las siguientes operaciones:
    
    - $F_2 = F_2 - 2F_1$
    - $F_3 = F_3 + 3F_1$
    
    Luego, la matriz $U$ queda de la siguiente manera:
    
    $$
    U = \begin{bmatrix}
    1 & 2 & -1 \\
    0 & -3 & 0 \\
    0 & 7 & -2 \\
    \end{bmatrix}
    $$
    
    Note que el factor de la primera operación tiene un factor de $-2$ que esta multiplicando a $F_1$, entonces en $L$ vamos a almacenar el mismo factor con el signo cambiado. Luego, después de esas dos operaciones $L$ queda así:
    
    $$
    L = \begin{bmatrix}
    1 & 0 & 0 \\
    2 & 1 & 0 \\
    -3 & 0 & 1 \\
    \end{bmatrix}
    $$
    
    Note que después tenemos que hacer la siguiente operación:
    
    - $F_3 = F_3 + \frac{7}{3}F_2$
    
    Entonces las matrices quedan de la siguiente manera:
    
    $$
    U = \begin{bmatrix}
    1 & 2 & -1 \\
    0 & -3 & 0 \\
    0 & 0 & -2 \\
    \end{bmatrix} L = \begin{bmatrix}
    1 & 0 & 0 \\
    2 & 1 & 0 \\
    -3 & -\frac{7}{3} & 1 \\
    \end{bmatrix}
    $$
    
    Hay que asegurarse que $LU = A$.
    
    Entonces, ahora tenemos que ver que $Ly = B$ donde $y$ es nuestro vector provisional:
    
    $$
    \begin{bmatrix}
    1 & 0 & 0 \\
    2 & 1 & 0 \\
    -3 & -\frac{7}{3} & 1 \\
    \end{bmatrix} 
    \begin{bmatrix}
    y_1\\
    y_2\\
    y_3
    \end{bmatrix} =
    \begin{bmatrix}
    3\\
    3\\
    -6
    \end{bmatrix}
    $$
    
    Solucionando este sistema de ecuaciones, nos da que:
    
    - $y_1 = 3, y_2 = -3, y_3 = -4$
    
    Luego, en realidad, tenemos que hacer $Ux = y$, por lo tanto, podemos solucionar un nuevo sistema de ecuaciones:
    
    $$
    \begin{bmatrix}
    1 & 2 & -1 \\
    0 & -3 & 0 \\
    0 & 0 & -2 \\
    \end{bmatrix}
    \begin{bmatrix}
    x_1\\
    x_2\\
    x_3
    \end{bmatrix} =
    \begin{bmatrix}
    3\\
    -3\\
    -4
    \end{bmatrix}
    $$
    
    Note que cuando solucionemos este sistema, nos va a dar nuestro vector de variables iniciales:
    
    - $x_1 = 3, x_2 = 1, x_3 = 2$
