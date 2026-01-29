---
title: Factorización Crout
---
# Factorización Crout

Es una factorización $LU$ donde:

- $L$ es una matriz triangular inferior.
- $U$ es una matriz triangular superior.
    - A diferencia con $LU$ normal, la matriz $U$ es la que lleva los $1$s en la diagonal.

Es mas común utilizarlas para las matrices de banda.

!!! info "Matrices de banda"

    Es una matriz donde alguna de sus diagonales tiene todos ceros. Por ejemplo considere una matriz tribanda (3 diagonales con datos):
    
    $$
    \begin{bmatrix}
    2 & -1 & 0 & 0\\
    -1 & 2 & -1 & 0\\
    0 & -1 & 2 & -1\\
    0 & 0 & -1 & 2\\
    \end{bmatrix}
    $$

??? example "Ejemplo"

    Considere la siguiente matriz:
    
    $$
    A = \begin{bmatrix}
    2 & -1 & 0 & 0\\
    -1 & 2 & -1 & 0\\
    0 & -1 & 2 & -1\\
    0 & 0 & -1 & 2\\
    \end{bmatrix}
    $$
    
    Por la factorización Crout:
    
    $$
    \begin{bmatrix}
    2 & -1 & 0 & 0\\
    -1 & 2 & -1 & 0\\
    0 & -1 & 2 & -1\\
    0 & 0 & -1 & 2\\
    \end{bmatrix} =
    \begin{bmatrix}
    l_{11} & 0 & 0 & 0\\
    l_{21} & l_{22} & 0 & 0\\
    0 & l_{32} & l_{33} & 0\\
    0 & 0 & l_{43} & l_{44}\\
    \end{bmatrix}
    \begin{bmatrix}
    1 & u_{12} & 0 &0\\
    0 & 1 & u_{23} &0\\
    0 & 0 & 1 & u_{34}\\
    0 & 0 & 0 & 1\\
    \end{bmatrix}
    $$
    
    $L$ y $U$ heredan las bandas que tienen cero. Haciendo la multiplicación:
    
    $$
    \begin{bmatrix}
    2 & -1 & 0 & 0\\
    -1 & 2 & -1 & 0\\
    0 & -1 & 2 & -1\\
    0 & 0 & -1 & 2\\
    \end{bmatrix} =
    \begin{bmatrix}
    l_{11} & l_{11}u_{12} & 0 & 0\\
    l_{21} & l_{21}u_{12}+l_{22} & l_{22}u_{23} & 0\\
    0 & l_{32} & l_{32}u_{23}+l_{33} & l_{33}u_{34}\\
    0 & 0 & l_{43} & l_{43}u_{34}+l_{44}\\
    \end{bmatrix}
    $$
    
    Note que en este caso, la matriz quedó de esta manera por el ejemplo. Luego, podemos resolver las variables por comparación. De esta manera podemos resolver $LUx = b$ tomando $Ux = y$ como un vector solución intermedio.
