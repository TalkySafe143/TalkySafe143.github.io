---
title: Higher-Order Equations
---
# Higher-Order Equations

Any $n$-th order differential equation can be transformed into a system of $n$ first-order differential equations.

### Transformation Procedure

Given an $n$-th order equation:
$$ y^{(n)} = f(t, y, y^\prime, \dots, y^{(n-1)}) $$

Define auxiliary variables:
- $u_1(t) = y(t)$
- $u_2(t) = y^\prime(t) = u_1^\prime(t)$
- $u_3(t) = y^{\prime\prime}(t) = u_2^\prime(t)$
- $\dots$
- $u_n^\prime(t) = f(t, u_1, u_2, \dots, u_n)$

??? example "Example"

    Given the second-order equation:
    $$ y^{\prime\prime} - 2y^\prime + 2y = e^{2t} \sin(t) $$
    with $y(0) = -0.4, y^\prime(0) = -0.6$.
    
    1. **Variables**:
       - $u_1 = y$
       - $u_2 = y^\prime$
       
    2. **Resulting System**:
       $$ \begin{cases} u_1^\prime = u_2 & u_1(0) = -0.4 \\ u_2^\prime = e^{2t} \sin(t) + 2u_2 - 2u_1 & u_2(0) = -0.6 \end{cases} $$
       
    This system can now be solved using Euler or Runge-Kutta methods.
