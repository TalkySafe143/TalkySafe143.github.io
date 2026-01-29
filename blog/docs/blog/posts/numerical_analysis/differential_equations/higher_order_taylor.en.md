---
title: Higher-Order Taylor
---
# Higher-Order Taylor Methods

To improve the accuracy of Euler's method, we can include more terms from the Taylor expansion of $y(t)$.

### Definition

If $y(a) = \alpha$, we define the iteration:

$$ \omega_{i+1} = \omega_i + h T^{(n)}(t_i, \omega_i) $$

where $T^{(n)}$ is the Taylor function of order $n$:

$$ T^{(n)}(t_i, \omega_i) = f(t_i, \omega_i) + \frac{h}{2!}f^\prime(t_i, \omega_i) + \frac{h^2}{3!}f^{\prime\prime}(t_i, \omega_i) + \dots + \frac{h^{n-1}}{n!}f^{(n-1)}(t_i, \omega_i) $$

!!! info "Derivatives of $f(t, y)$"
    Derivatives $f^\prime, f^{\prime\prime}, \dots$ must be calculated using the chain rule, since $y$ depends on $t$:
    $$ f^\prime(t, y) = \frac{df}{dt} = \frac{\partial f}{\partial t} + \frac{\partial f}{\partial y} y^\prime = \frac{\partial f}{\partial t} + \frac{\partial f}{\partial y} f(t, y) $$

A higher order $n$ results in a smaller step error ($O(h^n)$), but computational complexity increases due to the derivatives.
