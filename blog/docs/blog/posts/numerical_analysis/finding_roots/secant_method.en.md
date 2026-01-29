---
title: Secant Method
---
# Secant Method

By drawing a secant line between points $(x_{n-1}, f(x_{n-1}))$ and $(x_n, f(x_n))$, we can find where this line intersects the $x$-axis.

This method approximates the derivative in Newton-Raphson using the slope of the secant line:

$$
f^\prime (x_n) \approx \frac{f(x_n) - f(x_{n-1})}{x_n - x_{n-1}}
$$

Substituting into the Newton-Raphson formula:

$$
x_{n+1} = x_n - \frac{f(x_n)(x_n - x_{n-1})}{f(x_n) - f(x_{n-1})}
$$

!!! info "Pros and Cons"
    - **Advantage**: It does not require calculating the derivative of the function.
    - **Disadvantage**: It requires two initial points to start.

??? example "Example"

    For $f(x) = x^3 + x - 1$ with $x_0 = 0$ and $x_1 = 1$:
    
    $$
    x_2 = 1 - \frac{f(1)(1 - 0)}{f(1)-f(0)} = 1 - \frac{1(1)}{1 - (-1)} = 0.5
    $$
    
    $$
    x_3 = 0.5 - \frac{f(0.5)(0.5 - 1)}{f(0.5)-f(1)} \approx 0.636
    $$
