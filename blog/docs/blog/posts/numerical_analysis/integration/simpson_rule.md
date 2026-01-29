---
title: Reglas de Simpson y Boole
---
# Reglas de Simpson e Integración de Orden Superior

Estas reglas utilizan polinomios de mayor grado para aproximar la integral con mayor precisión.

### Regla de Simpson (1/3) - 3 puntos

Se basa en interpolación parabólica. Sean $x_0=a, x_1=a+h, x_2=a+2h=b$, donde $h = (b-a)/2$.

**Derivación**:
Usando Taylor centrado en $x_1$ e integrando:
$$ \int_{x_0}^{x_2} f(x) dx = \frac{h}{3}[f(x_0) + 4f(x_1) + f(x_2)] - \frac{h^5}{90}f^{(4)}(\xi) $$

---

### Simpson 3/8 (4 puntos)

$$ \int_{x_0}^{x_3} f(x) dx = \frac{3h}{8}[f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)] $$

---

### Regla de Boole (5 puntos)

$$ \int_{x_0}^{x_4} f(x) dx = \frac{2h}{45}[7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)] $$

---

### Fórmula de 6 puntos

$$ \int_{x_0}^{x_5} f(x) dx = \frac{5h}{288}[19f(x_0) + 75f(x_1) + 50f(x_2) + 50f(x_3) + 75f(x_4) + 19f(x_5)] $$
