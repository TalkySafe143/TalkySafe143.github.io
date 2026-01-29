---
title: Constante de Lipschitz
---
# Constante de Lipschitz y Existencia de Soluciones

Para que un problema de valor inicial (PVI) tenga una solución única, la función debe cumplir ciertas condiciones de regularidad.

### Definición

Sea $D = \{(t, y) : a \le t \le b, -\infty < y < \infty\}$. Si $f(t, y)$ es continua en $D$ y satisface la **Condición de Lipschitz** en la variable $y$:

$$ |f(t, y_1) - f(t, y_2)| \le L|y_1 - y_2| $$

donde $L$ es una constante positiva (Constante de Lipschitz), entonces el problema:
$$ y^\prime(t) = f(t, y), \quad a \le t \le b, \quad y(a) = \alpha $$
tiene una **única solución**.

Si $f$ tiene derivadas parciales, se puede estimar $L$ mediante:
$$ L = \sup_{(t,y) \in D} \left| \frac{\partial f}{\partial y}(t, y) \right| $$
