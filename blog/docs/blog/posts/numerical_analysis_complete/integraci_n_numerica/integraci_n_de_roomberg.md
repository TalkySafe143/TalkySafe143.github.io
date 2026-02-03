---
title: Integración de Roomberg
tags: ['Análisis Numérico (Completo)']
---
Esta es una extrapolación de la regla trapezoidal compuesta. Podemos ver que con el termino de error la regla queda de la forma:

$$
\int_a^b f(x) \; dx = \frac{h}{2}\left[f(a) + 2\sum_{j = 1}^{n-1}f(x_j) + f(b)\right] - \underbrace{\frac{b-a}{12}h^2f^{\prime\prime}(\xi(x))}_{\text{cota de error}}
$$

Lo que busca Roomberg es reducir de manera significativa la cota de error. Podemos compensar el error con unos términos que hacen parte de la extrapolación de Roomberg.

$$
\int_a^b f(x) \; dx = \frac{h}{2}\left[f(a) + 2\sum_{j = 1}^{n-1}f(x_j) + f(b)\right] + K_1h^2 + K_2h^4 + K_3h^6 + \dots
$$

Para poder derivar una formula, podemos ver que para $n = 2^{K-1}$ para $K \in \mathbb{N}$. Donde $n$ es la cantidad de reglas de Roomberg que se van a aplicar o la cantidad de extrapolaciones que vamos a hacer (Según el $K$).

Vamos a construir un conjunto de $R$ para poder hacer la extrapolación, entonces podemos definir por ejemplo:

- $K = 1, n = 1$ en este caso vamos a definir a $R_{11} = 1$
- $K = 2, n = 2$ en este caso vamos a definir $R_{21} = 2$
- $K = 3, n = 4$ en este caso vamos a definir $R_{31} = 4$

Luego, podemos definir $R$ (las extrapolaciones de Roomberg) como:

$$
R_{K, j} = R_{k, j-1} + \frac{1}{4^{j-1}-1}(R_{K, j-1} - R_{K-1, j-1}) \hspace{1cm} K = j, j+1, j+2, \dots
$$

Entonces podemos ver que esta regla sugiere que se puede ver de la siguiente forma:

| $j \rightarrow$  | 1 | 2 | 3 |
| --- | --- | --- | --- |
| $K$ |  |  |  |
| 1 | $R_{11}$ |  |  |
| 2 | $R_{21}$ | $R_{22}$ |  |
| 3 | $R_{31}$ | $R_{32}$ | $R_{33}$ |
| 4 | $R_{41}$ | $R_{42}$ | $R_{43}$ |
| 5 | $R_{51}$ | $R_{52}$ | $R_{53}$ |

Note que $R_{22}$ se ‘alimenta’ o necesita saber los valores de $R_{11}, R_{21}$, de forma general, en la tabla se puede ver que para cualquier $R_{K, j}$, este termino se alimenta del término anterior de la misma fila ($R_{K, j - 1}$) y del término anterior diagonal, es decir, de la fila y columna anterior ($R_{K-1, j-1}$)

Entonces, vamos a ver que cuando $j = 1$, vamos a ver que:

$$
R_{K, 1} = \int_a^b f(x) \; dx = \frac{h}{2}\left[f(a) + 2\sum_{j = 1}^{n-1}f(x_j) + f(b)\right]; \forall K \in \mathbb{N}
$$

Sin embargo, note que $K$ indica la cantidad de puntos con el que se va a hacer la regla: $n = 2^{K-1}$ y de esta manera podemos tambien saber $h = \frac{b-a}{n}$.

Para poder calcular $R_{K, j}$ donde $j > 1$, entonces podemos seguir la regla anterior que vimos que se define de manera recursiva.