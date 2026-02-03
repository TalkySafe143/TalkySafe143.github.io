---
title: Runge Kutta
tags: ['Análisis Numérico (Completo)']
---
Este metodo puede solucionar ecuaciones de cualquier orden, sin embargo, hasta el orden $4$  es medianamente facil de plantear.

### Metodo del punto medio

Este metodo produce un punto intermedio en las condiciones. En este caso se toma que $\omega_0 = \alpha$ donde $\alpha$ es la condición inicial. Luego podemos ver que para determinar los siguientes terminos se puede seguir:

$$
\omega_{i+1} = \omega_i + hf\left(t_i + \frac{h}{2}, \omega_i + \frac{h}{2}f\left(t_i, \omega_i\right)\right)
$$

Este metodo toma mas provecho de la función $f$ para poder tomar un paso intermedio para avanzar.

### Metodo de Euler modificado

En este caso, tenemos la misma condicion inicial $\omega_0 = \alpha$. Luego se puede calcular los siguientes terminos donde:

$$
\omega_{i+1} = \omega_i + \frac{h}{2}\left[ f(t_i, \omega_i) + f(t_{i+1}, \omega_i + hf(t_i, \omega_i)) \right]
$$

### Runge Kutta de $4$to orden

De igual manera, se empieza $\omega_0 = \alpha$, entonces se puede construir los siguientes terminos de la forma:

$$
\omega_{i+1} = \omega_i + \frac{1}{6}(\kappa_1+ 2 \kappa_2 + 2\kappa_3 + \kappa_4)
$$

Donde cada uno de los $\kappa_i$ estan definidos por:

- $\kappa_1 = hf(t_i, \omega_i)$
- $\kappa_2 = hf\left(t_i + \frac{h}{2}, \omega_i + \frac{1}{2}\kappa_1\right)$
- $\kappa_3 = hf(t_i + \frac{h}{2}, \omega_i + \frac{1}{2}\kappa_2)$
- $\kappa_4 = hf(t_{i + 1}, \omega_i + \kappa_3)$
??? example "Ejemplo"
    
    Podemos tener la siguiente ecuacion diferencial
    
    $$
    y^\prime = ty + t^3
    $$
    
    Con las condiciones iniciales y los parametros teniendo:
    
    - $y(0) = 5$
    - $h = 0.5$
    - $0 \le t \le 2$
    
    Luego, tenemos que $\omega_0 = 5$ ya que es la condición inicial. Para cada uno de los $\kappa_i$ en esta iteración se puede computar de la siguiente manera:
    
    - $\kappa_1 = 0.5f(0, 5) \implies 0.5[0(5) + 0^3] = 0$
    - $\kappa_2 = 0.5f(0.25, 5) \implies 0.5[(0.25)(5) + 0.25^3] = 0.6328$
    - $\kappa_3 = 0.5f(0.25, 5.3164) \implies 0.5[(0.25)(5.3164) + 0.25^3] = 0.672$
    - $\kappa_4 = 0.5f(0.5, 5.672) \implies 0.5[(0.5)(5.672) + 0.5^3] = 1.4805$
    
    De esta manera, podemos ver que:
    
    $$
    \begin{align*}
    \omega_1 = 5 + \frac{1}{6}[0 + 2(0.6328) + 2(0.672) + 1.4805] = 5.681
    \end{align*}
    $$