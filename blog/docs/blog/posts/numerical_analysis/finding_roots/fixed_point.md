---
title: Punto Fijo
---
# Método de punto fijo

Una función tiene un punto fijo si existe un valor para el cual $g(x) = x$, es decir, la función corta con la recta $y = x$.

!!! info "Teorema de Existencia y Unicidad"
    - Si $g \in C[a, b]$ y $g(x) \in [a, b]$ para todo $x \in [a, b]$, entonces $g$ tiene al menos un punto fijo en $[a, b]$.
    - Si además $|g^\prime(x)| \le k < 1$ para todo $x \in (a, b)$, entonces el punto fijo es único.

??? example "Ejemplo"

    Si tenemos la función $f(x) = x^3 + 4x^2 - 10$, queremos hallar $x$ tal que $f(x) = 0$. Podemos construir varias funciones $g(x)$:
    
    1. $x = \frac{10}{x^2+4x}$
    2. $x = \sqrt{\frac{10-x^3}{4}}$
    3. $x = x^3 + 4x^2 - 10 + x$
    4. $x = \sqrt[3]{10-4x^2}$
    
    En este caso, si se comienza a iterar, $g_2(x)$ es la que funciona correctamente para el rango deseado ya que su derivada cumple con la condición de convergencia.
