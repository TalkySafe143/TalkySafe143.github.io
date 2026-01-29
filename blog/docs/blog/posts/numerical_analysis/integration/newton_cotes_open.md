---
title: Newton-Cotes Abierta
---
# Newton-Cotes Abierta

A diferencia de las fórmulas cerradas, las de Newton-Cotes abiertas no utilizan los extremos del intervalo $[a, b]$ como nodos de integración.

Sea $h = (b-a)/(n+2)$ y los nodos $x_i = a + (i+1)h$ para $i=0, \dots, n$.

### Fórmulas principales

- **$n = 0$ (Regla del Punto Medio)**:
  $$ \int_a^b f(x) dx = 2hf(x_0) $$
- **$n = 1$**:
  $$ \int_a^b f(x) dx = \frac{3}{2}h[f(x_0) + f(x_1)] $$
- **$n = 2$**:
  $$ \int_a^b f(x) dx = \frac{4}{3}h[2f(x_0) - f(x_1) + 2f(x_2)] $$
- **$n = 3$**:
  $$ \int_a^b f(x) dx = \frac{5}{24}h[11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)] $$
