---
title: Open Newton-Cotes
---
# Open Newton-Cotes Formulas

Unlike closed formulas, open Newton-Cotes formulas do not use the interval endpoints $[a, b]$ as integration nodes.

Let $h = (b-a)/(n+2)$ and nodes $x_i = a + (i+1)h$ for $i=0, \dots, n$.

### Main Formulas

- **$n = 0$ (Midpoint Rule)**:
  $$ \int_a^b f(x) dx = 2hf(x_0) $$
- **$n = 1$**:
  $$ \int_a^b f(x) dx = \frac{3}{2}h[f(x_0) + f(x_1)] $$
- **$n = 2$**:
  $$ \int_a^b f(x) dx = \frac{4}{3}h[2f(x_0) - f(x_1) + 2f(x_2)] $$
- **$n = 3$**:
  $$ \int_a^b f(x) dx = \frac{5}{24}h[11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)] $$
