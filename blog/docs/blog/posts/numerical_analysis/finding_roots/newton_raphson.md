---
title: Newton Raphson
---
# Método de Newton-Raphson

Suponga que se tiene una función $f$. Queremos encontrar una raíz, partiendo de un punto inicial $x_0$. Si tomamos la derivada, podemos hallar la recta tangente a la función en el punto $(x_i, f(x_i))$.

El siguiente punto en la iteración ($x_{i+1}$) es la intersección de dicha recta tangente con el eje $x$ ($y=0$).

### Derivación

A partir del polinomio de Taylor de primer grado:
$$
f(x) \approx f(x_i) + f^\prime(x_i)(x - x_i)
$$

Si buscamos la raíz $f(x) = 0$:
$$
0 = f(x_i) + f^\prime(x_i)(x_{i+1} - x_i) \implies x_{i+1} = x_i - \frac{f(x_i)}{f^\prime(x_i)}
$$

!!! warning "Limitación"
    La derivada $f^\prime(x_i)$ debe ser distinta de cero. Si las iteraciones se acercan a un punto donde la pendiente es nula, el método falla.
