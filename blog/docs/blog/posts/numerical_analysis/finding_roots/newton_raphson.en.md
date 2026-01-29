---
title: Newton-Raphson
---
# Newton-Raphson Method

Suppose we have a function $f$. We want to find a root, starting from an initial point $x_0$. If we take the derivative, we can find the tangent line to the function at the point $(x_i, f(x_i))$.

The next point in the iteration ($x_{i+1}$) is the intersection of that tangent line with the $x$-axis ($y=0$).

### Derivation

From the first-degree Taylor polynomial:
$$
f(x) \approx f(x_i) + f^\prime(x_i)(x - x_i)
$$

Solving for $f(x) = 0$:
$$
0 = f(x_i) + f^\prime(x_i)(x_{i+1} - x_i) \implies x_{i+1} = x_i - \frac{f(x_i)}{f^\prime(x_i)}
$$

!!! warning "Limitation"
    The derivative $f^\prime(x_i)$ must be non-zero. If the iterations approach a point where the slope is zero, the method fails.
