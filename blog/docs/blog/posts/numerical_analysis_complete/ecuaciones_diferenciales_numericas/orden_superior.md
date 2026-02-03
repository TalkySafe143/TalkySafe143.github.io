---
title: Orden superior
tags: ['Análisis Numérico (Completo)']
---
Suponga que se tiene una ecuacion de $n$ grado, en este caso $n = 2$ y se tiene la siguiente ecuación:

$$
y^{\prime\prime} - 2y^\prime +2y = e^{2t}\sin t
$$

- $0 \le t \le 1$
- $y(0) = -0.4$
- $y^\prime(0) = -0.6$

Para resolverlo numericamente, se puede asumir que existen dos funciones:

- $u_1(t) = y(t)$
- $u_2(t) = y^\prime(t) = u_1^\prime(t)$
- $u_2^\prime(t) = y^{\prime\prime}(t)$

Entonces podemos ver que:

$$
\begin{cases}
u_1^\prime = u_2(t) &u_1(0) = -0.4\\
u_2^\prime = e^{2t}\sin t + 2u_2(t) - 2u_1(t) &u_2(0) = -0.6
\end{cases}
$$

Ya con este sistema de ecuaciones, se puede solucionar con el metodo que se mencionó anteriormente.