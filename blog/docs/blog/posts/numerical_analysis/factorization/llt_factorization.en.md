---
title: LLt Factorization
---
# $LL^t$ Factorization

This is a factorization where $L$ is the lower triangular matrix and $L^t$ is its transpose.

For $Ax = b$, we can write $LL^tx = b$. Similar to LU and PLU, we can solve for a provisional vector $y$ ($Ly = b$) and then solve $L^tx = y$.

!!! info "Conditions"

    - $A$ must be a symmetric matrix (i.e., $A = A^t$).

### Method 1: Direct Comparison

We can construct a matrix of the form:

$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{bmatrix} =
\begin{bmatrix}
l_{11} & 0 & 0 \\
l_{21} & l_{22} & 0 \\
l_{31} & l_{32} & l_{33} \\
\end{bmatrix}
\begin{bmatrix}
l_{11} & l_{21} & l_{31} \\
0 & l_{22} & l_{32} \\
0 & 0 & l_{33} \\
\end{bmatrix}
$$

Then, perform the multiplication $LL^t$:

$$
LL^t = \begin{bmatrix}
l_{11}^2 & l_{21}l_{11} & l_{11}l_{31} \\\\
l_{21}l_{11} & l_{22}^2 + l_{21}^2 & l_{21}l_{31} + l_{22}l_{32} \\\\
l_{31}l_{11} & l_{21}l_{31} + l_{22}l_{32} & l_{33}^2 + l_{32}^2 + l_{31}^2 \\
\end{bmatrix}
$$

Since $A = LL^t$, we find the values by comparison starting from $a_{11}$:

- $a_{11} = l_{11}^2$
- $l_{21}l_{11} = a_{21}$

### Method 2: Via LDU Factorization

We can build $L = \overline{L}D^{\frac{1}{2}}$.

1. Perform $\overline{L}DU$ factorization.
2. Find the square root of $D$ ($D^{\frac{1}{2}}$).
3. Compute $L = \overline{L}D^{\frac{1}{2}}$.

??? example "Example"

    Consider the matrix:
    
    $$
    A = \begin{bmatrix}
    4 & 6 & 10 \\
    6 & 25 & 19 \\
    10 & 19 & 51 \\
    \end{bmatrix}
    $$
    
    Initially:
    
    $$
    U_1 = \begin{bmatrix}
    4 & 6 & 10 \\
    6 & 25 & 19 \\
    10 & 19 & 51 \\
    \end{bmatrix} \overline{L}_1 = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1 \\
    \end{bmatrix}
    $$
    
    Operations:
    
    - $F_2 = F_2 - \frac{6}{4}F_1$
    - $F_3 = F_3 - \frac{10}{4}F_1$
    
    $$
    U_2 = \begin{bmatrix}
    4 & 6 & 10 \\
    0 & 16 & 4 \\
    0 & 4 & 26 \\
    \end{bmatrix} \overline{L}_2 = \begin{bmatrix}
    1 & 0 & 0 \\
    \frac{3}{2} & 1 & 0 \\
    \frac{5}{2} & 0 & 1 \\
    \end{bmatrix}
    $$
    
    Next operation:
    
    - $F_3 = F_3 - \frac{4}{16}F_2$
    
    $$
    U_3 = \begin{bmatrix}
    4 & 6 & 10 \\
    0 & 16 & 4 \\
    0 & 0 & 25 \\
    \end{bmatrix} \overline{L}_3 = \begin{bmatrix}
    1 & 0 & 0 \\
    \frac{3}{2} & 1 & 0 \\
    \frac{5}{2} & \frac{1}{4} & 1 \\
    \end{bmatrix}
    $$
    
    $D$ is the diagonal of $U_3$:
    
    $$
    \overline{L} = \begin{bmatrix}
    1 & 0 & 0 \\
    \frac{3}{2} & 1 & 0 \\
    \frac{5}{2} & \frac{1}{4} & 1 \\
    \end{bmatrix} D = \begin{bmatrix}
    4 & 0 & 0 \\
    0 & 16 & 0 \\
    0 & 0 & 25 \\
    \end{bmatrix}
    $$
    
    Root of $D$:
    
    $$
    D^{\frac{1}{2}} = \begin{bmatrix}
    2 & 0 & 0 \\
    0 & 4 & 0 \\
    0 & 0 & 5 \\
    \end{bmatrix}
    $$
    
    Compute $L = \overline{L}D^{\frac{1}{2}}$:
    
    $$
    L = \begin{bmatrix}
    1 & 0 & 0 \\
    \frac{3}{2} & 1 & 0 \\
    \frac{5}{2} & \frac{1}{4} & 1 \\
    \end{bmatrix} \begin{bmatrix}
    2 & 0 & 0 \\
    0 & 4 & 0 \\
    0 & 0 & 5 \\
    \end{bmatrix} = \begin{bmatrix}
    2 & 0 & 0 \\
    3 & 4 & 0 \\
    5 & 1 & 5 \\
    \end{bmatrix}
    $$
    
    Final $A = LL^t$ factorization:
    
    $$
    A = \begin{bmatrix}
    2 & 0 & 0 \\
    3 & 4 & 0 \\
    5 & 1 & 5 \\
    \end{bmatrix} \begin{bmatrix}
    2 & 3 & 5 \\
    0 & 4 & 1 \\
    0 & 0 & 5 \\
    \end{bmatrix}
    $$
