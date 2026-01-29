---
title: Trazadores Cúbicos
---
# Trazadores cúbicos

Suponga que existen puntos de la forma $(x_i, f(x_i))$, entonces podemos hacer una interpolación lineal de estos puntos (Trazar lineas rectas para unir cada par de puntos). Si queremos construir un polinomio que pase por todos los puntos y sea suave, lo podemos hacer tal que los polinomios tienen grado $3$ entre cada par de puntos.

Entre cada par de puntos consecutivos $(x_j, x_{j+1})$ construimos un polinomio $S_j(x)$ tal que:

$$
S_j(x) = a_j + b_j(x- x_j) + c_j(x-x_j)^2 + d_j(x-x_j)^3
$$

### Condiciones de suavidad

Se debe cumplir que:
1. $S_j(x) \in [x_j, x_{j+1}]$
2. $S_j(x_{j + 1}) = S_{j+1}(x_{j+1})$ (Continuidad)
3. $S^\prime_{j}(x_{j+1}) = S^\prime_{j+1}(x_{j+1})$ (Suavidad de la primera derivada)
4. $S^{\prime \prime}_j(x_{j+1}) = S^{\prime \prime}_{j+1}(x_{j+1})$ (Suavidad de la segunda derivada)

??? example "Ejemplo Introductorio"

    Tome los puntos $(1, 2), (2, 3), (3, 5)$. Tenemos $S_0$ (tramo [1,2]) y $S_1$ (tramo [2,3]).
    
    - $S_0 = a_0 + b_0(x-1) + c_0(x-1)^2 + d_0(x-1)^3$
    - $S_1 = a_1 + b_1(x-2) + c_1(x-2)^2 + d_1(x-2)^3$
    
    Condiciones:
    - $S_i(x_i) = f(x_i) \implies a_0 = 2, a_1 = 3$
    - $S_0(x_1) = a_1 \implies a_0 + b_0 + c_0 + d_0 = 3$
    - $S_1(x_2) = 5 \implies a_1 + b_1 + c_1 + d_1 = 5$
    - $S^\prime_0(x_1) = S^\prime_1(x_1) \implies b_0 + 2c_0 + 3d_0 = b_1$
    - $S^{\prime \prime}_0(x_1) = S^{\prime \prime}_1(x_1) \implies 2c_0 + 6d_0 = 2c_1$
    - Frontera natural: $c_0 = 0$ y $2c_1 + 6d_1 = 0$
    
    Resolviendo:
    - $a_0 = 2, b_0 = 0.75, c_0 = 0, d_0 = 0.25$
    - $a_1 = 3, b_1 = 1.5, c_1 = 0.75, d_1 = -0.25$

---

### Derivación General

Para $n$ puntos, tenemos $4n$ incógnitas. Definimos $h_j = x_{j+1} - x_j$.

??? abstract "Paso a paso de las ecuaciones"

    - **Primera ecuación (Continuidad)**:
      $$ S_j(x_{j+1}) = a_j + b_jh_j + c_jh_j^2 + d_jh_j^3 = a_{j+1} \tag{1} $$
      
    - **Segunda ecuación (Primera derivada)**:
      $$ S^\prime_j(x_{j+1}) = b_j + 2c_jh_j + 3d_jh_j^2 = b_{j+1} \tag{2} $$
      
    - **Tercera ecuación (Segunda derivada)**:
      $$S^{\prime \prime}_j(x_{j+1}) = 2c_j + 6d_jh_j = 2c_{j+1} \tag{3}$$

De (3) despejamos $d_j$:
$$ d_j = \frac{c_{j+1} - c_j}{3h_j} \tag{*} $$

Reemplazando en (1) obtenemos $b_j$:
$$ b_j = \frac{a_{j+1} - a_j}{h_j} - \frac{h_j}{3}(2c_j + c_{j+1}) \tag{8} $$

Sustituyendo todo en (2), reducimos el orden ($j \rightarrow j-1$) y llegamos a la relación fundamental:
$$ h_{j-1}c_{j-1} + 2(h_{j-1} + h_j)c_j + h_jc_{j+1} = 3\frac{a_{j+1}-a_j}{h_j} - 3\frac{a_j - a_{j-1}}{h_{j-1}} \tag{**} $$

### Construcción Matricial

Con fronteras naturales ($c_0=0, c_n=0$), la matriz es:

$$
\begin{bmatrix}
1 & 0 & 0 & \dots \\
h_0 & 2(h_0+h_1) & h_1 & \dots \\
0 & h_1 & 2(h_1+h_2) & h_2 \\
\vdots & \vdots & \vdots & 1
\end{bmatrix} 
\begin{bmatrix} c_0 \\ c_1 \\ \vdots \\ c_n \end{bmatrix} =
\begin{bmatrix} 0 \\ 3(\text{pendientes}) \\ \vdots \\ 0 \end{bmatrix}
$$

??? example "Ejercicio Completo ($n=4$)"

    Puntos: $(0, 0), (1, 1), (2, 16), (3, 81)$. $h_0=1, h_1=1, h_2=1$.
    Matriz:
    $$
    \begin{bmatrix} 1 & 0 & 0 & 0 \\ 1 & 4 & 1 & 0 \\ 0 & 1 & 4 & 1 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \\ c_2 \\ c_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 3(16-1) - 3(1-0) \\ 3(81-16) - 3(16-1) \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ 42 \\ 150 \\ 0 \end{bmatrix}
    $$
    Solución: $c_0=0, c_1=1.2, c_2=37.2, c_3=0$.
    Resultados para tramos:
    - $d_0=0.4, d_1=12, d_2=-12.4$
    - $b_0=0.6, b_1=1.8, b_2=40.2$
    ¡Polinomios construidos! 😎
