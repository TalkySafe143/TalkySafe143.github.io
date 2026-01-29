---
title: SOR
---
# SOR (Successive Over-Relaxation)

To understand SOR, we must revisit eigenvalues and eigenvectors.

### Eigenvalues

Eigenvalues are identity markers for equation systems that indicate stability. An eigenvector is a vector that, when multiplied by the system matrix, results in a vector parallel to the original.

To calculate eigenvalues ($\lambda$), we must find the determinant: $\det{(A-\lambda I)} = 0$.

??? example "Eigenvalue Calculation"

    Consider the matrix $A$:
    
    $$
    A = \begin{bmatrix}
    1 & 1 & 0 \\
    1 & 2 & 1 \\
    -1 & 1 & 2 
    \end{bmatrix}
    $$
    
    Find the determinant of:
    
    $$
    A-\lambda I = \begin{bmatrix}
    1-\lambda & 1 & 0 \\
    1 & 2-\lambda & 1 \\
    -1 & 1 & 2-\lambda 
    \end{bmatrix}
    $$
    
    Expanding the determinant:
    
    $$
    \begin{align*}
    \det{A-\lambda I} &= (1-\lambda)(2-\lambda)(2-\lambda) + (-1) + 0 - 0 - (2 - \lambda) - (1-\lambda) \\
    &= (1-\lambda)(2-\lambda)^2 + 2\lambda - 4 \\
    &= -\lambda^3 + 5\lambda^2 - 6\lambda = 0 \\
    &= -\lambda(\lambda-3)(\lambda - 2) = 0
    \end{align*}
    $$
    
    Eigenvalues: $\lambda_1 = 0, \lambda_2 = 3, \lambda_3 = 2$.

### Spectral Radius $\rho(T_j)$ and Relaxation Factor $\omega$

The spectral radius of the iteration matrix $T_j$ is defined as:

$$
\rho(T_j) = \max|\lambda|
$$

We need to find the optimal relaxation constant $\omega$:

$$
\omega = \frac{2}{1+\sqrt{1-\left[\rho\left(T_j\right)\right]^2}}
$$

- If $\omega = 1$: The method is **Gauss-Seidel**.
- If $\omega < 1$: **Under-relaxed** system.
- If $1 < \omega < 2$: **Over-relaxed**, implies faster convergence.

### The SOR Method

SOR is a damped iterative method defined as:

$$
x_i^k = \omega\left[\frac{1}{a_{ii}}\left(b_i - \sum_{j = 1}^{i-1}a_{ij}x_j^k - \sum_{j = i+1}^na_{ij}x_j^{k-1}\right)\right] + (1-\omega)x_i^{k-1}
$$

??? example "Full Example"

    Let $A = \begin{bmatrix} 3 & 1 & -1 \\ 2 & 4 & -1 \\ -1 & 2 & 5 \end{bmatrix}$ and $b = [4, 1, 1]^t$.
    
    1. **Equations**:
        $x_1 = \frac{1}{3}(-x_2 + x_3 + 4)$
        $x_2 = \frac{1}{4}(-2x_1 + x_3 + 1)$
        $x_3 = \frac{1}{5}(x_1 - 2x_2 + 1)$
        
    2. **Matrix $T_j$**:
        $T_j = \begin{bmatrix} 0 & -1/3 & 1/3 \\ -1/2 & 0 & 1/4 \\ 1/5 & -2/5 & 0 \end{bmatrix}$
        
    3. **Spectral Radius**: $\rho(T_j) \approx 0.486$.
    4. **Relaxation Factor**: $\omega \approx 1.0672$.
    5. **Iteration 1** ($x^0 = [0, 0, 0]$):
        - $x_1^1 = 1.0672[4/3] + (1-1.0672)\cdot 0 = 1.4229$
        - $x_2^1 = 1.0672[(-2.8458 + 0 + 1)/4] + (1-1.0672)\cdot 0 = -0.4925$
        - $x_3^1 = 1.0672[(1.4229 + 0.985 + 1)/5] + (1-1.0672)\cdot 0 = 0.7274$

??? "Partial Exam Bonuses"

    Given the system:
    $$
    \begin{align*}
    4x_1 + 3x_2 &= 24 \\
    3x_1 + 4x_2 - x_3 &= 30 \\
    -x_2 + 4x_3 &= -24 \\
    \end{align*}
    $$
    
    1. **Diagonally Dominant**: 
       - Row 1: $4 \ge 3$
       - Row 2: $4 \ge 3 + 1$ (Equality)
       - Row 3: $4 \ge 1$
       It is diagonally dominant.
       
    2. **Positive Definite**: 
       - $\det(A_1) = 4 > 0$
       - $\det(A_2) = 16 - 9 = 7 > 0$
       - $\det(A) = 4(16-1) - 3(12) = 47 > 0$
       It is positive definite.
       
    3. **Spectral Radius and $\omega$**:
       $T_j = \begin{bmatrix} 0 & -3/4 & 0 \\ -3/4 & 0 & 1/4 \\ 0 & 1/4 & 0 \end{bmatrix}$
       Finding $\det(T_j - \lambda I) = -\lambda^3 + \frac{5}{8}\lambda = 0 \implies \lambda^2 = 5/8$.
       $\rho(T_j) = \sqrt{0.625} \approx 0.7906$.
       $\omega = \frac{2}{1+\sqrt{1-0.625}} = 1.239$.
       
    4. **Iterations** ($x^0 = [0,0,0]$):
       - $x_1^1 = 1.239[6] = 7.434$
       - $x_2^1 = 1.239[(-3\cdot 7.434 + 30)/4] = 2.384$
       - $x_3^1 = 1.239[(2.384 - 24)/4] = -6.696$
