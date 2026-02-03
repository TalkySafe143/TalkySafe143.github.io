---
title: Método de Newton Raphson
tags: ['Análisis Numérico (Completo)']
---
Suponga que se tiene una función $f$, luego, queremos encontrar una raíz para la función, pero vamos a partir de cualquier punto, defina ese punto $(x_1, f(x_1))$, si se toma la derivada, podemos hallar la recta tangente a la función en el punto $x_1$.

Entonces, se puede tomar el corte de dicha linea tangente con el eje $x$ o cuando $y = 0$. Defina el punto de ese corte como $x_2$. Luego se vuelve a iterar con dicho punto.

En general, si tengo el punto $x_1$, la derivada en dicho punto va a dar información de la recta tangente a la función. El siguiente punto en la iteración va a ser el corte de la recta tangente con $y = 0$.

En realidad, podemos ver que satisface la siguiente formula:

$$
x_i = x_{i-1} - \frac{f(x_{i-1})}{f^\prime(x_{i-1})}
$$

Note que la derivada tiene que ser $\neq 0$ para que se pueda iterar. En el caso en el que las iteraciones traten de tirar el punto $x$ hacía algún otro punto donde la derivada es igual a $=0$. 

En realidad la formula deriva de despejar cuando se hace el polinomio de Taylor en primer grado.