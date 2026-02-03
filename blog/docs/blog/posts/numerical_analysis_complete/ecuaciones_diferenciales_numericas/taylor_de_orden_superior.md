---
title: Taylor de Orden Superior
tags: ['Análisis Numérico (Completo)']
---
De igual manera, si tenemos que $\omega_0 = \alpha$ podemos definir:

$$
\omega_{i+1} = \omega_i + hT^2(t_i, \omega_i)
$$

Donde $T^n$ esta definido de la forma:

$$
T^n(t_i, \omega_i) = \underbrace{f(t_i, \omega_i)}_{n=1 \text{ Euler}} + \frac{h}{2}f^\prime(t_i, \omega_i) + \dots+\frac{h^{n-1}}{n!}f^{n-1}(t_i, w_i)
$$