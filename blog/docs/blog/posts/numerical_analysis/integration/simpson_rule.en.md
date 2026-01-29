---
title: Simpson and Boole Rules
---
# Simpson and Boole Rules (Higher-Order Integration)

These rules use higher-degree polynomials to approximate the integral with greater precision.

### Simpson's Rule (1/3) - 3 points

Based on parabolic interpolation. Let $x_0=a, x_1=a+h, x_2=a+2h=b$, where $h = (b-a)/2$.

**Derivation**:
Using Taylor expansion centered at $x_1$ and integrating:
$$ \int_{x_0}^{x_2} f(x) dx = \frac{h}{3}[f(x_0) + 4f(x_1) + f(x_2)] - \frac{h^5}{90}f^{(4)}(\xi) $$

---

### Simpson's 3/8 Rule (4 points)

$$ \int_{x_0}^{x_3} f(x) dx = \frac{3h}{8}[f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)] $$

---

### Boole's Rule (5 points)

$$ \int_{x_0}^{x_4} f(x) dx = \frac{2h}{45}[7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)] $$

---

### 6-Point Formula

$$ \int_{x_0}^{x_5} f(x) dx = \frac{5h}{288}[19f(x_0) + 75f(x_1) + 50f(x_2) + 50f(x_3) + 75f(x_4) + 19f(x_5)] $$
