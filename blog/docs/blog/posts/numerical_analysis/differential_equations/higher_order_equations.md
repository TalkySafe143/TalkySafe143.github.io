---
title: Ecuaciones de Orden Superior
---
# Ecuaciones de grado superior

Cualquier ecuación diferencial de orden $n$ puede ser transformada en un sistema de $n$ ecuaciones diferenciales de primer orden.

### Procedimiento de Transformación

Sea la ecuación de orden $n$:
$$ y^{(n)} = f(t, y, y^\prime, \dots, y^{(n-1)}) $$

Definimos las variables auxiliares:
- $u_1(t) = y(t)$
- $u_2(t) = y^\prime(t) = u_1^\prime(t)$
- $u_3(t) = y^{\prime\prime}(t) = u_2^\prime(t)$
- $\dots$
- $u_n^\prime(t) = f(t, u_1, u_2, \dots, u_n)$

??? example "Ejemplo"

    Sea la ecuación de segundo grado:
    $$ y^{\prime\prime} - 2y^\prime + 2y = e^{2t} \sin(t) $$
    con $y(0) = -0.4, y^\prime(0) = -0.6$.
    
    1. **Variables**:
       - $u_1 = y$
       - $u_2 = y^\prime$
       
    2. **Sistema resultante**:
       $$ \begin{cases} u_1^\prime = u_2 & u_1(0) = -0.4 \\ u_2^\prime = e^{2t} \sin(t) + 2u_2 - 2u_1 & u_2(0) = -0.6 \end{cases} $$
       
    Este sistema ya puede ser resuelto usando Euler o Runge-Kutta.
