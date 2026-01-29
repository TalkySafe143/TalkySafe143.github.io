---
title: Crout Factorization
---
# Crout Factorization

It is an $LU$ factorization where:

- $L$ is a lower triangular matrix.
- $U$ is an upper triangular matrix.
    - Unlike normal $LU$, the matrix $U$ has $1$s on its diagonal.

It is most commonly used for band matrices.

!!! info "Band Matrices"

    A matrix where some of its diagonals consist of zeros. For example, consider a tridiagonal matrix (3 diagonals with data):
    
    $$
    \begin{bmatrix}
    2 & -1 & 0 & 0\\
    -1 & 2 & -1 & 0\\
    0 & -1 & 2 & -1\\
    0 & 0 & -1 & 2\\
    \end{bmatrix}
    $$

??? example "Example"

    Consider the matrix:
    
    $$
    A = \begin{bmatrix}
    2 & -1 & 0 & 0\\
    -1 & 2 & -1 & 0\\
    0 & -1 & 2 & -1\\
    0 & 0 & -1 & 2\\
    \end{bmatrix}
    $$
    
    By Crout factorization:
    
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
    
    $L$ and $U$ inherit the bands of zeros. Performing the multiplication:
    
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
    
    Note that in this case, the matrix structure is simplified for the example. We solve for variables by comparison, then solve $LUx = b$ by solving $Ly = b$ and $Ux = y$.
