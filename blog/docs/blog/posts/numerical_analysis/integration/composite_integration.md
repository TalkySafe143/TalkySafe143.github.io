---
title: Integración Compuesta
---
# Integración Numérica Compuesta

Cuando el intervalo $[a, b]$ es grande, las reglas simples (como Simpson o Trapecio) pueden ser imprecisas. La integración compuesta divide el intervalo en $n$ subintervalos de ancho $h = (b-a)/n$ y aplica la regla en cada uno.

### Regla Compuesta de Simpson (1/3)

Se divide el intervalo en un número par $n$ de subintervalos. Aplicando Simpson en cada par de tramos:

$$ \int_a^b f(x) \; dx = \frac{h}{3}\left[f(a) + 4\sum_{j = 1}^{n / 2}f(x_{2j-1}) + 2\sum_{j = 1}^{n/2-1}f(x_{2j}) + f(b)\right] $$

!!! abstract "Estructura"
    - El primer y último punto se suman una vez.
    - Los puntos impares ($x_1, x_3, \dots$) se multiplican por 4.
    - Los puntos pares internos ($x_2, x_4, \dots$) se multiplican por 2.

---

### Regla Compuesta Trapezoidal

$$ \int_a^b f(x) \; dx = \frac{h}{2}\left[f(a) + 2\sum_{j = 1}^{n-1}f(x_j) + f(b)\right] $$

---

### Regla Compuesta de Punto Medio

Requiere un número par de subintervalos $n$. Siendo $h = (b-a)/(n+2)$:
$$ \int_a^b f(x) \; dx = 2h \sum_{j=0}^{n/2} f(x_{2j}) $$
