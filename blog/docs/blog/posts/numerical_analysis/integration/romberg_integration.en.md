---
title: Romberg Integration
---
# Romberg Integration

Romberg integration is an **extrapolation** technique based on the composite trapezoidal rule. Its primary goal is to drastically reduce the error term.

Starting from the trapezoidal rule with error $O(h^2)$:
$$ \int_a^b f(x) \; dx = \text{Trapezoid}(h) + K_1h^2 + K_2h^4 + K_3h^6 + \dots $$

Romberg systematically eliminates these error terms ($h^2, h^4, \dots$) by combining previous refinements.

### Algorithm

We define an $R_{K, j}$ matrix where $K$ represents the level of refinement ($n = 2^{K-1}$ subintervals) and $j$ is the order of extrapolation.

1. **First Column ($j=1$)**: Computed using the Composite Trapezoidal Rule with $n=2^{K-1}$ segments:
   $$ R_{K, 1} = \frac{h_K}{2}\left[f(a) + 2\sum_{i = 1}^{n-1}f(x_i) + f(b)\right] $$

2. **Subsequent Columns ($j > 1$)**: The Roomberg recursive relationship is applied:
   $$ R_{K, j} = R_{K, j-1} + \frac{1}{4^{j-1}-1}\left(R_{K, j-1} - R_{K-1, j-1}\right) $$

### Romberg Table

| $j \rightarrow$ | 1 (Trapezoid) | 2 (Simpson) | 3 (Boole) |
| --- | --- | --- | --- |
| $K=1$ ($n=1$) | $R_{1,1}$ | | |
| $K=2$ ($n=2$) | $R_{2,1}$ | $R_{2,2}$ | |
| $K=3$ ($n=4$) | $R_{3,1}$ | $R_{3,2}$ | $R_{3,3}$ |
| $K=4$ ($n=8$) | $R_{4,1}$ | $R_{4,2}$ | $R_{4,3}$ |

Each value $R_{K, j}$ provides a higher order of accuracy than the previous level.
