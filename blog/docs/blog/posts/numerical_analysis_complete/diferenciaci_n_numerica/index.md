---
title: Diferenciación numerica
tags: ['Análisis Numérico (Completo)']
---
Podemos ver que:

$$
f^\prime(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} -\frac{h}{2}f^{\prime\prime}(\xi(x)) \tag{2}
$$

Cuando $h > 0$ se denominan diferencias hacía delante y de forma analoga se puede decir cuando $h < 0$ se denomina diferencias hacía atras. 

---

Se puede tomar de manera general el caso de $3$ puntos, si tenemos $x_0, x_1, x_2 \in [a, b]$, estos puntos deben pertenecer a $f \in C^3[a, b]$ y tenemos que asegurar que: $x_1 = x_0 + h$ y $x_2 = x_0 + 2h$ para que la vida sea mas facil.

Podemos construir los polinomios de Lagrange y sus respectivas derivadas:

- $L_0 = \frac{(x-x_1)(x - x_2)}{(x_0-x_1)(x_0 - x_2)}, L^\prime_0 = \frac{(x - x_2) + (x-x_1)}{(x_0-x_1)(x_0 - x_2)}$
- $L_1 = \frac{(x-x_0)(x - x_2)}{(x_1-x_0)(x_1 - x_2)}, L^\prime_1 = \frac{(x - x_2) + (x-x_0)}{(x_1-x_0)(x_1 - x_2)}$
- $L_2 = \frac{(x-x_0)(x - x_1)}{(x_2-x_0)(x_2 - x_1)}, L^\prime_2 = \frac{(x - x_1) + (x-x_2)}{(x_2-x_0)(x_2 - x_1)}$

Podemos recordar que:

$$
f(x) = \sum_{i = 0}^n f(x_i)L_i + \left(\prod_{i = 0}^n(x-x_i)\right)\frac{f^{n+1}(\xi(x))}{(n+1)!}
$$

Y de igual manera, podemos ver que

$$
f^\prime(x) = \sum_{i = 0}^n f(x_i)L^\prime_i + \frac{d}{dx}\left[\left(\prod_{i = 0}^n(x-x_i)\right)\frac{f^{n+1}(\xi(x))}{(n+1)!}\right]
$$

Podemos expresar todos los puntos en términos de $x_0$ con sus diferencias de $h$. Es decir  $x_1 = x_0 + h$ y $x_2 = x_0 + 2h$, luego podemos ver que nos queda de la siguiente manera:

$$
f^\prime(x_0) = \frac{1}{2h}\left[-3f(x_0)+4f(x_0 + h) - f(x_0 + 2h)\right] + \frac{h^2}{3}f^{\prime\prime\prime}(\xi(x_0)) \tag{3}
$$

Esta se le conoce como $3$ puntos en el extremo. de igual manera podemos ver que:

$$
f^\prime(x_0) = \frac{1}{2h}[f(x_0 + h) - f(x_0 - h)] - \frac{h^2}{6}f^{\prime\prime\prime}(\xi(x_0)) \tag{3}
$$

Se le llama $3$ puntos en el medio, de igual manera se puede ver que:

$$
f^\prime(x_0) = \frac{1}{-2h}[3f(x_0 - 2h)-4f(x_0 -h) + f(x_0)] + \frac{h^2}{3}f^{\prime\prime\prime}(\xi(x_0)) \tag{3}
$$

Se le puede decir $3$ puntos hacía atras.

De igual manera podemos extraer la formulas para $5$ puntos, en este caso, cinco puntos en el medio:

$$
f^\prime(x_0) = \frac{1}{12h}[f(x_0 - 2h) - 8f(x_0 -h) + 8f(x_0 + h) - f(x_0 + 2h)]+\frac{h^4}{30}f^5(\xi(x_0)) \tag{5}
$$

De igual manera, se puede definir para cinco puntos hacia adelante

$$
f^\prime(x_0) = \frac{1}{12h}[-25f(x_0) + 48f(x_0 + h) - 36f(x_0 + 2h) + 16f(x_0 + 3h) - 3f(x_0 + 4h)] + \frac{h^4}{5}f^5(\xi(x_0)) \tag{5}
$$

---

Podemos ver que podemos derivar la formula para el punto medio para la segunda derivada para tres puntos.

$$
f^{\prime\prime}(x_0) = \frac{1}{h^2}[f(x_0 - h) - 2f(x_0) + f(x_0 + h)] - \frac{h^2}{24}f^{4}(\xi(x))
$$