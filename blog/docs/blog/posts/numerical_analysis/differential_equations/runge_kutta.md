---
title: Métodos de Runge-Kutta
---
# Métodos de Runge-Kutta

Los métodos de Runge-Kutta logran la precisión de los métodos de Taylor pero sin necesidad de calcular derivadas de alto orden explícitamente. En su lugar, realizan múltiples evaluaciones de la función $f(t, y)$ en puntos intermedios.

### Método del Punto Medio (RK2)

Calcula un paso intermedio para estimar la pendiente:
$$ \omega_{i+1} = \omega_i + h f\left(t_i + \frac{h}{2}, \omega_i + \frac{h}{2}f(t_i, \omega_i)\right) $$

---

### Método de Euler Modificado

Promedia la pendiente del inicio y del final del intervalo:
$$ \omega_{i+1} = \omega_i + \frac{h}{2}\left[ f(t_i, \omega_i) + f(t_{i+1}, \omega_i + hf(t_i, \omega_i)) \right] $$

---

### Runge-Kutta de 4to Orden (RK4)

Es el estándar de la industria por su balance entre costo y precisión $O(h^4)$.

$$ \omega_{i+1} = \omega_i + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4) $$

Donde:
- $k_1 = h f(t_i, \omega_i)$ (Pendiente al inicio)
- $k_2 = h f(t_i + \frac{h}{2}, \omega_i + \frac{1}{2}k_1)$ (Pendiente en el punto medio usando $k_1$)
- $k_3 = h f(t_i + \frac{h}{2}, \omega_i + \frac{1}{2}k_2)$ (Pendiente en el punto medio usando $k_2$)
- $k_4 = h f(t_{i+1}, \omega_i + k_3)$ (Pendiente al final usando $k_3$)

??? example "Ejemplo paso a paso"

    Resolver $y^\prime = ty + t^3$ con $y(0)=5, h=0.5$ en $[0, 2]$.
    $\omega_0 = 5$. 
    
    1. **Iteración 1**:
       - $k_1 = 0.5[0(5) + 0^3] = 0$
       - $k_2 = 0.5[(0.25)(5) + 0.25^3] \approx 0.6328$
       - $k_3 = 0.5[(0.25)(5+0.3164) + 0.25^3] \approx 0.672$
       - $k_4 = 0.5[(0.5)(5.672) + 0.5^3] \approx 1.4805$
       - $\omega_1 = 5 + \frac{1}{6}[0 + 2(0.6328) + 2(0.672) + 1.4805] = 5.681$
