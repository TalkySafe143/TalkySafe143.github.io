---
title: Integración numerica compuesta
tags: ['Análisis Numérico (Completo)']
---
Se puede hacer recall a la regla de Simpson

??? example "Regla de Simpson"
    
    $$
    \int_{x_0}^{x_2} f(x) \; dx = \frac{h}{3}[f(x_0) + 4f(x_1) + f(x_2)] + \frac{h^5}{360}f^{4}(\xi(x))
    $$
    

Note que la regla toma $3$ puntos, entonces, si tenemos $n$ puntos, podemos comenzar a dividir los puntos de tal manera que vamos a hacer muchas reglas de Simpson.

Por ejemplo, se puede determinar la regla para $x_0, x_1, x_2$ y por ejemplo tambien para $x_2, x_3, x_4$. Entonces vamos a hacer varias reglas de Simpson, sin embargo, vamos a cambiar un poco las condiciones de las reglas teniendo en cuenta que $h = \frac{b-a}{n-1}$ (Donde $n$ es la **cantidad de puntos**).

??? example "Nota con los $h$."
    
    Hay que tener en cuenta, que se puede definir en términos de la cantidad de puntos o de la cantidad de subintervalos internos.
    

Si tomamos que los puntos estan indexados en $0$, entonces podemos definir la integral como:

$$
\int_a^bf(x)\; dx = \sum_{j = 1}^{n /2}\int_{x_{2j-2}}^{x_{2j}} f(x)\; dx
$$

Entonces note que podemos reemplazar la integral interior por la regla de Simpson.

$$
\int_a^bf(x)\; dx = \sum_{j = 1}^{n /2}\frac{h}{3}[f(x_{2j-2}) + 4f(x_{2j-1}) + f(x_{2j})]
$$

Note que se tiene que ir hasta $\frac{n}{2}$ porque, si nosotros dividimos la integral en $n$ subintervalos, entonces hay que notar que la regla de Simpson agrupa de a dos subintervalos.

Note que al hacer la sumatoria, entonces puede notar que el ultimo punto de la $j$-esima regla de Simpson, se va a compartir con el primer punto de la $(j+1)$-esima regla de Simpson.

Los puntos con subindice inpares, nunca se van a repetir y siempre van a estar multplicados por $4$ y $x_0, x_n$ van a ser los unicos puntos que no se repiten tampoco. Luego podemos ver que la formula queda de la forma:

$$
\int_a^bf(x)\; dx = \frac{h}{3}\left[f(a) + 4\sum_{j = 1}^{n /2}f(x_{2j-1}) + 2\sum_{j = 1}^{\frac{n}{2}-1}f(x_{2j}) + f(b)\right] \tag{*}
$$

A esta regla se le conoce como la **regla compuesta de Simpson**.

En realidad, cualquier regla vista anteriormente se puede hacer compuesta, como por ejemplo la **regla compuesta trapezoidal**.

$$
\int_a^b f(x) \; dx = \frac{h}{2}\left[f(a) + 2\sum_{j = 1}^{n-1}f(x_j) + f(b)\right] \tag{*}
$$

De igual manera, se puede ver la **regla compuesta de punto medio** se define de la forma:

$$
\int_a^bf(x)\;dx = 2h\sum_{j=0}^{\frac{n}{2}}f(x_{2j}) \tag{*}
$$

> Esta regla se usa principalmente para Newton cotas abiertas.
>