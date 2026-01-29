---
title: Taylor de Orden Superior
---
# Métodos de Taylor de Orden Superior

Para mejorar la precisión del método de Euler, podemos incluir más términos de la expansión de Taylor de la función $y(t)$.

### Definición

Si $y(a) = \alpha$, definimos la iteración:

$$ \omega_{i+1} = \omega_i + h T^{(n)}(t_i, \omega_i) $$

donde $T^{(n)}$ es la función de Taylor de orden $n$:

$$ T^{(n)}(t_i, \omega_i) = f(t_i, \omega_i) + \frac{h}{2!}f^\prime(t_i, \omega_i) + \frac{h^2}{3!}f^{\prime\prime}(t_i, \omega_i) + \dots + \frac{h^{n-1}}{n!}f^{(n-1)}(t_i, \omega_i) $$

!!! info "Derivadas de $f(t, y)$"
    Las derivadas $f^\prime, f^{\prime\prime}, \dots$ deben calcularse usando la regla de la cadena, ya que $y$ depende de $t$:
    $$ f^\prime(t, y) = \frac{df}{dt} = \frac{\partial f}{\partial t} + \frac{\partial f}{\partial y} y^\prime = \frac{\partial f}{\partial t} + \frac{\partial f}{\partial y} f(t, y) $$

A mayor orden $n$, menor es el error por paso ($O(h^n)$), pero la complejidad computacional aumenta debido a las derivadas.
