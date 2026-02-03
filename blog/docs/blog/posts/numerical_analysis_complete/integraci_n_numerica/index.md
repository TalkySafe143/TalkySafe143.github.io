---
title: Integración numerica
tags: ['Análisis Numérico (Completo)']
---
Para algunas integrales, no existen soluciones analiticas y toca integrar numericamente. Podemos ver que:

$$
\int_a^b f(x)dx \approx \sum_{i = 1}^na_if(x_i)
$$

Donde preferíamos que $n = \infty$.

Sin embargo, podemos seleccionar a un conjunto de nodos que $\in [a, b]$ para podes construir una integral como un polinomio. El cual se puede ver con los polinomios de Lagrange o con polinomios de Taylor.