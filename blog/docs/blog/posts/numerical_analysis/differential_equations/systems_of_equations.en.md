---
title: Systems of Equations
---
# Systems of Differential Equations

A system of differential equations consists of a set of equations where each component depends on time $t$ and other state variables.

$$
\begin{align*}
\frac{du_1}{dt} &= f_1(t, u_1, u_2, \dots, u_n) \\
&\vdots \\
\frac{du_n}{dt} &= f_n(t, u_1, u_2, \dots, u_n)
\end{align*}
$$

With initial conditions: $u_1(a) = \alpha_1, \dots, u_n(a) = \alpha_n$.

### Application of simple Euler Method

To solve the system, we apply the Euler formula to each component in parallel:

$$ \omega_{i+1, j} = \omega_{i, j} + h f_j(t_i, \omega_{i, 1}, \dots, \omega_{i, n}) $$

??? example "Example"

    Functions:
    $$
    \begin{align*}
    y_1^\prime &= -0.5y_1 \\
    y_2^\prime &= 4 - 0.3y_2 - 0.1y_1
    \end{align*}
    $$
    
    Conditions: $y_1(0)=4, y_2(0)=6, h=0.5$.
    
    1. **Step 1 ($t=0$ to $t=0.5$)**:
       - $\omega_{1, 1} = 4 + 0.5[-0.5(4)] = 3$
       - $\omega_{1, 2} = 6 + 0.5[4 - 0.3(6) - 0.1(4)] = 6.9$
       
    2. **Step 2 ($t=0.5$ to $t=1.0$)**:
       - $\omega_{2, 1} = 3 + 0.5[-0.5(3)] = 2.25$
       - $\omega_{2, 2} = 6.9 + 0.5[4 - 0.3(6.9) - 0.1(3)] = \dots$
