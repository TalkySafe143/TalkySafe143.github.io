---
title: Sistemas de Ecuaciones
---
# Sistemas de Ecuaciones Diferenciales

Un sistema de ecuaciones diferenciales consiste en un conjunto de ecuaciones donde cada una depende del tiempo $t$ y de las demás variables de estado.

$$
\begin{align*}
\frac{du_1}{dt} &= f_1(t, u_1, u_2, \dots, u_n) \\
&\vdots \\
\frac{du_n}{dt} &= f_n(t, u_1, u_2, \dots, u_n)
\end{align*}
$$

Con condiciones iniciales: $u_1(a) = \alpha_1, \dots, u_n(a) = \alpha_n$.

### Aplicación del Método de Euler Simple

Para resolver el sistema, aplicamos la fórmula de Euler a cada componente de forma paralela:

$$ \omega_{i+1, j} = \omega_{i, j} + h f_j(t_i, \omega_{i, 1}, \dots, \omega_{i, n}) $$

??? example "Ejemplo"

    Funciones:
    $$
    \begin{align*}
    y_1^\prime &= -0.5y_1 \\
    y_2^\prime &= 4 - 0.3y_2 - 0.1y_1
    \end{align*}
    $$
    
    Condiciones: $y_1(0)=4, y_2(0)=6, h=0.5$.
    
    1. **Paso 1 ($t=0$ a $t=0.5$)**:
       - $\omega_{1, 1} = 4 + 0.5[-0.5(4)] = 3$
       - $\omega_{1, 2} = 6 + 0.5[4 - 0.3(6) - 0.1(4)] = 6.9$
       
    2. **Paso 2 ($t=0.5$ a $t=1.0$)**:
       - $\omega_{2, 1} = 3 + 0.5[-0.5(3)] = 2.25$
       - $\omega_{2, 2} = 6.9 + 0.5[4 - 0.3(6.9) - 0.1(3)] = \dots$
