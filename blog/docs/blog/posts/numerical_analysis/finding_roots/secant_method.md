---
title: Método de la Secante
---
# Método de la secante

Cuando se traza la recta secante entre los puntos $(x_{n-1}, f(x_{n-1}))$ y $(x_n, f(x_n))$, se puede hallar el punto donde dicha recta corta el eje $x$. 

Este método aproxima la derivada de Newton-Raphson mediante la pendiente de la secante:

$$
f^\prime (x_n) \approx \frac{f(x_n) - f(x_{n-1})}{x_n - x_{n-1}}
$$

Reemplazando en la fórmula de Newton-Raphson:

$$
x_{n+1} = x_n - \frac{f(x_n)(x_n - x_{n-1})}{f(x_n) - f(x_{n-1})}
$$

!!! info "Pros y Contras"
    - **Ventaja**: No requiere calcular la derivada de la función.
    - **Desventaja**: Se necesitan dos puntos iniciales para comenzar.

??? example "Ejemplo"

    Para $f(x) = x^3 + x - 1$ con $x_0 = 0$ y $x_1 = 1$:
    
    $$
    x_2 = 1 - \frac{f(1)(1 - 0)}{f(1)-f(0)} = 1 - \frac{1(1)}{1 - (-1)} = 0.5
    $$
    
    $$
    x_3 = 0.5 - \frac{f(0.5)(0.5 - 1)}{f(0.5)-f(1)} \approx 0.636
    $$
