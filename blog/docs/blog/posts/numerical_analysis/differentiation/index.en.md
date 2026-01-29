---
title: Numerical Differentiation
---
# Numerical Differentiation

Numerical differentiation aims to approximate the derivative of a function using discrete values.

### Simple Differences

Based on the limit definition:
$$
f^\prime(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} -\frac{h}{2}f^{\prime\prime}(\xi(x)) \tag{Forward difference}
$$

When $h > 0$, it is a forward difference; if $h < 0$, it is a backward difference.

---

### 3-Point Formulas

Assume nodes $x_0, x_1, x_2$ with constant spacing $h$ ($x_j = x_0 + jh$).

- **3-point endpoint (Forward)**:
  $$ f^\prime(x_0) = \frac{1}{2h}\left[-3f(x_0)+4f(x_1) - f(x_2)\right] + \frac{h^2}{3}f^{\prime\prime\prime}(\xi) $$

- **3-point midpoint**:
  $$ f^\prime(x_0) = \frac{1}{2h}[f(x_0 + h) - f(x_0 - h)] - \frac{h^2}{6}f^{\prime\prime\prime}(\xi) $$

- **3-point endpoint (Backward)**:
  $$ f^\prime(x_0) = \frac{1}{2h}[3f(x_0)-4f(x_{-1}) + f(x_{-2})] + \frac{h^2}{3}f^{\prime\prime\prime}(\xi) $$

---

### 5-Point Formulas

- **5-point midpoint**:
  $$ f^\prime(x_0) = \frac{1}{12h}[f(x_0 - 2h) - 8f(x_0 -h) + 8f(x_0 + h) - f(x_0 + 2h)]+\frac{h^4}{30}f^5(\xi) $$

- **5-point forward**:
  $$ f^\prime(x_0) = \frac{1}{12h}[-25f(x_0) + 48f(x_0 + h) - 36f(x_0 + 2h) + 16f(x_0 + 3h) - 3f(x_0 + 4h)] + \frac{h^4}{5}f^5(\xi) $$

---

### Second Derivative (3-point midpoint)

$$ f^{\prime\prime}(x_0) = \frac{1}{h^2}[f(x_0 - h) - 2f(x_0) + f(x_0 + h)] - \frac{h^2}{24}f^{4}(\xi) $$
