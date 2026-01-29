---
title: Integración de Roomberg
---
# Integración de Roomberg

La integración de Roomberg es una técnica de **extrapolación** basada en la regla trapezoidal compuesta. Su objetivo es reducir drásticamente el término de error.

Partiendo de la regla trapezoidal con error $O(h^2)$:
$$ \int_a^b f(x) \; dx = \text{Trapecio}(h) + K_1h^2 + K_2h^4 + K_3h^6 + \dots $$

Roomberg elimina sistemáticamente estos términos de error ($h^2, h^4, \dots$) combinando refinamientos previos.

### Algoritmo

Definimos una matriz $R_{K, j}$ donde $K$ representa el nivel de refinamiento ($n = 2^{K-1}$ subintervalos) y $j$ es el orden de la extrapolación.

1. **Primera columna ($j=1$)**: Se calcula aplicando la Regla Trapezoidal Compuesta con $n=2^{K-1}$ tramos:
   $$ R_{K, 1} = \frac{h_K}{2}\left[f(a) + 2\sum_{i = 1}^{n-1}f(x_i) + f(b)\right] $$

2. **Columnas siguientes ($j > 1$)**: Se aplica la relación recursiva de Roomberg:
   $$ R_{K, j} = R_{K, j-1} + \frac{1}{4^{j-1}-1}\left(R_{K, j-1} - R_{K-1, j-1}\right) $$

### Tabla de Roomberg

| $j \rightarrow$ | 1 (Trapecio) | 2 (Simpson) | 3 (Boole) |
| --- | --- | --- | --- |
| $K=1$ ($n=1$) | $R_{1,1}$ | | |
| $K=2$ ($n=2$) | $R_{2,1}$ | $R_{2,2}$ | |
| $K=3$ ($n=4$) | $R_{3,1}$ | $R_{3,2}$ | $R_{3,3}$ |
| $K=4$ ($n=8$) | $R_{4,1}$ | $R_{4,2}$ | $R_{4,3}$ |

Cada valor $R_{K, j}$ ofrece una precisión mayor al nivel anterior.
