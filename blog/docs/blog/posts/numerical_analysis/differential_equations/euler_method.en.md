---
title: Euler's Method
---
# Euler's Method

Euler's method is the simplest algorithm for numerically solving first-order initial value problems (IVP).

### Concept

Given $\frac{dy}{dt} = f(t, y)$ with $y(a) = \alpha$, we divide the interval $[a, b]$ into $N$ steps of size $h = (b-a)/N$. We define the time steps as $t_i = a + ih$.

### Derivation (via Taylor)

Using the first-degree Taylor Theorem centered at $t_i$ and evaluated at $t_{i+1}$:

$$ y(t_{i+1}) = y(t_i) + y^\prime(t_i)(t_{i+1} - t_i) + \frac{h^2}{2}y^{\prime\prime}(\xi) $$

Since $t_{i+1} - t_i = h$ and $y^\prime = f(t, y)$, if we denote $\omega_i$ as the approximation of $y(t_i)$, we get:

$$ \omega_{i+1} = \omega_i + h f(t_i, \omega_i) $$

!!! abstract "Geometric Interpretation"
    Euler's method moves along the tangent line of the curve at each point. Since the tangent changes, a global truncation error of order $O(h)$ accumulates.
