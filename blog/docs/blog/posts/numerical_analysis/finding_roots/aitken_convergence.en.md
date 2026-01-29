---
title: Aitken's Convergence
---
# Aitken's $\Delta^2$ Accelerated Convergence

Suppose $\{x_n\}_{n=0}^{\infty}$ is a sequence converging to $x_r$ (such as the result of fixed-point iterations). we can construct a new sequence $\{\hat{x}_n\}_{n=0}^{\infty}$ that converges faster.

Assuming successive errors $x_n - x_r$ maintain an approximate ratio:

$$
\frac{x_{n+1}-x_r}{x_n - x_r} \approx \frac{x_{n+2}-x_r}{x_{n+1}-x_r}
$$

### Formula Derivation

1. Cross-multiply:
   $$ (x_{n+1}-x_r)^2 \approx (x_n-x_r)(x_{n+2}-x_r) $$

2. Expand and solve for $x_r$:
   $$ x_{n+1}^2 - 2x_{n+1}x_r + x_r^2 \approx x_n x_{n+2} - x_r(x_n + x_{n+2}) + x_r^2 $$
   $$ x_r(x_n + x_{n+2} - 2x_{n+1}) \approx x_n x_{n+2} - x_{n+1}^2 $$
   $$ x_r \approx \frac{x_{n+2}x_n - x_{n+1}^2}{x_{n+2}-2x_{n+1}+x_{n}} $$

3. Algebraic manipulation (adding and subtracting terms) to simplify:
   $$ x_r \approx 
   \frac{
   x_{n+2}x_n - 2x_{n+1}x_n + x_n^2  - (x_{n+1}^2 - 2x_{n+1}x_n + x_n^2)}{x_{n+2}-2x_{n+1}+x_{n}} $$
   $$ x_r \approx 
   \frac{
   x_n(x_{n+2} - 2x_{n+1} + x_n)}{x_{n+2}-2x_{n+1}+x_{n}} -
   \frac{(x_{n+1} - x_n)^2}{x_{n+2}-2x_{n+1}+x_{n}} $$

Final formula:

$$
x_r \approx x_n - \frac{(x_{n+1} - x_n)^2}{x_{n+2}-2x_{n+1}+x_{n}}
$$

This method "projects" the approximation much closer to the root using three consecutive points from a slowly converging sequence.
