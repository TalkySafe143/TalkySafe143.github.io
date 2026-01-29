---
title: Trapezoidal Rule
---
# Trapezoidal Rule

The trapezoidal rule approximates the area under a curve using a trapezoid that connects the endpoints $(a, f(a))$ and $(b, f(b))$.

### Derivation (2 points)

Let $x_0 = a, x_1 = b$ and $h = b-a$. Using first-degree Lagrange polynomials:

$$ f(x) = f(x_0)L_0(x) + f(x_1)L_1(x) + \frac{(x-x_0)(x-x_1)}{2}f^{\prime\prime}(\xi) $$

Integrating over $[x_0, x_1]$:

$$ \int_{x_0}^{x_1} f(x) dx = \int_{x_0}^{x_1} \left[ f(x_0)\frac{x-x_1}{x_0-x_1} + f(x_1)\frac{x-x_0}{x_1-x_0} \right] dx + \int_{x_0}^{x_1} \text{error} \; dx $$

1. **Polynomial Part**:
   $$ \int_{x_0}^{x_1} P_1(x) dx = \frac{h}{2}[f(x_0) + f(x_1)] $$

2. **Error Term**:
   $$ \int_{x_0}^{x_1} \frac{(x-x_0)(x-x_1)}{2}f^{\prime\prime}(\xi) dx = -\frac{h^3}{12}f^{\prime\prime}(\xi) $$

### Final Formula

$$ \int_{a}^{b} f(x) \; dx = \frac{h}{2}[f(a) + f(b)] - \frac{h^3}{12}f^{\prime\prime}(\xi) $$
