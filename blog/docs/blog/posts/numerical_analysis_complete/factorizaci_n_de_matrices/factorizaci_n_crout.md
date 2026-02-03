---
title: Factorización Crout
tags: ['Análisis Numérico (Completo)']
---
Es una factorización $LU$. Donde:

- $L$ es una matriz triangular inferior.
??? example "$U$ es una matriz triangular superior."
    - A diferencia con $LU$ normal, la matriz $U$ es la que lleva los $1$s en la diagonal.

Es mas común utilizarlas para las matrices de banda

??? example "Matrices de banda"
    
    Es una matriz donde alguna de sus diagonales tiene todos ceros. Por ejemplo considere:
    
    $$
    \begin{bmatrix}
    2 & -1 & 0 & 0\\
    -1 & 2 & -1 & 0\\
    0 & -1 & 2 & -1\\
    0 & 0 & -1 & 2\\
    \end{bmatrix}
    $$
    
    En este caso, se le denota como matriz tribanda, ya que hay 3 diagonales que no tienen ceros por completo.
    

Considere la siguiente matriz:

$$
A = \begin{bmatrix}
2 & -1 & 0 & 0\\
-1 & 2 & -1 & 0\\
0 & -1 & 2 & -1\\
0 & 0 & -1 & 2\\
\end{bmatrix}
$$

Luego, por la factorización tenemos que:

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
l_{31} & l_{32} & l_{33} & 0\\
l_{41} & l_{42} & l_{43} & l_{44}\\
\end{bmatrix}
$$

Sin embargo, $L$ va a heredar las bandas que tienen cero. En este ejemplo contiene:

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
1 & u_{12} & u_{13} & u_{14}\\
0 & 1 & u_{23} & u_{24}\\
0 & 0 & 1 & u_{34}\\
0 & 0 & 0 & 1\\
\end{bmatrix}
$$

Sin embargo, $U$ tambien contiene las bandas que son 0. Luego queda:

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

Haciendo la multiplicación, tenemos que:

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

> En este caso, la matriz quedó de esta manera por el ejemplo, no todas las martices son así
> 

Luego, podemos resolver las variables de cada una de las matrices por medio de comparación. De esta manera podemos resolver $LUx = b$ tomando $Ux = y$ como un vector solución.