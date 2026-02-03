---
title: Metodo de punto fijo
tags: ['Análisis Numérico (Completo)']
---
Una función tiene un punto fijo si se puede asegurar que la función corta con $y = x$.

A los puntos que cortan con esta función, se les conoce como puntos fijos de la función. Entonces se puede definir que:

Si $g \in c[a, b]$ y $g(x) \in [a, b]$ para todo $x \in (a, b)$, entonces $g$ tiene un punto fijo. Si ademas $|g^\prime (x) | \le k = 1$ (Donde $k$ tiene que ser $1$) para todo $x \in [a, b]$ entonces existe un punto fijo.

??? example "Ejemplo"
    
    Si tenemos la función $f(x) = x^3 + 4x^2 - 10$ podemos construir una nueva función, ya que tenemos que igualar $f(x) = 0$. Podemos construir la siguiente función
    
    $$
    \begin{align*}
    g_1(x) = x^3 + 4x^2 - 10 &= 0 \\
    x^3 + 4x^2 &= 10 \\
    x &= \frac{10}{x^2+4x} \\
    \end{align*}
    $$
    
    Sin embargo, podemos construir mas de una función de esta naturaleza.
    
    $$
    \begin{align*}
    g_2(x) = x^3 + 4x^2 - 10 &= 0 \\
    x &= \sqrt{\frac{10-x^3}{4}} \\
    \end{align*}
    $$
    
    $$
    \begin{align*}
    g_3(x) = x^3 + 4x^2 - 10 &= 0 \\
    x &= x^3 + 4x^2 - 10 + x\\
    \end{align*}
    $$
    
    $$
    \begin{align*}
    g_4(x) = x^3 + 4x^2 - 10 &= 0 \\
    x &= \sqrt[3]{10-4x^2} \\
    \end{align*}
    $$
    
    En este caso, si se comienza a iterar, $g_2(x)$ es la unica que funciona, ya que no se sale del rango.