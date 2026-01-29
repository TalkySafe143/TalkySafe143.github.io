---
title: SOR
---
# SOR (Successive Over-Relaxation)

Para ver SOR, es necesario retomar vectores y valores propios.

### Valores propios

Es una huella de identidad para los sistemas de ecuaciones donde el sistema es estable. Un vector propio es aquel que, tras ser multiplicado por la matriz, resulta en un vector paralelo al original.

Para calcular los valores propios ($\lambda$), necesitamos hallar la determinante: $\det{(A-\lambda I)} = 0$.

??? example "Cálculo de valores propios"

    Considere la siguiente matriz $A$:
    
    $$
    A = \begin{bmatrix}
    1 & 1 & 0 \\
    1 & 2 & 1 \\
    -1 & 1 & 2 
    \end{bmatrix}
    $$
    
    Buscamos:
    
    $$
    A-\lambda I = \begin{bmatrix}
    1-\lambda & 1 & 0 \\
    1 & 2-\lambda & 1 \\
    -1 & 1 & 2-\lambda 
    \end{bmatrix}
    $$
    
    Expandiendo el determinante:
    
    $$
    \begin{align*}
    \det{A-\lambda I} &= (1-\lambda)(2-\lambda)(2-\lambda) + (-1) + 0 - 0 - (2 - \lambda) - (1-\lambda) \\
    &= (1-\lambda)(2-\lambda)^2 + 2\lambda - 4 \\
    &= -\lambda^3 + 5\lambda^2 - 6\lambda = 0 \\
    &= -\lambda(\lambda-3)(\lambda - 2) = 0
    \end{align*}
    $$
    
    Valores propios: $\lambda_1 = 0, \lambda_2 = 3, \lambda_3 = 2$.

### Radio espectral $\rho(T_j)$ y Factor $\omega$

El radio espectral para la matriz de iteración $T_j$ está definido como:

$$
\rho(T_j) = \max|\lambda|
$$

Necesitamos buscar un $\omega$ (constante de relajación):

$$
\omega = \frac{2}{1+\sqrt{1-\left[\rho\left(T_j\right)\right]^2}}
$$

- Si $\omega = 1$: El método es **Gauss-Seidel**.
- Si $\omega < 1$: Sistema **subamortiguado**.
- Si $1 < \omega < 2$: Implica **convergencia acelerada**.

### El método SOR

SOR es un método iterativo amortiguado definido como:

$$
x_i^k = \omega\left[\frac{1}{a_{ii}}\left(b_i - \sum_{j = 1}^{i-1}a_{ij}x_j^k - \sum_{j = i+1}^na_{ij}x_j^{k-1}\right)\right] + (1-\omega)x_i^{k-1}
$$

??? example "Ejemplo completo"

    Sea $A = \begin{bmatrix} 3 & 1 & -1 \\ 2 & 4 & -1 \\ -1 & 2 & 5 \end{bmatrix}$ con $b = [4, 1, 1]^t$.
    
    1. **Ecuaciones**:
        $x_1 = \frac{1}{3}(-x_2 + x_3 + 4)$
        $x_2 = \frac{1}{4}(-2x_1 + x_3 + 1)$
        $x_3 = \frac{1}{5}(x_1 - 2x_2 + 1)$
        
    2. **Matriz $T_j$**:
        $T_j = \begin{bmatrix} 0 & -1/3 & 1/3 \\ -1/2 & 0 & 1/4 \\ 1/5 & -2/5 & 0 \end{bmatrix}$
        
    3. **Radio espectral**: $\rho(T_j) \approx 0.486$.
    4. **Factor $\omega$**: $\omega \approx 1.0672$.
    5. **Iteración 1** ($x^0 = [0, 0, 0]$):
        - $x_1^1 = 1.0672[4/3] + (1-1.0672)\cdot 0 = 1.4229$
        - $x_2^1 = 1.0672[(-2.8458 + 0 + 1)/4] + (1-1.0672)\cdot 0 = -0.4925$
        - $x_3^1 = 1.0672[(1.4229 + 0.985 + 1)/5] + (1-1.0672)\cdot 0 = 0.7274$

??? "Bonificaciones del parcial"

    Dado el sistema:
    $$
    \begin{align*}
    4x_1 + 3x_2 &= 24 \\
    3x_1 + 4x_2 - x_3 &= 30 \\
    -x_2 + 4x_3 &= -24 \\
    \end{align*}
    $$
    
    1. **Diagonal Dominante**: 
       - Fila 1: $4 \ge 3$
       - Fila 2: $4 \ge 3 + 1$ (Igualdad)
       - Fila 3: $4 \ge 1$
       Es diagonal dominante.
       
    2. **Definida Positiva**: 
       - $\det(A_1) = 4 > 0$
       - $\det(A_2) = 16 - 9 = 7 > 0$
       - $\det(A) = 4(16-1) - 3(12) = 47 > 0$
       Es definida positiva.
       
    3. **Radio Espectral y $\omega$**:
       $T_j = \begin{bmatrix} 0 & -3/4 & 0 \\ -3/4 & 0 & 1/4 \\ 0 & 1/4 & 0 \end{bmatrix}$
       Hallando $\det(T_j - \lambda I) = -\lambda^3 + \frac{5}{8}\lambda = 0 \implies \lambda^2 = 5/8$.
       $\rho(T_j) = \sqrt{0.625} \approx 0.7906$.
       $\omega = \frac{2}{1+\sqrt{1-0.625}} = 1.239$.
       
    4. **Iteraciones** ($x^0 = [0,0,0]$):
       - $x_1^1 = 1.239[6] = 7.434$
       - $x_2^1 = 1.239[(-3\cdot 7.434 + 30)/4] = 2.384$
       - $x_3^1 = 1.239[(2.384 - 24)/4] = -6.696$
