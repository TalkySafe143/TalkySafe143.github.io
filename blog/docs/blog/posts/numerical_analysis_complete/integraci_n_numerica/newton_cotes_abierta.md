---
title: Newton cotes abierta
tags: ['Análisis Numérico (Completo)']
---
Si tenemos que aproximar la integral de

$$
\int_a^bf(x)
$$

Entonces se pueden excluir los extremos. Entonces la recta numerica puede quedar de la siguiente forma:

$$
a, x_0, x_1, x_2, \dots, x_n, b
$$

De esta manera, hay que ver que para dividir los puntos el $h = \frac{b-a}{n+2}$.

Si tomamos $a = x_{-1}$ y $b = x_{n+1}$, podemos ver que:

$$
\begin{align*}
x_i &= a + ih \\
x_{-1} &= a \\
x_{0} &= a + h \\
x_{1} &= a + 2h \\
x_n &= b- h \\
x_{n+1} &= b
\end{align*}
$$

Teniendo esto en cuenta, podemos ver que

??? example "Para $n = 0$"
    
    $$
    \int_a^b f(x) \; dx = 2hf(x_0)
    $$
    
??? example "Para $n = 1$"
    
    $$
    \int_a^b f(x) \; dx = \frac{3}{2}h[f(x_0) + f(x_1)]
    $$
    
??? example "Para $n = 2$"
    
    $$
    \int_a^bf(x)\;dx = \frac{4}{3}h[2f(x_0) - f(x_1) + 2f(x_2)]
    $$
    
??? example "Para $n = 3$"
    
    $$
    \int_a^b f(x) \; dx = \frac{5}{24}h[11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)]
    $$