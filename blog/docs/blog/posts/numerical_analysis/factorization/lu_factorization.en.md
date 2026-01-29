---
title: LU Factorization
---
# LU Factorization

Factorizing matrices to solve other equations. While we always have a system of equations that can be written as $Ax = B$, we can also write it in the form:

$$
LUx = B
$$

Where $Ux$ is a provisional matrix, which can be denoted as $y$ as a provisional vector, then $Ly = B$. The idea is that $L$ is the lower triangular matrix and $U$ is the upper triangular matrix.

??? example "Example"

    Consider the following system:
    
    $$
    \begin{align*}
    x + 2y -z &= 3\\
    2x +y -2z &= 3\\
    -3x + y + z &=-6
    \end{align*}
    $$
    
    Let
    
    $$
    A = \begin{bmatrix}
    1 & 2 & -1 \\
    2 & 1 & -2 \\
    -3 & 1 & 1 \\
    \end{bmatrix}
    $$
    
    Initially 
    
    $$
    U = \begin{bmatrix}
    1 & 2 & -1 \\
    2 & 1 & -2 \\
    -3 & 1 & 1 \\
    \end{bmatrix}
    $$
    
    And $L$ is the identity matrix.
    
    > LU factorization does not allow row swapping, so we must ensure that no pivot is $0$.
    
    Then, we must isolate the lower triangular matrix in $U$ through row operations, and everything that happens to $U$ will be recorded in $L$.
    
    In the example, we can perform the following operations:
    
    - $F_2 = F_2 - 2F_1$
    - $F_3 = F_3 + 3F_1$
    
    Then, the matrix $U$ looks as follows:
    
    $$
    U = \begin{bmatrix}
    1 & 2 & -1 \\
    0 & -3 & 0 \\
    0 & 7 & -2 \\
    \end{bmatrix}
    $$
    
    Note that the factor of the first operation is $-2$ multiplying $F_1$, so in $L$ we will store the same factor with the sign changed. After these two operations, $L$ looks like this:
    
    $$
    L = \begin{bmatrix}
    1 & 0 & 0 \\
    2 & 1 & 0 \\
    -3 & 0 & 1 \\
    \end{bmatrix}
    $$
    
    Next, we need to perform the following operation:
    
    - $F_3 = F_3 + \frac{7}{3}F_2$
    
    Then the matrices become:
    
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
    
    We must verify that $LU = A$.
    
    Then, we must solve $Ly = B$ where $y$ is our provisional vector:
    
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
    
    Solving this system gives:
    
    - $y_1 = 3, y_2 = -3, y_3 = -4$
    
    Then, we solve $Ux = y$ to find our original variables:
    
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
    
    Solving this system gives:
    
    - $x_1 = 3, x_2 = 1, x_3 = 2$
