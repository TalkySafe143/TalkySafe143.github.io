---
title: Bisección
---
# Bisección

Encontrar una raíz $f(x) = 0$. Según el teorema del valor intermedio, si $f \in C[a, b]$ y $f(a)$ y $f(b)$ tienen signos contrarios, entonces existe al menos un valor $p \in (a, b)$ tal que $f(p) = 0$.

### Algoritmo

Se calcula el punto medio $p$ en cada iteración:

$$
p = \frac{a+b}{2}
$$

Es un tipo de búsqueda binaria que garantiza convergencia si se cumple la condición inicial de signos.
