---
title: Factorización LDLt
---
# Factorización $LDL^t$

En este caso:

- $L$ es la triangular inferior y $L^t$ su traspuesta.
- $D$ es una matriz diagonal.

!!! info "Condiciones"

    - $A$ tiene que ser una matriz simétrica (Quiere decir que $A = A^t$).

$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{bmatrix} = \begin{bmatrix}
1 & 0 & 0 \\
l_{21} & 1 & 0 \\
l_{31} & l_{32} & 1 \\
\end{bmatrix} 
\begin{bmatrix}
d_{11} & 0 & 0 \\
0 & d_{22} & 0 \\
0 & 0 & d_{33} \\
\end{bmatrix} 
\begin{bmatrix}
1 & l_{21} & l_{31} \\
0 & 1 & l_{32} \\
0 & 0 & 1 \\
\end{bmatrix}
$$

Primera multiplicación ($LD$):

$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{bmatrix} = \begin{bmatrix}
d_{11} & 0 & 0 \\
l_{21}d_{11} & d_{22} & 0 \\
l_{31}d_{11} & l_{32}d_{22} & d_{33} \\
\end{bmatrix} 
\begin{bmatrix}
1 & l_{21} & l_{31} \\
0 & 1 & l_{32} \\
0 & 0 & 1 \\
\end{bmatrix}
$$

Segunda multiplicación:

$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{bmatrix} = \begin{bmatrix}
d_{11} & d_{11}l_{21} & d_{11}l_{31} \\
l_{21}d_{11} & l_{21}^2d_{11}+d_{22} & l_{21}d_{11}l_{31} + l_{32}d_{22} \\
l_{31}d_{11} & l_{31}d_{11}l_{21} + l_{32}d_{22} & l_{31}^2d_{11}+l_{32}^2d_{22}+d_{33} \\
\end{bmatrix} 
$$

En este caso, se tiene que hacer por comparación.

Si queremos solucionar $Ax = b$, entonces tenemos que: $LDL^tx = b$, luego podemos usar un vector solución provisional: $LDy = b, L^tx = y$.
