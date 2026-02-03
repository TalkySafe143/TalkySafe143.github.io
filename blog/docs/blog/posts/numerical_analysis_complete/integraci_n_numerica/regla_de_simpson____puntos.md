---
title: Regla de Simpson (3 puntos)
tags: ['Análisis Numérico (Completo)']
---
Vamos a tener que $x_0 = a, x_1 = a + h, x_2 = a + 2h$ el cual en realidad $x_2 = b$. Podemos tener $h = \frac{b-a}{2}$.

Entonces podemos hacer el tercer polinomio de Taylor centrado en $x_1$, luego podemos ver que:

$$
f(x) = f(x_1) + f^{\prime}(x_1)(x- x_1) + f^{\prime\prime}(x_1)\frac{(x - x_1)^2}{2!} + f^{\prime\prime\prime}(x_1)\frac{(x-x_1)^3}{3!} + \frac{f^4(\xi(x))}{4!}(x-x_1)^4
$$

Entonces, necesitamos tener la integración

$$
\int_{x_0}^{x_2} f(x) \; dx =\int_{x_0}^{x_2} f(x_1) + f^{\prime}(x_1)(x- x_1) + f^{\prime\prime}(x_1)\frac{(x - x_1)^2}{2!} + f^{\prime\prime\prime}(x_1)\frac{(x-x_1)^3}{3!} + \frac{f^4(\xi(x))}{4!}(x-x_1)^4 \; dx
$$

Luego podemos ver que al integrar todos los terminos podemos ver que:

$$
\int_{x_0}^{x_2} f(x) \; dx = f^{}(x_1)(x- x_1) + f^{\prime}(x_1)\frac{(x - x_1)^2}{2} + f^{\prime\prime}(x_1)\frac{(x-x_1)^3}{6} +f^{\prime\prime\prime}(x_1)\frac{(x-x_1)^4}{24} \Big|_{x_0}^{x_2} + \frac{f^4(\xi(x))}{4!}(x-x_1)^4 \;\Big|_{x_0}^{x_2}
$$

Al evaluar la primera parte, se obtiene:

$$
\int_{x_0}^{x_2} f(x) \; dx = f(x_1)2h + \frac{1}{3}h^3f^{\prime\prime}(x_1) + \frac{h^5}{60}f^4(\xi(x))
$$

Teniendo en cuenta que podemos aproximar la derivada segunda de la función mencionada anteriormente, luego podemos reemplazar $f^{\prime\prime}(x_1)$ por su aproximación.

$$
\int_{x_0}^{x_2} f(x) \; dx = f(x_1)2h + \frac{1}{3}h^3\left\{\frac{1}{h^2}[f(x_0) - 2f(x_1) + f(x_2)] - \frac{h^2}{24}f^{4}(\xi(x))\right\} + \frac{h^5}{60}f^4(\xi(x))
$$

Simplificando la expresión tenemos que:

$$
\int_{x_0}^{x_2} f(x) \; dx = \frac{h}{3}[f(x_0) + 4f(x_1) + f(x_2)] + \frac{h^5}{360}f^{4}(\xi(x)) \tag{Simpson}
$$

Esta es la llamada Regla de Simpson