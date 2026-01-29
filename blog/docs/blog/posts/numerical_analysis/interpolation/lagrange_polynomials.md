---
title: Polinomios de Lagrange
---
# Polinomios de Lagrange

Los polinomios de Lagrange definen una forma de construir un polinomio de grado $n$ a partir de $n+1$ puntos disponibles $(x_i, f(x_i))$.

Para cada punto $k$, el polinomio base $L_{n,k}$ se define como:

$$
L_{n,k}(x) = \prod\limits_{\substack{i=0 \\ i \neq k}}^n\frac{{(x-x_i)}}{{(x_k-x_i)}}
$$

!!! abstract "Analogía"

    Se puede ver como una fracción donde el numerador es el producto de todos los $(x - x_i)$ excepto para $i = k$, y el denominador es el mismo producto pero evaluado en $x = x_k$.

### El polinomio interpolador

Finalmente, el polinomio de grado $n$ se construye como la combinación lineal de los valores de la función y sus respectivos polinomios base:

$$
P_n(x) = \sum_{i = 0}^n f(x_i)L_{n,i}(x)
$$

Este polinomio garantiza que $P_n(x_i) = f(x_i)$ para todos los nodos dados.
