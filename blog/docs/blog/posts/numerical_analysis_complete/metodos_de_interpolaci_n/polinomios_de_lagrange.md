---
title: Polinomios de Lagrange
tags: ['Análisis Numérico (Completo)']
---
Los polinomios de Lagrange definen una forma de construir un polinomio de grado $n$ a partir de $n+1$ puntos disponibles para cada $1 \le k <n$

$$
L_k = \prod\limits_{\substack{i=0 \\ i \neq k}}^n\frac{{(x-x_i)}}{{(x_k-x_i)}}
$$

??? example "Analogía"
    
    Se puede ver como multiplicar todos los $(x - x_i)$ sin incluir $(x - x_k)$ para $L_k$
    

Luego podemos definir el polinomio como:

$$
P_n(x) = \sum_{i = 0}^n f(x_i)L_i
$$