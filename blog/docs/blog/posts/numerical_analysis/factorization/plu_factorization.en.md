---
title: PLU Factorization
---
# PLU Factorization

This factorization allows for row swapping. It is constructed from:

- $P$ the permutation matrix. Its only task is to store row swaps.
- $L$ which is a lower triangular matrix.
- $U$ which is an upper triangular matrix.

We start from $Ax = B$, then $LUx = B$. The task of $P$ is to store the permutations and apply them to $B$. The system becomes: $PLUx = PB$.

The process is similar to LU factorization, but with $P$ keeping track of swaps.

??? example "Example 1"

    Let
    
    $$
    A = \begin{bmatrix}
    2 & 2 & 3 \\
    -4 & -4 & -3 \\
    4 & 8 & 3 \\
    \end{bmatrix}
    $$
    
    Keep track of the three matrices:
    
    $$
    U_1 = \begin{bmatrix}
    2 & 2 & 3 \\
    -4 & -4 & -3 \\
    4 & 8 & 3 \\
    \end{bmatrix} L_1 = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1 \\
    \end{bmatrix} P_1 = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1 \\
    \end{bmatrix}
    $$
    
    $P$ starts as the identity matrix.
    
    > Always operate with the pivot $a_{ii}$.
    
    Operations:
    
    - $F_2 = F_2 + 2F_1$
    - $F_3 = F_3 - 2F_1$
    
    Matrices become:
    
    $$
    U_2 = \begin{bmatrix}
    2 & 2 & 3 \\
    0 & 0 & 3 \\
    0 & 4 & -3 \\
    \end{bmatrix} L_2 = \begin{bmatrix}
    1 & 0 & 0 \\
    -2 & 1 & 0 \\
    2 & 0 & 1 \\
    \end{bmatrix} P_2 = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1 \\
    \end{bmatrix}
    $$
    
    Since $u_{22} = 0$, swap $F_2$ with $F_3$:
    
    $$
    U_3 = \begin{bmatrix}
    2 & 2 & 3 \\
    0 & 4 & -3 \\
    0 & 0 & 3
    \end{bmatrix} L_3 = \begin{bmatrix}
    1 & 0 & 0 \\
    2 & 1 & 0 \\
    -2 & 0 & 1 \\
    \end{bmatrix} P_3 = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 0 & 1 \\
    0 & 1 & 0 \\
    \end{bmatrix}
    $$
    
    Note:
    
    - $P$ records the swap.
    - $L$ swaps the values stored in its lower triangular part.

??? example "Example 2"

    Consider the system:
    
    $$
    \begin{align*}
    4x_3 &= -8 \\
    x_1 + 3x_2 + 2x_3 &= 1 \\
    2x_1 + 8x_2 + 4x_3 &= 6 \\
    \end{align*}
    $$
    
    Initially:
    
    $$
    U_1 = \begin{bmatrix}
    0 & 0 & 4 \\
    1 & 3 & 2 \\
    2 & 8 & 4 \\
    \end{bmatrix} L_1 = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1 \\
    \end{bmatrix} P_1 = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1 \\
    \end{bmatrix}
    $$
    
    - Swap $F_1$ with $F_2$:
    
    $$
    U_2 = \begin{bmatrix}
    1 & 3 & 2 \\
    0 & 0 & 4 \\
    2 & 8 & 4 \\
    \end{bmatrix} L_2 = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1 \\
    \end{bmatrix} P_2 = \begin{bmatrix}
    0 & 1 & 0 \\
    1 & 0 & 0 \\
    0 & 0 & 1 \\
    \end{bmatrix}
    $$
    
    - $F_3 = F_3 - 2F_1$:
    
    $$
    U_3 = \begin{bmatrix}
    1 & 3 & 2 \\
    0 & 0 & 4 \\
    0 & 2 & 0 \\
    \end{bmatrix} L_3 = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    2 & 0 & 1 \\
    \end{bmatrix} P_3 = \begin{bmatrix}
    0 & 1 & 0 \\
    1 & 0 & 0 \\
    0 & 0 & 1 \\
    \end{bmatrix}
    $$
    
    - Swap $F_3$ with $F_2$:
    
    $$
    U_4 = \begin{bmatrix}
    1 & 3 & 2 \\
    0 & 2 & 0 \\
    0 & 0 & 4 \\
    \end{bmatrix} L_4 = \begin{bmatrix}
    1 & 0 & 0 \\
    2 & 1 & 0 \\
    0 & 0 & 1 \\
    \end{bmatrix} P_4 = \begin{bmatrix}
    0 & 1 & 0 \\
    0 & 0 & 1 \\
    1 & 0 & 0 \\
    \end{bmatrix}
    $$
    
    Solve $Ly = PB$:
    
    $$
    \begin{align*}
    \begin{bmatrix}
    1 & 0 & 0 \\
    2 & 1 & 0 \\
    0 & 0 & 1 \\
    \end{bmatrix} 
    \begin{bmatrix}
    y_1 \\
    y_2 \\
    y_3 \\
    \end{bmatrix}
    &=
    \begin{bmatrix}
    0 & 1 & 0 \\
    0 & 0 & 1 \\
    1 & 0 & 0 \\
    \end{bmatrix}
    \begin{bmatrix}
    -8 \\
    1 \\
    6 \\
    \end{bmatrix} =
    \begin{bmatrix}
    1 \\
    6 \\
    -8 \\
    \end{bmatrix}
    \end{align*}
    $$
    
    So $y_1 = 1, y_2 = 4, y_3 = -8$. Now solve $Ux = y$:
    
    $$
    \begin{bmatrix}
    1 & 3 & 2 \\
    0 & 2 & 0 \\
    0 & 0 & 4 \\
    \end{bmatrix}
    \begin{bmatrix}
    x_1 \\
    x_2 \\
    x_3 \\
    \end{bmatrix}
    =
    \begin{bmatrix}
    1 \\
    4 \\
    -8 \\
    \end{bmatrix}
    $$
    
    Giving $x_1 = -1, x_2 = 2, x_3 = -2$.
