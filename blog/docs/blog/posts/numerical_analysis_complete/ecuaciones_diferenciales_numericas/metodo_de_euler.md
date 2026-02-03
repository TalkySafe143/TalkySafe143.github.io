---
title: Metodo de Euler
tags: ['Análisis Numérico (Completo)']
---
En el caso que tenemos que $\frac{dy}{dt} = f(t, y)$ con $a \le t \le b$ y teniendo la condición inicial $y(a) = \alpha$, entonces podemos tomar la analogía de ir dando pasos para poder encontrar la solución a partir de la condición inicial, podemos establecer un tamaño del salto $h = \frac{b-a}{N}$ donde $N$ es la cantidad de pasos que vamos a hacer y podemos definir cada uno de los tiempos de los pasos como: $t_{i} = a + h_i$.

Dado el teorema de Taylor centrado en $t_i$ y evaluado en $t_{i+1}$ podemos ver que:

$$
y(t) = y(t_i) + y^\prime(t_i)(t - t_i) + \frac{y^{\prime\prime}(\xi(t))(t-t_i)^2}{2!}
$$

Cuando lo evaluamos en $t_{i + 1}$.

$$
y(t_i + 1) = y(t_i) + y^\prime(t_i)(t_{i+1}- t_i) + y^{\prime\prime}(\xi(t_{i+1}))(t_{i+1} - t_i)^2\cdot \frac{1}{2!}
$$

Sin embargo, si tomamos $h = t_{i+1} - t_i$ y $y = \omega$ podemos ver que el metodo de Euler queda de la forma:

$$
\omega_{i+1} = w_i + hf(t, y) + \frac{h^2}{2}y^{\prime\prime}(\xi(t_{i+1})) \tag{*}
$$