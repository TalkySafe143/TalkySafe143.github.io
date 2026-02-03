---
title: Factorización PLU
tags: ['Análisis Numérico (Completo)']
---
Esta factorización admite cambio de filas, esta se construye a partir de:

??? example "$P$ la matriz de permutación"
    - Su única tarea en la vida es almacenar las permutaciones (Cambio de filas) que haya
- $L$ sigue siendo una triangular inferior
- $U$ sigue siendo la triangular superior

Partimos que: $Ax = B$, luego vemos que $LUx = B$, sin embargo, la tarea de $P$ es almacenar las permutaciones y aplicarlas a $B$.

Luego, entonces el sistema queda de la siguiente manera: $PLUx = PB$

Se hace el mismo proceso que LU, sin embargo, se aplica el cambio de $P$.

Se puede ver el siguiente ejemplo:

Sea

$$
A = \begin{bmatrix}
2 & 2 & 3 \\
-4 & -4 & -3 \\
4 & 8 & 3 \\
\end{bmatrix}
$$

Lo ideal es conservar las tres matrices, para que el proceso sea mas simple:

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

Note que $P$ parte de la identidad.

> Siempre opere con el pivote $a_{ii}$
> 

> Los subíndices indican que operación es resultado
> 

Las operaciones van a ser:

- $F_2 = F_2 + 2F_1$
- $F_3 = F_3 - 2F_1$

Las matrices quedan de la siguiente manera:

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

Note que $u_{22} = 0$ entonces hay que hacer un cambio de filas. El cambio va a ser:

- $F_2$ por $F_3$

Luego las matrices quedan:

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

Note que:

- $P$ también hizo el cambio de filas normal
- $L$ solo cambio las filas en sus valores almacenados en la triangular inferior.
??? example "Ejemplo"
    
    Considere el siguiente sistema:
    
    $$
    \begin{align*}
    4x_3 &= -8 \\
    x_1 + 3x_2 + 2x_3 &= 1 \\
    2x_1 + 8x_2 + 4x_3 &= 6 \\
    \end{align*}
    $$
    
    Luego, queda:
    
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
    
    - Se puede realizar $F_1$ por $F_2$
    
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
    
    - $F_3 = F_3 - 2F_1$
    
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
    
    - $F_3$ por $F_2$
    
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
    
    Ya quedó para solucionar el sistema de ecuaciones por aparte. Primero resolvemos $Ly = PB$, entonces nos queda:
    
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
    \end{bmatrix}\\
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
    1 \\
    6 \\
    -8 \\
    \end{bmatrix}
    \end{align*}
    $$
    
    Luego nos queda que:
    
    - $y_1 = 1, y_2 =4 , y_3 = -8$
    
    Entonces, tenemos que resolver ahora $Ux = y$
    
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
    
    Entonces tenemos que:
    
    - $x_1 = -1, x_2 = 2, x_3 = -2$