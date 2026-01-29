---
title: Método de Euler
---
# Método de Euler

El método de Euler es el algoritmo más simple para resolver numéricamente problemas de valor inicial (PVI) de primer orden.

### Concepto

Dada la ecuación $\frac{dy}{dt} = f(t, y)$ con $y(a) = \alpha$, dividimos el intervalo $[a, b]$ en $N$ pasos de tamaño $h = (b-a)/N$. Definimos los tiempos de cada paso como $t_i = a + ih$.

### Derivación (vía Taylor)

Usando el Teorema de Taylor de primer grado centrado en $t_i$ y evaluado en $t_{i+1}$:

$$ y(t_{i+1}) = y(t_i) + y^\prime(t_i)(t_{i+1} - t_i) + \frac{h^2}{2}y^{\prime\prime}(\xi) $$

Como $t_{i+1} - t_i = h$ y $y^\prime = f(t, y)$, si llamamos $\omega_i$ a la aproximación de $y(t_i)$, obtenemos:

$$ \omega_{i+1} = \omega_i + h f(t_i, \omega_i) $$

!!! abstract "Interpretación Geométrica"
    El método de Euler avanza a lo largo de la recta tangente de la curva en cada punto. Como la tangente cambia, se acumula un error de truncamiento global de orden $O(h)$.
