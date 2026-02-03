---
title: Diferencias divididas de Newton
tags: ['Análisis Numérico (Completo)']
---
Hay que construir un polinomio de grado $n$-esimo de la forma:

$$
\begin{align*}
P_n(x) = f[x_0] + f[x_0,x_1](x - x_0)+ f[x_0, x_1, x_2](x-x_0)(x - x_1) + \dots\\
f[x_0, x_1, \dots, x_n](x - x_0)\dots(x - x_{n-1})
\end{align*}
$$

$$
P_n(x) = f[x_0] + \sum_{k = 1}^n \left( f[x_0, x_1, \dots, x_k] \prod_{i = 0}^{k-1}(x-x_i) \right)
$$

Considere cada uno de los $f(x_i)$ alineados en una recta, y una analogía util es construir un árbol, donde el ultimo nivel va a contener los $n$ puntos de los $x_i$ de la forma $f(x_i)$.

Para ir subiendo de nivel en el árbol, si el nivel $h_i$ tiene una cantidad de $n$ nodos, el siguiente nivel $h_{i-1}$ va a contener $h_i - 1$ nodos. Estos se construyen juntando los nodos adyacentes de la siguiente manera:

Considere $f[S]$ donde $S$ es el conjunto de puntos $x_i$ que estan involucrados en el nodo. Luego inicialmente vamos a tener $S_{n, 0} = \{x_0\}, S_{n, 1} = \{x_1\} \dots$ para indicar que el primer conjunto del ultimo nivel es $S_{n, 0}$ el cual corresponde solamente $f(x_0)$.

Luego, el siguiente nivel esta definido como:

$S_{h-1, i} = S_{h, i} \cup S_{h, i+1}$ Donde $h$ es la altura actual. De manera similar, y teniendo en cuenta la unión podemos ver que:

$$
f[S_{h-1, i}] = \frac{f[S_{h, i+1}] - f[S_{h, i}]}{b-a}
$$

Donde $b \in S_{h-1, i}$ es el ultimo elemento ordenado (El $x_i$ con mayor $i$ en el set) y donde $a \in S_{h-1, i}$ es el primer elemento ordenado del set (El $x_i$ con menor $i$ en el set).

Note que para formar el polinomio vamos a tomar solamente los valores de $f[S_{h, 0}]$.

Como ejemplo, considere el ultimo nivel $h = n$, entonces los primeros terminos del siguiente nivel van a ser:

$S_{h-1, 0} = S_{h, 0} \cup S_{h, 1} = \{x_0\} \cup \{x_1\} = \{x_0, x_1\}$, luego podemos ver que:

$$
f[S_{h-1, 0}] = f[\{x_0, x_1\}] = \frac{f[S_{h, 1}] - f[S_{h, 0}]}{b - a} = \frac{f[\{x_1\}] - f[\{x_0\}]}{x_1 - x_0}
$$

> La verdad, funciona bien y es facil 😎
>