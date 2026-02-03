---
title: Trazadores cúbicos
tags: ['Análisis Numérico (Completo)']
---
Suponga que existen puntos de la forma $(x_i, f(x_i))$, entonces podemos hacer una interpolación lineal de estos puntos (Trazar lineas rectas para unir cada par de puntos)

Si queremos construir un polinomio que pase por todos los puntos, lo podemos hacer tal que los polinomios tienen grado $3$.

Entre cada par de puntos consecutivos $(x_j, x_{j+1})$ podemos construir un polinomio de grado $3$ entre ellos para que se unan llamado $S_j(x)$.

Se debe cumplir que:

- $S_j(x) \in [x_j, x_{j+1}]$
- $S_j(x_{j + 1}) = S_{j+1}(x_{j+1})$
- $S^\prime_{j}(x_{j+1}) = S^\prime_{j+1}(x_{j+1})$
- $S^{\prime \prime}_j(x_{j+1}) = S^{\prime \prime}_{j+1}(x_{j+1})$
- $S^{\prime \prime}_0(x_{0}) = S^{\prime \prime}_{n}(x_{n}) = 0$ (Opcional para las fronteras)
- $S^\prime_0(x_0) = f^\prime(x_0)$ y $S^\prime_n(x_n) = f^\prime(x_n)$ (Opcional - frontera natural)

Para construirlo, podemos ver un ejemplo, siguiendo que:

$$
S_i(x) = a_i + b_i(x- x_i) + c_i(x-x_i)^2 + d_i(x-x_i)^3
$$

??? example "Ejemplo"
    
    Tome los puntos $(1, 2), (2, 3), (3, 5)$
    
    Podemos ver que vamos a tener que construir $S_0, S_1$ como polinomios de grado $3$.
    
    Entonces podemos ver que:
    
    - $S_0 = a_0 + b_0(x-1) + c_0(x-1)^2 + d_0(x-1)^3$
    - $S_1 = a_1 + b_1(x-2) + c_1(x-2)^2 + d_1(x-2)^3$
    
    En esta parte, solo tenemos la primera condición cumplida.
    
    Entonces, podemos ver que para cumplir la condición $S_0(x_{1}) = S_{1}(x_{1})$ podemos establecer la siguiente igualdad:
    
    $$
    \begin{align*}
    a_0 + b_0(2-1) + c_0(2-1)^2 + d_0(2-1)^3 &= a_1 + b_1(2-2) + c_1(2-2)^2 + d_1(2-2)^3 \\
    a_0 + b_0 + c_0 + d_0 &= a_1
    \end{align*}
    $$
    
    Sin embargo, tambien tenemos que cumplir que $S_i(x_i)= f(x_i)$, podemos ir cumpliendo estas condiciones una por una:
    
    - Condiciones
        - $S_0(x_0) = f(x_0) \implies a_0 + b_0(x_0-1) + c_0(x_0-1)^2 + d_0(x_0-1)^3 = 2 \implies a_0 = 2$
        - $S_0(x_1) = f(x_1) \implies a_0 + b_0(x_1-1) + c_0(x_1-1)^2 + d_0(x_1-1)^3 = 3 \implies a_0 + b_0 + c_0 + d_0 = 3$
            - Pero, nosotros ya teníamos que $a_0 + b_0 + c_0 + d_0 = a_1$ entonces podemos decir que $a_1 = 3$
        - $S_1(x_1) = f(x_1) \implies a_1 + b_1(x-2) + c_1(x-2)^2 + d_1(x-2)^3 = 3 \implies a_1 = 3$
            - Que ya lo sabíamos 😎
        - $S_1(x_2) = f(x_2) \implies a_1 + b_1(x-2) + c_1(x-2)^2 + d_1(x-2)^3 = 5 \implies a_1 + b_1 + c_1 + d_1 = 5$
    
    En este momento, tenemos las siguientes ecuaciones:
    
    1. $a_0 = 2$
    2. $a_1 = 3$
    3. $a_0 + b_0 + c_0 + d_0 = 3$
    4. $a_1 + b_1 + c_1 + d_1 = 5$
    
    Ahora necesitamos asegurar que $S^\prime_{j}(x_{j+1}) = S^\prime_{j+1}(x_{j+1})$ entonces podemos ver que:
    
    - $S^\prime_0(x) = b_0 + 2c_0(x-1) + 3d_0(x-1)^2$
    - $S^\prime_1(x) = b_1 + 2c_1(x-2) + 3d_1(x-2)^2$
    
    Entonces podemos comezar a verificar las condiciones:
    
    - Condiciones
        - $S^\prime_{0}(x_{1}) = S^\prime_{1}(x_{1}) \implies b_0 + 2c_0(x_1-1) + 3d_0(x_1-1)^2 = b_1 + 2c_1(x_1-2) + 3d_1(x_1-2)^2 \implies b_0 + 2c_0 + 3d_0 = b_1$
    
    Ahora necesitamos que $S^{\prime \prime}_j(x_{j+1}) = S^{\prime \prime}_{j+1}(x_{j+1})$, luego podemos ver que:
    
    - $S^{\prime \prime}_0(x) = 2c_0 + 6d_0(x-1)$
    - $S^{\prime \prime}_1(x) = 2c_1 + 6d_1(x-2)$
    
    Luego podemos verificar las condiciones de la siguiente manera:
    
    - Condiciones
        - $S^{\prime \prime}_0(x_{1}) = S^{\prime \prime}_{1}(x_{1}) \implies 2c_0 + 6d_0(x_1-1) = 2c_1 + 6d_1(x_1-2) \implies 2c_0+6d_0 = 2c_1$
    
    Y por ultimo, podemos verificar las condiciones de frontera:
    
    - $S^{\prime \prime}_0(x) = 0 \implies 2c_0 + 6d_0(x_0-1) = 0 \implies c_0 = 0$
    - $S^{\prime \prime}_1(x_2) = 0 \implies 2c_1 + 6d_1(x_2-2) = 0 \implies 2c_1 + 6d_1 = 0$
    
    De esta manera, concluimos que tenemos las siguientes ecuaciones derivadas de las condiciones que tenemos que asegurar.
    
    1. $a_0 = 2$
    2. $a_1 = 3$
    3. $a_0 + b_0 + c_0 + d_0 = 3$
    4. $a_1 + b_1 + c_1 + d_1 = 5$
    5. $b_0 + 2c_0 + 3d_0 = b_1$
    6. $c_0+3d_0 = c_1$
    7. $c_0 = 0$
    8. $2c_1 + 6d_1 = 0$
    
    Si resolvemos el sistema de ecuaciones, podemos ver que:
    
    - $a_0 = 2, b_0 = \frac{3}{4}, c_0 = 0, d_0 = \frac{1}{4}$
    - $a_1 = 3, b_1 = \frac{3}{2}, c_1 = \frac{3}{4}, d_1 = -\frac{1}{4}$
    
    Con esto podemos construir los polinomios $S_0(x), S_1(x)$
    

### Definición general

Podemos enumerar cada una de las condiciones:

1. $S_j(x) \in [x_j, x_{j+1}]$
2. $S_j(x_{j + 1}) = S_{j+1}(x_{j+1})$

3. $S^\prime_{j}(x_{j+1}) = S^\prime_{j+1}(x_{j+1})$
4. $S^{\prime \prime}_j(x_{j+1}) = S^{\prime \prime}_{j+1}(x_{j+1})$
5. $S^{\prime \prime}_0(x_{0}) = S^{\prime \prime}_{n}(x_{n}) = 0$ (Opcional para las fronteras)
6. $S^\prime_0(x_0) = f^\prime(x_0)$ 
7. $S^\prime_n(x_n) = f^\prime(x_n)$ (Opcional - frontera natural)

Entonces para cada una las condiciones tenemos que sacar un total de $4n - 4$ ecuaciones si tenemos $n$ puntos.  Lo ideal es llegar a una forma matricial.

??? example "Primera ecuación"
    
    Podemos derivar la primera ecuación de la segunda condición descrita anteriormente, luego podemos ver que para asegurar $S_j(x_{j + 1}) = S_{j+1}(x_{j+1})$ podemos ver que
    
    $$
    \begin{align*}
    S_j(x_{j + 1}) &= S_{j+1}(x_{j+1}) \\
    a_j + b_j(x_{j+1}- x_{j}) + c_{j}(x_{j+1}-x_j)^2 + d_j(x_{j+1}-x_j)^3 &= a_{j+1} + b_{j+1}(x_{j+1}- x_{j+1}) + c_{j+1}(x_{j+1}-x_{j+1})^2 + d_{j+1}(x_{j+1}-x_{j+1})^3  \\
    a_j + b_j(x_{j+1}- x_{j}) + c_{j}(x_{j+1}-x_j)^2 + d_j(x_{j+1}-x_j)^3 &= a_{j+1}
    \end{align*}
    $$
    
    Luego podemos ver que la ecuación es:
    
    $$
    a_j + b_j(x_{j+1}- x_{j}) + c_{j}(x_{j+1}-x_j)^2 + d_j(x_{j+1}-x_j)^3 = a_{j+1} \tag{1}
    $$
    
??? example "Segunda ecuación"
    
    Podemos derivar esta ecuación de la **3ra condición descrita**, podemos ver que las derivadas son:
    
    - $S^\prime_{j}(x_{j+1}) = b_j + 2c_j(x_{j+1} - x_j) + 3d_j(x_{j+1} - x_j)^2$
    - $S^\prime_{j+1}(x_{j+1}) = b_{j+1} + 2c_{j+1}(x_{j+1} - x_{j+1}) + 3d_{j+1}(x_{j+1} - x_{j+1})^2$
    
    Sin embargo, note que los términos que llevan los puntos van a ser $=0$. Luego, la segunda ecuación tiene la siguiente forma si queremos cumplir que $S^\prime_{j}(x_{j+1}) = S^\prime_{j+1}(x_{j+1})$ entonces queda de la forma:
    
    $$
    b_j + 2c_j(x_{j+1} - x_j) + 3d_j(x_{j+1} - x_j)^2 = b_{j+1} \tag{2}
    $$
    
??? example "Tercera ecuación"
    
    Para sacar la tercera ecuación podemos ver que la podemos sacar de la 4ta condición descrita ($S^{\prime \prime}_j(x_{j+1}) = S^{\prime \prime}_{j+1}(x_{j+1})$), luego las segundas derivadas son:
    
    - $S^{\prime \prime}_{j}(x_{j+1}) = 2c_{j} + 6d_{j}(x_{j+1}-x_j)$
    - $S^{\prime \prime}_{j+1}(x_{j+1}) = 2c_{j+1} + 6d_{j+1}(x_{j+1}-x_{j+1})$
    
    Luego podemos ver que la ecuación para asegurar la condición queda de la forma:
    
    $$
    2c_{j} + 6d_{j}(x_{j+1}-x_j) = 2c_{j+1} \tag{3}
    $$
    

Entonces, vamos a construir un sistema matricial para poder generar todas las incognitas.

---

Defina la diferencia entre un par de puntos consecutivos como: $(x_{j+1} - x_j) = h_j$

De la ecuación $(3)$ podemos despejar a $d_j$, entonces tenemos que:

$$
\begin{align*}
d_j = \frac{c_{j+1} - c_j}{3h_j} \tag{*}
\end{align*}
$$

De $(1)$ podemos comenzar a reemplazar a $d_j$ en la ecuación para que quede en terminos de dos variables solamente, luego la ecuación queda de la forma:

$$
\begin{align*}
a_{j+1} &= a_j + b_jh_j + c_jh_j^2 + \left(\frac{c_{j+1}-c_j}{3h_j}\right)h_j^3 \\
a_{j+1} &= a_j + b_jh_j + \frac{c_{j+1}}{2}h_j^2 + \frac{2}{3}c_jh_j^2 \tag{4}
\end{align*}
$$

De $(2)$ podemos reemplazar de igual manera a $d_j$, luego nos queda de la forma:

$$
\begin{align*}
b_{j+1} &= b_j + 2c_jh_j + 3d_jh_j^2 \\
b_{j+1} &= b_j + 2c_jh_j + 3\left(\frac{c_{j+1}-c_j}{3h_j}\right)h_j^2 \\
b_{j+1} &= b_j + c_{j+1}h_j + c_jh_j  \tag{5}
\end{align*}
$$

Luego, podemos hacer una reducción de orden a partir de $(4)$ y de $(5)$, especificamente, vamos a reducir un orden, entonces $j \rightarrow j - 1$ y de igual manera $j+1\rightarrow j$. Luego entonces vemos que $(4)$ queda de la forma:

$$
a_{j} = a_{j-1} + b_{j-1}h_{j-1} + \frac{c_{j}}{2}h_{j-1}^2 + \frac{2}{3}c_{j-1}h_{j-1}^2 \tag{6}
$$

Y podemos hacer lo mismo con $(5)$, entonces queda de la forma:

$$
b_{j} = b_{j-1} + c_{j}h_{j-1} + c_{j-1}h_{j-1}  \tag{7}
$$

De la ecuación $(4)$ podemos despejar a $b_j$

$$
b_{j} = \frac{a_{j+1}-a_{j}}{h_{j}} - \frac{c_{j+1}}{3}h_{j} - \frac{2}{3}c_{j}h_{j} \tag{8}
$$


De la ecuación $(6)$ podemos despejar a $b_{j-1}$

$$
b_{j-1} = \frac{a_{j}-a_{j-1}}{h_{j-1}} - \frac{c_{j}}{2}h_{j-1} - \frac{2}{3}c_{j-1}h_{j-1} \tag{9}
$$

De $(4)$ y $(6)$ se pudieron construir $(8)$ y $(9)$, luego estas las podemos reemplazar en $(7)$.

$$
\begin{align*}
b_{j} &= b_{j-1} + c_{j}h_{j-1} + c_{j-1}h_{j-1}\\
\left(\frac{a_{j+1}-a_{j}}{h_{j}} - \frac{c_{j+1}}{3}h_{j} - \frac{2}{3}c_{j}h_{j}\right) &= \left(\frac{a_{j}-a_{j-1}}{h_{j-1}} - \frac{c_{j}}{2}h_{j-1} - \frac{2}{3}c_{j-1}h_{j-1}\right) + c_{j}h_{j-1} + c_{j-1}h_{j-1}\\
\end{align*}
$$

Luego esta ecuación la podemos despejar para juntar los $a_j$

$$
\begin{align*}
3\frac{(a_{j+1}-a_j)}{h_{j}}-3\frac{(a_j - a_{j-1})}{h_{j-1}} &= c_{j+1}h_j + 2c_jh_j-c_jh_{j-1}-2c_{j-1}h_{j-1}+3c_jh_{j-1}+3c_{j-1}h_{j-1} \\
3\frac{(a_{j+1}-a_j)}{h_{j}}-3\frac{(a_j - a_{j-1})}{h_{j-1}} &= c_{j-1}h_{j-1}+2c_j(h_j+ h_{j-1}) + c_{j+1}h_j
\end{align*}
$$

Ya sabemos que nuestras condiciones de frontera son:

- $S^{\prime \prime}_0(x_0) = 0$
- $S^{\prime \prime}_n(x_n) = 0$

Podemos saber que $c_0 = 0, c_n = 0$, luego podemos escribir algunos terminar para cada uno de los $j$.

??? example "$j = 1$"
    
    $$
    3\frac{(a_{2}-a_1)}{h_{1}}-3\frac{(a_1 - a_{0})}{h_{0}} = c_{0}h_{0}+2c_1(h_1+ h_{0}) + c_{2}h_1
    $$
    
??? example "$j = 2$"
    
    $$
    3\frac{(a_{3}-a_2)}{h_{2}}-3\frac{(a_2 - a_{1})}{h_{1}} = c_{1}h_{1}+2c_2(h_2+ h_{1}) + c_{3}h_2
    $$
    
??? example "$j = 3$"
    
    $$
    3\frac{(a_{4}-a_3)}{h_{3}}-3\frac{(a_3 - a_{2})}{h_{2}} = c_{2}h_{2}+2c_3(h_3+ h_{2}) + c_{4}h_3
    $$
    

Si seguimos de esta forma, podemos ver que podemos construir la siguiente matriz:

$$
\begin{bmatrix}
1 & 0 & 0 & \dots & 0 \\
h_0 & 2(h_1+h_0) & h_1  & \dots & 0 \\
0 & h_1 & 2(h_2+h_1) & h_2   & 0 \\
0 & 0 & h_2 & 2(h_3+h_2) & h_3 \\
\vdots & \dots & \dots & \dots& \vdots \\
\vdots & \dots & \dots & \dots& 1
\end{bmatrix} \cdot
\begin{bmatrix}
c_0 = 0 \\
c_1 \\
c_2 \\
\vdots \\
c_n
\end{bmatrix} =
\begin{bmatrix}
0 \\
3\frac{(a_{2}-a_1)}{h_{1}}-3\frac{(a_1 - a_{0})}{h_{0}} \\
3\frac{(a_{3}-a_2)}{h_{2}}-3\frac{(a_2 - a_{1})}{h_{1}} \\
\vdots \\
0
\end{bmatrix}
$$

Con esto podemos hallar las variables que hacen falta

??? example "Ej con $n = 4$"
    
    Tome los puntos $(0, 0), (1, 1), (2, 16), (3, 81)$, luego podemos ver que:
    
    - $h_0 = 1, h_1 = 1, h_2 = 1$
    
    De igual manera, podemos ver que los polinomios resultantes son:
    
    - $S_0(x) = a_0 + b_0(x-0) + c_0(x - 0)^2 + d_0(x-0)^3$
    - $S_1(x) = a_1 + b_1(x-1) + c_1(x - 1)^2 + d_1(x-1)^3$
    - $S_2(x) = a_2 + b_2(x-2) + c_2(x - 2)^2 + d_2(x-2)^3$
    
    Sabemos que todos los polinomios tiene que cumplir que $S_i(x_i) = f(x_i)$, entonces podemos ver que los terminos de $x$ son $0$ y por lo tanto:
    
    - $a_0 = 0, a_1 = 1, a_2 = 16$
    
    Luego, podemos construir la matriz:
    
    $$
    \begin{bmatrix}
    1 & 0 & 0 & 0\\
    h_0 & 2(h_1+h_0) & h_1 & 0 \\
    0 & h_1 & 2(h_2 + h_1) & h_2 \\
    0 & 0 & 0 & 1\\
    \end{bmatrix} 
    \begin{bmatrix}
    c_0 \\
    c_1 \\
    c_2 \\
    c_3
    \end{bmatrix} =
    \begin{bmatrix}
    0 \\
    3\frac{a_2 - a_1}{h_1} - 3\frac{a_1 - a_0}{h_0} \\
    3\frac{a_3 - a_2}{h_2} - 3\frac{a_2 - a_1}{h_1} \\
    0
    \end{bmatrix}
    $$
    
    Entonces si reemplazamos podemos ver que:
    
    $$
    \begin{bmatrix}
    1 & 0 & 0 & 0\\
    1 & 4 & 1 & 0 \\
    0 & 1 & 4 & 1 \\
    0 & 0 & 0 & 1
    \end{bmatrix} 
    \begin{bmatrix}
    c_0 \\
    c_1 \\
    c_2 \\
    c_3
    \end{bmatrix} =
    \begin{bmatrix}
    0 \\
    42 \\
    3\frac{a_3 - a_2}{h_2} - 3\frac{a_2 - a_1}{h_1} \\
    0
    \end{bmatrix}
    $$
    
    Pero nos hace falta $a_3$, sin embargo, en este caso lo podemos tomar como $a_3 = 81$
    
    - ¿Porque?
        
        Hay que asegurar que el polinomio siguiente (Aunque no exista) sea igual en ese punto.
        
    
    Completando nuestra matriz tenemos que:
    
    $$
    \begin{bmatrix}
    1 & 0 & 0 & 0\\
    1 & 4 & 1 & 0 \\
    0 & 1 & 4 & 1 \\
    0 & 0 & 0 & 1
    \end{bmatrix} 
    \begin{bmatrix}
    c_0 \\
    c_1 \\
    c_2 \\
    c_3
    \end{bmatrix} =
    \begin{bmatrix}
    0 \\
    42 \\
    150 \\
    0
    \end{bmatrix}
    $$
    
    Con este sistema de ecuaciones, podemos ver que quedan:
    
    - $c_0 = 0$
    - $c_1 = \frac{6}{5}$
    - $c_2 = \frac{186}{5}$
    - $c_3 = 0$
    
    Note que con $c_i$ podemos inferir todos los $d_i$ de la ecuación $(*)$ discutida en el desarrollo y de igual manera podemos inferir los $b_i$ de la ecuación $(8)$.
    
    Si se reemplaza en las formulas, podemos ver que:
    
    - $d_0 = 0.4, d_1 = 12, d_2 = -12.4$
    - $b_0 = 0.6, b_1 = 1.8, b_2 = 40.2$
    
    De esta manera, podemos construir los polinomios 😎