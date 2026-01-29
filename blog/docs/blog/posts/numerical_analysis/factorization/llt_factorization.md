---
title: Factorización LLt
---
# Factorización $LL^t$

Esta es una factorización donde $L$ es la triangular inferior y $L^t$ es la matriz traspuesta de $L$.

Luego si tenemos $Ax = b$, podemos ver que $LL^tx = b$ y al igual que LU y PLU podemos solucionar para un vector provisional $y$ ($Ly = b$) y luego solucionar $L^tx = y$.

!!! info "Condiciones"

    - $A$ tiene que ser una matriz simétrica (Quiere decir que $A = A^t$).

### Metodo 1: Comparación directa

Podemos construir una matriz de la forma:

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

Luego, podemos hacer la multiplicación de $LL^t$ para ver cuales serían nuestros valores para cada una de las matrices.

$$
LL^t = \begin{bmatrix}
l_{11}^2 & l_{21}l_{11} & l_{11}l_{31} \\\\
l_{21}l_{11} & l_{22}^2 + l_{21}^2 & l_{21}l_{31} + l_{22}l_{32} \\\\
l_{31}l_{11} & l_{21}l_{31} + l_{22}l_{32} & l_{33}^2 + l_{32}^2 + l_{31}^2 \\
\end{bmatrix}
$$

Note que $A = LL^t$, entonces podemos sacar los valores por comparación. Se puede partir de $a_{11}$:

- $a_{11} = l_{11}^2$
- $l_{21}l_{11} = a_{21}$

### Metodo 2: Vía Factorización LDU

Podemos construir $L = \overline{L}D^{\frac{1}{2}}$.

1. Factorización $\overline{L}DU$
2. Raiz de $D$ ($D^{\frac{1}{2}}$)
3. $L = \overline{L}D^{\frac{1}{2}}$

??? example "Ejemplo"

    Considere la siguiente matriz:
    
    $$
    A = \begin{bmatrix}
    4 & 6 & 10 \\
    6 & 25 & 19 \\
    10 & 19 & 51 \\
    \end{bmatrix}
    $$
    
    Podemos construir:
    
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
    
    Operaciones:
    
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
    
    Siguiente operación:
    
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
    
    $D$ es la diagonal de $U_3$:
    
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
    
    Raíz de $D$:
    
    $$
    D^{\frac{1}{2}} = \begin{bmatrix}
    2 & 0 & 0 \\
    0 & 4 & 0 \\
    0 & 0 & 5 \\
    \end{bmatrix}
    $$
    
    Construimos $L = \overline{L}D^{\frac{1}{2}}$:
    
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
    
    La factorización final $A = LL^t$:
    
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
