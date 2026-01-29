---
title: Diferencias Divididas
---
# Diferencias divididas de Newton

Este método construye un polinomio de grado $n$ de forma recursiva. La forma general del polinomio es:

$$
P_n(x) = f[x_0] + \sum_{k = 1}^n \left( f[x_0, x_1, \dots, x_k] \prod_{i = 0}^{k-1}(x-x_i) \right)
$$

Expandido:
$$
\begin{align*}
P_n(x) = f[x_0] + f[x_0,x_1](x - x_0)+ f[x_0, x_1, x_2](x-x_0)(x - x_1) + \dots\\
+ f[x_0, x_1, \dots, x_n](x - x_0)\dots(x - x_{n-1})
\end{align*}
$$

### El árbol de diferencias

Para calcular los coeficientes, se construye una tabla (o árbol) donde cada nivel superior se deriva del anterior:

1. **Orden 0**: Son los valores de la función $f[x_0], f[x_1], \dots$
2. **Orden superiore (Unión de conjuntos)**: 
   Sea $S$ un conjunto de puntos. Para un nodo definido por el conjunto $S = \{x_i, \dots, x_j\}$, la diferencia dividida se calcula como:
   $$ f[S] = \frac{f[S \setminus \{x_i\}] - f[S \setminus \{x_j\}]}{x_j - x_i} $$

Por ejemplo, para dos puntos:
$$ f[x_0, x_1] = \frac{f[x_1] - f[x_0]}{x_1 - x_0} $$

Para tres puntos:
$$ f[x_0, x_1, x_2] = \frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0} $$

> Solo los valores de la "cima" del árbol ($f[x_0], f[x_0, x_1], \dots, f[x_0, \dots, x_n]$) se utilizan como coeficientes del polinomio.
