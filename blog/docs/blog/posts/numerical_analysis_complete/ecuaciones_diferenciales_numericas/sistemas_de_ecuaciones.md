---
title: Sistemas de ecuaciones
tags: ['Análisis Numérico (Completo)']
---
Conjunto de ecuaciones diferenciales donde cada una de las ecuaciones tienen una dependencia a las otras ecuaciones.

$$
\begin{align*}
\frac{du_1}{dt} &= f(t, u_1, u_2, \dots, u_n) \\
&\vdots \\
\frac{du_n}{dt} &= f(t, u_1, u_2, \dots, u_n)
\end{align*}
$$

Donde cada una de las condiciones iniciales son:

$$
u_1(a) = \alpha_1; u_2(a) = \alpha_2;\;  \dots ;\;u_n(a) = \alpha_n
$$

### Metodo de Euler simple

Teniendo en cuenta que la formula para Euler simple es:

$$
\omega_{i+1} = \omega_i + hf(t_i, \omega_i)
$$

Suponga que se tienen las siguientes funciones:

$$
\begin{align*}
y_1^\prime &= -0.5y_1 \\
y_2^\prime &= 4 - 0.3y_2 -0.1y_1
\end{align*}
$$

Con las condiciones iniciales:

- $0 \le t \le 2$
- $y_1(0) = 4$
- $y_2(0) = 6$
- $h = 0.5$

| Para $y_1$ | Para $y_2$ |
| --- | --- |
| $\omega_0 = 4$ | $\omega_0 = 6$ |
| $\omega_1 = \omega_0 + hf(t_0, \omega_0) \implies 4+ 0.5f(0, 4) \implies 4 + 0.5[-0.5(4)] = 3$ | $\omega_1 = \omega_0 + hf(t_0, \omega_0) \implies 6 + 0.5[4-0.3(6)-0.1(4)] = 6.9$

Note que en el caso de $y_1$ en esta ecuacion, se toma $\omega_{i}$ de la función correspondiente, en este caso $\omega_0 = 4$ |
| $\omega_2 = 3 + 0.5f(0.5, 3) \implies 3+ 0.5[-0.5(3)] = ?$ | $\omega_2 = 6.9 + 0.5f(0.5, 6.9) \implies 6.9 + 0.5[4-0.3(6.9) -0.1(3)] = ?$ |