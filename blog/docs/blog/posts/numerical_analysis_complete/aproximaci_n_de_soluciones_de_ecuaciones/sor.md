---
title: SOR
tags: ['Análisis Numérico (Completo)']
---
Para ver SOR, es necesario retomar vectores y valores propios

### Valores propios

Es una huella de identidad para los sistemas de ecuaciones donde el sistema es estable. Y los vectores propios es un vector paralelo de la matriz del sistema

Para calcular los valores propios, necesitamos hallar: $\det{(A-\lambda I)} = 0$ donde $A$ es la matriz del sistema, $\lambda$ son los valores propios.

Esto solo se puede solucionar si la matriz es cuadrada, si es $n \times n$, quiere decir que hay $n$ valores propios.

Considere la siguiente matriz $A$.

$$
A = \begin{bmatrix}
1 & 1 & 0 \\
1 & 2 & 1 \\
-1 & 1 & 2 
\end{bmatrix}
$$

Luego, podemos ver que necesitamos hallar la determinante de la siguiente matriz:

$$
A-\lambda I = \begin{bmatrix}
1 & 1 & 0 \\
1 & 2 & 1 \\
-1 & 1 & 2 
\end{bmatrix} -
\begin{bmatrix}
\lambda & 0 & 0 \\
0 & \lambda & 0 \\
0 & 0 & \lambda 
\end{bmatrix} =
\begin{bmatrix}
1-\lambda & 1 & 0 \\
1 & 2-\lambda & 1 \\
-1 & 1 & 2-\lambda 
\end{bmatrix}
$$

Luego, podemos sacar el determinante de la siguiente manera, este queda:

Note que el $\det$ debe ser $0$

$$
\begin{align*}
\det{A-\lambda I} &= (1-\lambda)(2-\lambda)(2-\lambda) + (-1) + 0 - 0 - (2 - \lambda) - (1-\lambda) \\
\det{A-\lambda I} &= (1-\lambda)(2-\lambda)(2-\lambda) + 2\lambda-4 = 0 \\
\det{A-\lambda I} &= (1-\lambda)(2-\lambda)(2-\lambda) + 2(\lambda-2) = 0 \\
\det{A-\lambda I} &= (1-\lambda)(4-4\lambda+\lambda^2) + 2(\lambda-2) = 0 \\
\det{A-\lambda I} &= 4-4\lambda + \lambda^2 - 4 + 4\lambda - \lambda^3 + 2(\lambda-2) = 0 \\
\det{A-\lambda I} &= -\lambda^3 + 5\lambda^2 - 6\lambda = 0 \\
\det{A-\lambda I} &= -\lambda(\lambda^2 - 5\lambda + 6) = 0 \\
\det{A-\lambda I} &= -\lambda(\lambda-3)(\lambda - 2) = 0 \\
\end{align*}
$$

De esta manera, podemos ver que el valor de cada uno de los lambda son:

- $\lambda_1 = 0, \lambda_2 = 3, \lambda_3 = 2$

### Radio espectral $\rho(T_j)$

El radio espectral para la matriz $T_j$ esta definido como:

$$
\rho(T_j) = \max|\lambda|
$$

Si $\lambda = a + bi$, entonces $|\lambda| = \sqrt{a^2 + b^2}$

Necesitamos buscar un $\omega$ la cual es una constante de amortiguamiento. Esta esta definida de la forma:

$$
\omega = \frac{2}{1+\sqrt{1-\left[\rho\left(T_j\right)\right]^2}}
$$

En general, los sistemas pueden ser amortiguados cuando son: Subamortiguado o un sistema Sobreamortiguado

- Si $\omega = 1$ entonces lo que nosotros tenemos es Gauss-Seidel
- Si $\omega < 1$ entonces tenemos un sistema subamortiguado
- Si $1 < \omega < 2$ entonces implica convergencia. La vida es mas feliz 😄
??? example "Tips"
    - Los valores de todos los lambda tiene que ser $-1 < \lambda_i < 1$.
    - El valor de omega tiene que queda dentro de $1 < \omega < 2$

### El metodo

SOR es un metodo iterativo, recurrente y amortiguado. Este se conoce como método de relajación SOR.

Entonces, queremos construir de nuevo un $x_i^k$ donde es la componente $i$ en la iteración $k$, esta esta definida como:

$$
x_i^k = \omega\left[\frac{1}{a_{11}}\left(-\sum_{j = 1}^{i-1}x_j^k - \sum_{j = i+1}^nx_j^{k-1}\right)+ b_i\right] + (1-\omega)x_i^{k-1}
$$

Considere la siguiente matriz:

$$
A = 
\begin{bmatrix}
3 & 1 & -1 \\
2 & 4 & -1 \\
-1 & 2 & 5 \\
\end{bmatrix}
$$

1. Hay que escribir las ecuaciones del sistema
    
    $$
    \begin{align}
    x_1 &= \frac{-x_2}{3} + \frac{x_3}{3} + \frac{4}{3} \\
    x_2 &= \frac{-2x_1}{4} + \frac{x_3}{4} + \frac{1}{4} \\
    x_3 &= \frac{x_1}{5} + \frac{-2x_2}{5} + \frac{1}{5} \\
    \end{align}
    $$
    
2. Podemos escribir $T_j$ de la siguiente manera, apartir de las ecuaciones que se acaban de hallar.
    
    $$
    T_j = 
    \begin{bmatrix}
    0 & -\frac{1}{3} & \frac{1}{3} \\
    -\frac{1}{2} & 0 & \frac{1}{4} \\
    \frac{1}{5} & -\frac{2}{5} & 0 \\
    \end{bmatrix}
    $$
    
3. Hallar los $\lambda_i$ de $T_j$.
    
    Esto quiere decir que tenemos que hallar una matriz tal que: $\det T_j - \lambda I = 0$
    
    $$
    \det \begin{bmatrix}
    -\lambda & -\frac{1}{3} & \frac{1}{3} \\
    -\frac{1}{2} & -\lambda & \frac{1}{4} \\
    \frac{1}{5} & -\frac{2}{5} & -\lambda \\
    \end{bmatrix} = 0
    $$
    
    En este caso, vemos que los $\lambda_i$ son: $\lambda_1 = 0.486, \lambda_2 = -0.243 + 0.209i, \lambda_3 = -0.243 - 0.209i$
    
4. Hallar $\rho(T_j)$
    
    En este caso, necesitamos tomar el maximo de los valores propios. En este caso tenemos que $\lambda_1 = 0.486$ es el maximo de todos.
    
5. Hallar $\omega$
    
    En este caso, solo tenemos que reemplazar en la formula descrita:
    
    $$
    \begin{align}
    \omega = \frac{2}{1+\sqrt{1-\left[\rho\left(T_j\right)\right]^2}} = 1.0672
    \end{align}
    $$
    
6. Comenzar a hacer las iteraciones
    
    En este caso, podemos comenzar con el vector $x = [0, 0, 0]$, luego, entonces podemos ver que cada uno de los siguientes valores va a ser:
    
    - $x_1^1 = \omega\left[ -\frac{0}{3} +  \frac{0}{3} +  \frac{4}{3} \right] + (1-\omega)\cdot \underbrace{0}_{x_1^0} = 1.0672 \cdot \frac{4}{3} = 1.42$
    - $x_2^1  = \omega \left[ -\frac{1.42}{2} + \frac{0}{4} + \frac{1}{4} \right] + (1-\omega) \cdot \underbrace{0}_{x^0_2}  = -0.49$
    - $x_3^1 = \omega \left[ \frac{1.42}{5} - \frac{2\cdot -0.49}{5} + \frac{1}{5} \right] + (1-\omega)\cdot \underbrace{0}_{x^0_3} = 0.72$
    
    Entonces, ya tenemos el nuevo vector para la siguiente iteración $x^1=[1.42, -0.49, 0.72]$
    
    - $x_1^2 = \omega\left[ -\frac{-0.49}{3} +  \frac{0.72}{3} +  \frac{4}{3} \right] + (1-\omega)\cdot \underbrace{1.42}_{x_1^1} = 1.75$
    - $x_2^2  = \omega \left[ -\frac{1.75}{2} + \frac{0.72}{4} + \frac{1}{4} \right] + (1-\omega) \cdot \underbrace{-0.49}_{x^1_2}  = -0.44$
    - $x_3^2 = \omega \left[ \frac{1.75}{5} - \frac{2\cdot -0.44}{5} + \frac{1}{5} \right] + (1-\omega)\cdot \underbrace{0.72}_{x^1_3} = 0.726$
??? example "Bonificaciones del parcial"
    
    Dado el siguiente sistema:
    
    $$
    \begin{align*}
    4x_1 + 3x_2 &= 24 \\
    3x_1 + 4x_2 - x_3 &= 30 \\
    -x_2 + 4x_3 &= -24 \\
    \end{align*}
    $$
    
    Hacer SOR con los siguientes pasos
    
    - Verificar diagonal dominante
    - Verificar definida positiva
    - Construir sistema $T_j$
    - Determinar $\rho(T_j) \rightarrow \lambda$
    - Determinar $\omega$
    - Hacer dos iteraciones
    
    La matriz $A$ inicial tiene la forma:
    
    $$
    A =
    \begin{bmatrix}
    4 & 3 & 0 \\
    3 & 4 & -1 \\
    0 & -1 & 4
    \end{bmatrix}
    $$
    
    - Diagonal Dominante
        
        Para que sea diagonal dominante, hay que ver que los elementos de la traza son mayores o iguales a la suma de los demás, luego podemos ver que:
        
        - Para la fila 1: $4 \ge 3 + 0$
        - Para la fila 2: $4 \ge 3 + |-1|$
        - Para la fila 3: $4 \ge 0 + |-1|$
        
        De esta manera, se determina que la matriz es diagonal dominante.
        
    - Definida positiva
        - Definición
            
            La matriz es definida positiva cuando se tiene una matriz de la forma
            
            $$
            A=\begin{bmatrix}
            a_{11} & a_{12} & a_{13} \\
            a_{21} & a_{22} & a_{23} \\
            a_{31} & a_{32} & a_{33} \\
            \end{bmatrix}
            A_2 = \begin{bmatrix}
            a_{11} & a_{12}\\
            a_{21} & a_{22} 
            \end{bmatrix}
            A_1 = \begin{bmatrix}
            a_{11}
            \end{bmatrix}
            $$
            
            Entonces se tiene que cumplir que:
            
            - $\det A \ge 0$
            - $\det A_2 \ge 0$
            - $\det A_1 \ge 0$
            
            Sin embargo, se puede generalizar para dimensión $n$
            
        
        Según la definición y tomando las matrices como:
        
        $$
        A =
        \begin{bmatrix}
        4 & 3 & 0 \\
        3 & 4 & -1 \\
        0 & -1 & 4
        \end{bmatrix}
        A_2 =
        \begin{bmatrix}
        4 & 3 \\
        3 & 4 \\
        \end{bmatrix}
        A_1 =
        \begin{bmatrix}
        4 
        \end{bmatrix}
        $$
        
        Podemos ver que para $A$ tenemos:
        
        $$
        \begin{align}
        \det A &= 4^3 + 0 + 0- 0 - (3^2\cdot 4) - 4 \\
        \det A &= 47 \ge 0\\
        \end{align}
        $$
        
        Para $A_2$ tenemos
        
        $$
        \begin{align}
        \det A_2 &= 4^2 - 3^2 \\
        \det A_2 &= 7 \ge 0 \\
        \end{align}
        $$
        
        Para $A_1$ vimos que solo es $4$, por lo tanto $\det A_1 \ge 0$
        
    - Construir el sistema $T_j$
        
        Para el sistema se puede ver que las ecuaciones pueden quedar de la forma:
        
        $$
        \begin{align*}
        x_1 &= -\frac{3x_2}{4} + \frac{24}{4} \\
         x_2 &= - \frac{3x_1}{4} + \frac{x_3}{4} + \frac{30}{4} \\
        x_3 &= \frac{x_2}{4} - \frac{24}{4} \\
        \end{align*}
        $$
        
        Entonces, el sistema $T_j$ va a ser de la siguiente forma:
        
        $$
        T_j =
        \begin{bmatrix}
        0 & -\frac{3}{4} & 0 \\
        - \frac{3}{4} & 0 & \frac{1}{4} \\
        0 & \frac{1}{4} & 0
        \end{bmatrix}
        $$
        
    - Determinar $\rho(T_j)$
        
        Teniendo el sistema de la siguiente manera:
        
        $$
        T_j =
        \begin{bmatrix}
        0 & -\frac{3}{4} & 0 \\
        - \frac{3}{4} & 0 & \frac{1}{4} \\
        0 & \frac{1}{4} & 0
        \end{bmatrix}
        $$
        
        Luego, tenemos que encontrar los valores propios del sistema, quiere decir, tenemos que hallar los valores para los cuales: $\det T_j - \lambda I = 0$, entonces el sistema debe cumplir que:
        
        $$
        T_j - \lambda I =
        \begin{bmatrix}
        -\lambda & -\frac{3}{4} & 0 \\
        - \frac{3}{4} & -\lambda & \frac{1}{4} \\
        0 & \frac{1}{4} & -\lambda
        \end{bmatrix}
        $$
        
        Luego podemos ver que el determinante va a estar de la forma:
        
        $$
        \begin{align}
        \det T_j - \lambda I &= -\lambda^3 + 0 + 0 - 0 - \left(-\lambda\frac{9}{16}\right) - \left(-\lambda\frac{1}{16}\right) \\
        \det T_j - \lambda I &= -\lambda^3  +\lambda\frac{5}{8} \\
        \det T_j - \lambda I &= \lambda\left(-\lambda^2  +\frac{5}{8} \right)  = 0\\
         \frac{5}{8}  &= \lambda^2 \\
         \sqrt{\frac{5}{8}}  &= \lambda \\
        \end{align}
        $$
        
        Entonces podemos ver que $\lambda_1 = 0, \lambda_2 = 0.79, \lambda_3 = -0.79$, eso quiere decir que $\rho(T_j) = 0.79$
        
    - Determinar $\omega$
        
        Luego, teniendo que $\rho(T_j) = 0.79$ entonces podemos aplicar la formula para $\omega$:
        
        $$
        \omega = \frac{2}{1+\sqrt{1-\left[0.79\right]^2}} = 1.23
        $$
        
        Se tiene que $\omega = 1.23$
        
    - Hacer dos iteraciones
        
        Teniendo que $\omega = 1.23$ y las ecuaciones son:
        
        $$
        \begin{align*}
        x_1 &= -\frac{3x_2}{4} + \frac{24}{4} \\
         x_2 &= - \frac{3x_1}{4} + \frac{x_3}{4} + \frac{30}{4} \\
        x_3 &= \frac{x_2}{4} - \frac{24}{4} \\
        \end{align*}
        $$
        
        Podemos comenzar con el vector $x^0 = [0, 0, 0]$
        
        - Primera iteración
            - $x_1^1 = \omega\left[ -\frac{3\cdot0}{4} + 6 \right] + (1-\omega)\cdot \underbrace{0}_{x^0_1} = 7.38$
            - $x_2^1 = \omega\left[ -\frac{3\cdot(7.38)}{4} +\frac{0}{4} +\frac{30}{4} \right] + (1-\omega)\cdot \underbrace{0}_{x^0_2} = 2.41$
            - $x_3^1 = \omega\left[\frac{2.41}{4} -6 \right] + (1-\omega)\cdot \underbrace{0}_{x^0_3} = -6.63$
        
        Con la segunda iteración, nos da que el nuevo vector es $x^1 = [7.38, 2.41, -6.63]$
        
        - Segunda iteración
            - $x_1^2 = \omega\left[ -\frac{3\cdot(2.41)}{4} + 6 \right] + (1-\omega)\cdot \underbrace{7.38}_{x^1_1} = 3.45$
            - $x_2^2 = \omega\left[ -\frac{3\cdot(3.45)}{4} +\frac{-6.63}{4} +\frac{30}{4} \right] + (1-\omega)\cdot \underbrace{2.41}_{x^1_2} = 3.44$
            - $x_3^2 = \omega\left[\frac{3.44}{4} -6 \right] + (1-\omega)\cdot \underbrace{-6.63}_{x^1_3} = -4.79$
        
        Con esto, la segunda iteración queda de la forma: $x^2 = [3.45, 3.44, -4.79]$