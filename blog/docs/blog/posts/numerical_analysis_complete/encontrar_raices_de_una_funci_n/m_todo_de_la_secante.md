---
title: Método de la secante
tags: ['Análisis Numérico (Completo)']
---
Cuando se traza la recta secante entre el punto $f(a)$ y $f(b)$, se va a poder notar que la secante corta con el eje $x = 0$, defina ese punto de corte como $f(x_0)$, luego asumiendo que $a < b$, podemos tomar $a = x_0$ y repetir el proceso.

Sin embargo, esta información la podemos tomar a partir de la derivada de la función. Entonces, defina $m$ como la secante de dos puntos $x_{n-1}$ y $x_n$ se puede aproximar a $f(x_n)$, en realidad podemos ver que:

$$
f^\prime (x_n) = \frac{f(x_n) - f(x_{n-1})}{x_n - x_{n-1}}
$$

Luego tomando $f^\prime(x_n) = f^\prime(x_{i-1})$ podemos reemplazar en la formula del método de Newton Raphson se puede ver que:

$$
\begin{align*}
x_{n+1} &= x_{n} - \frac{(x_n - x_{n-1})f(x_{n})}{f(x_{n})-f(x_{n-1})}
\end{align*}
$$

Esta formula se conoce como la formula de la secante. Algunas ventajas son:

- No se necesita derivar.

Alguna desventaja es:

- Se necesitan dos puntos, se construye $x_{n+1}$ a partir de $x_n, x_{n-1}$ o los puntos anteriores.
??? example "Ejemplo"
    
    Para $f(x) = x^3 + x - 1$ se puede iniciar con $x_0 = 0$ y $x_1 = 1$, luego podemos comenzar a iterar:
    
    $$
    x_2 = x_1-\frac{f(x_1)(x_1 - x_0)}{f(x_1)-f(x_0)} = \frac{1}{2}
    $$
    
    $$
    x_3 = x_2-\frac{f(x_2)(x_2 - x_1)}{f(x_2)-f(x_1)} = \frac{7}{11}
    $$