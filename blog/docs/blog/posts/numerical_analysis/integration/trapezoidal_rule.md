---
title: Regla Trapezoidal
---
# Regla Trapezoidal

La regla trapezoidal aproxima el área bajo la curva mediante un trapecio que une los puntos extremos $(a, f(a))$ y $(b, f(b))$.

### Derivación (2 puntos)

Sea $x_0 = a, x_1 = b$ y el salto $h = b-a$. Usando polinomios de Lagrange de primer grado:

$$ f(x) = f(x_0)L_0(x) + f(x_1)L_1(x) + \frac{(x-x_0)(x-x_1)}{2}f^{\prime\prime}(\xi) $$

Al integrar en $[x_0, x_1]$:

$$ \int_{x_0}^{x_1} f(x) dx = \int_{x_0}^{x_1} \left[ f(x_0)\frac{x-x_1}{x_0-x_1} + f(x_1)\frac{x-x_0}{x_1-x_0} \right] dx + \int_{x_0}^{x_1} \text{error} \; dx $$

1. **Parte polinómica**:
   $$ \int_{x_0}^{x_1} P_1(x) dx = \frac{h}{2}[f(x_0) + f(x_1)] $$

2. **Término de error**:
   $$ \int_{x_0}^{x_1} \frac{(x-x_0)(x-x_1)}{2}f^{\prime\prime}(\xi) dx = -\frac{h^3}{12}f^{\prime\prime}(\xi) $$

### Fórmula Final

$$ \int_{a}^{b} f(x) \; dx = \frac{h}{2}[f(a) + f(b)] - \frac{h^3}{12}f^{\prime\prime}(\xi) $$
