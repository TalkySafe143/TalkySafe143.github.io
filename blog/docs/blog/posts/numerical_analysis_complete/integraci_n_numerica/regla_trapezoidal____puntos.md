---
title: Regla trapezoidal (2 puntos)
tags: ['Análisis Numérico (Completo)']
---
Vamos a tener $2$ puntos: $x_0, x_1 \in [a, b]$, entonces por ejemplo, podemos escoger $x_0 = a, x_1 = b$ y podemos ver que el tamaño del salto $h = b-  a$.

Luego podemos crear los polinomios de Lagrange:

- $L_0 = \frac{x-x_1}{x_0-x_1}$
- $L_1 = \frac{x-x_0}{x_1 - x_0}$

Entonces podemos construir el polinomio con su respectivo termino de error:

$$
f(x) = f(x_0)L_0 + f(x_1)L_1 + (x-x_0)(x-x_1)\frac{f^2(\xi(x))}{2!}
$$

Entonces si quieremos integrar, podemos ver que:

$$
\int_a^b f(x)dx = \int_a^bf(x_0)L_0 + f(x_1)L_1dx + \int_a^b (x-x_0)(x-x_1)\frac{f^2(\xi(x))}{2!}dx
$$

Luego esto lo podemos trasladar a otra forma teniendo en cuenta que un término del error en realidad es constante:

$$
\int_{x_0}^{x_1} f(x) dx = \underbrace{\int_{x_0}^{x_1} f(x_0)L_0 + f(x_1)L_1 dx}_1 + \underbrace{\frac{f^2(\xi(x))}{2}\int_{x_0}^{x_1}(x-x_0)(x-x_1)dx}_2
$$

Podemos calcular las integrales por aparte comenzando con la primera:

$$
\int_{x_0}^{x_1} f(x_0)L_0 + f(x_1)L_1 \;dx = \frac{f(x_0)}{(x_0 - x_1)}\cdot \frac{(x-x_1)^2}{2} + \frac{f(x_1)}{(x_1 - x_0)}\cdot\frac{(x-x_0)^2}{2} \Big|_{x_0}^{x_1} 
$$

Sin embargo, al evaluar, note que algunos terminos se cancelan, luego podemos ver que queda de la forma:

$$
\int_{x_0}^{x_1} f(x_0)L_0 + f(x_1)L_1 \;dx = \frac{f(x_1)(x_1-x_0)}{2} - \frac{f(x_0)(x_0 - x_1)}{2}
$$

Si denotamos $h = x_1 - x_0$ entonces podemos ver que nos queda:

$$
\int_{x_0}^{x_1} f(x_0)L_0 + f(x_1)L_1 \;dx = \frac{h}{2}[f(x_1) + f(x_0)] \tag{1}
$$

Para la segunda integral lo podemos expandir de la forma:

$$
\int_{x_0}^{x_1}x^2 - x(x_1 + x_0)+x_0x_1\;dx = \frac{x^3}{3} - \frac{x^2}{2}(x_1+x_0)+xx_0x_1 \Big|_{x_0}^{x_1}
$$

Luego podemos ver que despues de evaluarlo, nos da que:

$$
\int_{x_0}^{x_1}x^2 - x(x_1 + x_0)+x_0x_1\;dx = -\frac{1}{6}x_1^3 + \frac{1}{2}x_1^2x_0 + \frac{1}{6}x_0^3 -\frac{1}{2}x_0^2x_1
$$

Sin embargo, podemos reescribir todo definiendo $x_1 = x_0 + h$, luego nos queda que:

$$
\int_{x_0}^{x_1}x^2 - x(x_1 + x_0)+x_0x_1\;dx = -\frac{1}{6}(x_0 + h)^3 + \frac{1}{2}(x_0 + h)^2x_0 + \frac{1}{6}x_0^3 -\frac{1}{2}x_0^2(x_0+h)
$$

Sin embargo, despues de expandir los cubos y los cuadrados, nos queda que:

$$
\int_{x_0}^{x_1}x^2 - x(x_1 + x_0)+x_0x_1\;dx = -\frac{h^3}{6} \tag{2}
$$

Entonces, en realidad podemos ver que:

$$
\int_{x_0}^{x_1} f(x) \;dx = \frac{h}{2}[f(x_1) + f(x_0)] - \frac{h^3}{12}f^2(\xi(x)) \tag{*}
$$