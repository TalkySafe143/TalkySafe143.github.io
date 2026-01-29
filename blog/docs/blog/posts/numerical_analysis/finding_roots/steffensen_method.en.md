---
title: Steffensen's Method
---
# Steffensen's Method

This method combines fixed-point iterations with Aitken's acceleration to find roots more quickly.

### Process Steps

1. Perform fixed-point iteration to obtain three consecutive terms: $x_n, x_{n+1}, x_{n+2}$.
2. Apply Aitken's acceleration formula to get a better approximation $\hat{x}$:
   $$ \hat{x} \approx x_n - \frac{(x_{n+1} - x_n)^2}{x_{n+2}-2x_{n+1}+x_{n}} $$
3. Take this $\hat{x}$ as the new "seed" (new $x_n$) and repeat the process from step 1.

This cycle allows for quadratic convergence, similar to Newton's method, but without needing to know the function's derivative.
