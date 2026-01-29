---
title: LDLt Factorization
---
# $LDL^t$ Factorization

In this case:

- $L$ is the lower triangular matrix and $L^t$ is its transpose.
- $D$ is a diagonal matrix.

!!! info "Conditions"

    - $A$ must be a symmetric matrix (i.e., $A = A^t$).

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

First multiplication ($LD$):

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

Second multiplication:

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

In this case, the values are found by comparison.

To solve $Ax = b$, we have $LDL^tx = b$. We can use a provisional solution vector: $LDy = b$, then solve $L^tx = y$.
