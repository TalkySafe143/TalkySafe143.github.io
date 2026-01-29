---
title: Divided Differences
---
# Newton's Divided Differences

This method constructs a degree $n$ polynomial recursively. The general form of the polynomial is:

$$
P_n(x) = f[x_0] + \sum_{k = 1}^n \left( f[x_0, x_1, \dots, x_k] \prod_{i = 0}^{k-1}(x-x_i) \right)
$$

Expanded:
$$
\begin{align*}
P_n(x) = f[x_0] + f[x_0,x_1](x - x_0)+ f[x_0, x_1, x_2](x-x_0)(x - x_1) + \dots\\
+ f[x_0, x_1, \dots, x_n](x - x_0)\dots(x - x_{n-1})
\end{align*}
$$

### The Difference Tree

To calculate the coefficients, a table (or tree) is constructed where each higher order is derived from the previous one:

1. **Order 0**: These are the function values $f[x_0], f[x_1], \dots$
2. **Higher Order (Union of Sets)**: 
   Let $S$ be a set of points. For a node defined by the set $S = \{x_i, \dots, x_j\}$, the divided difference is calculated as:
   $$ f[S] = \frac{f[S \setminus \{x_i\}] - f[S \setminus \{x_j\}]}{x_j - x_i} $$

For example, for two points:
$$ f[x_0, x_1] = \frac{f[x_1] - f[x_0]}{x_1 - x_0} $$

For three points:
$$ f[x_0, x_1, x_2] = \frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0} $$

> Only the values at the "top" of the tree ($f[x_0], f[x_0, x_1], \dots, f[x_0, \dots, x_n]$) are used as polynomial coefficients.
