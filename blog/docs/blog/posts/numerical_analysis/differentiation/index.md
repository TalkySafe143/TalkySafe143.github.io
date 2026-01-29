---
title: Diferenciación Numérica
---
# Diferenciación numérica

La diferenciación numérica busca aproximar el valor de la derivada de una función usando valores discretos de la misma.

### Diferencias Simples

A partir de la definición de límite, podemos aproximar:
$$
f^\prime(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} -\frac{h}{2}f^{\prime\prime}(\xi(x)) \tag{Diferencia hacia adelante}
$$

Cuando $h > 0$ se denomina diferencia hacia adelante, y si $h < 0$, diferencia hacia atrás.

---

### Fórmulas de 3 puntos

Suponga nodos $x_0, x_1, x_2$ con espaciado constante $h$ ($x_j = x_0 + jh$).

- **3 puntos en el extremo (Adelante)**:
  $$ f^\prime(x_0) = \frac{1}{2h}\left[-3f(x_0)+4f(x_1) - f(x_2)\right] + \frac{h^2}{3}f^{\prime\prime\prime}(\xi) $$

- **3 puntos en el punto medio**:
  $$ f^\prime(x_0) = \frac{1}{2h}[f(x_0 + h) - f(x_0 - h)] - \frac{h^2}{6}f^{\prime\prime\prime}(\xi) $$

- **3 puntos en el extremo (Atrás)**:
  $$ f^\prime(x_0) = \frac{1}{2h}[3f(x_0)-4f(x_{-1}) + f(x_{-2})] + \frac{h^2}{3}f^{\prime\prime\prime}(\xi) $$

---

### Fórmulas de 5 puntos

- **5 puntos en el medio**:
  $$ f^\prime(x_0) = \frac{1}{12h}[f(x_0 - 2h) - 8f(x_0 -h) + 8f(x_0 + h) - f(x_0 + 2h)]+\frac{h^4}{30}f^5(\xi) $$

- **5 puntos hacia adelante**:
  $$ f^\prime(x_0) = \frac{1}{12h}[-25f(x_0) + 48f(x_0 + h) - 36f(x_0 + 2h) + 16f(x_0 + 3h) - 3f(x_0 + 4h)] + \frac{h^4}{5}f^5(\xi) $$

---

### Segunda Derivada (3 puntos punto medio)

$$ f^{\prime\prime}(x_0) = \frac{1}{h^2}[f(x_0 - h) - 2f(x_0) + f(x_0 + h)] - \frac{h^2}{24}f^{4}(\xi) $$
