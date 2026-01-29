---
title: Convergencia de Aitken
---
# Convergencia acelerada de $\Delta^2$ Aitken

Suponga que $\{x_n\}_{n=0}^{\infty}$ es una sucesión convergente a $x_r$ (como el resultado de iteraciones de punto fijo). Podemos construir una nueva sucesión $\{\hat{x}_n\}_{n=0}^{\infty}$ que converja más rápido.

Asumiendo que los errores sucesivos $x_n - x_r$ mantienen una proporción aproximada, se establece que:

$$
\frac{x_{n+1}-x_r}{x_n - x_r} \approx \frac{x_{n+2}-x_r}{x_{n+1}-x_r}
$$

### Derivación de la fórmula

1. Multiplicamos cruzado:
   $$ (x_{n+1}-x_r)^2 \approx (x_n-x_r)(x_{n+2}-x_r) $$

2. Expandimos y despejamos $x_r$:
   $$ x_{n+1}^2 - 2x_{n+1}x_r + x_r^2 \approx x_n x_{n+2} - x_r(x_n + x_{n+2}) + x_r^2 $$
   $$ x_r(x_n + x_{n+2} - 2x_{n+1}) \approx x_n x_{n+2} - x_{n+1}^2 $$
   $$ x_r \approx \frac{x_{n+2}x_n - x_{n+1}^2}{x_{n+2}-2x_{n+1}+x_{n}} $$

3. Manipulamos algebraicamente sumando y restando terminos para simplificar:
   $$ x_r \approx 
   \frac{
   x_{n+2}x_n - 2x_{n+1}x_n + x_n^2  - (x_{n+1}^2 - 2x_{n+1}x_n + x_n^2)}{x_{n+2}-2x_{n+1}+x_{n}} $$
   $$ x_r \approx 
   \frac{
   x_n(x_{n+2} - 2x_{n+1} + x_n)}{x_{n+2}-2x_{n+1}+x_{n}} -
   \frac{(x_{n+1} - x_n)^2}{x_{n+2}-2x_{n+1}+x_{n}} $$

Llegamos a la fórmula final:

$$
x_r \approx x_n - \frac{(x_{n+1} - x_n)^2}{x_{n+2}-2x_{n+1}+x_{n}}
$$

Este método permite "lanzar" la aproximación mucho más cerca de la raíz usando tres puntos consecutivos de una sucesión convergente lenta (como punto fijo).
