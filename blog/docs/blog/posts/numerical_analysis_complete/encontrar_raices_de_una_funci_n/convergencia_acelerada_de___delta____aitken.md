---
title: Convergencia acelerada de $\Delta^2$ Aitken
tags: ['Análisis Numérico (Completo)']
---
Suponga que $\left\{x_n\right\}_{0}^{\infty}$ es una sucesion convergente a $x_r$ (Resultado de las iteraciones de punto fijo). Se puede construir  una nueva sucesión $\left\{\hat{x}_n\right\}_{0}^{\infty}$ tal que converge más rápido.

Supongamos que $x_n-x_r, x_{n+1} - x_r$ y $x_{n+2}-x_r$ tienen el mismo signo y $n >>>$ (Es muy grande)

Se puede construir la relación de:

$$
\frac{x_{n+1}-x_r}{x_n - x_r} \approx \frac{x_{n+2}-x_r}{x_{n+1}-x_r}
$$

La idea de Aitken, es construir a partir de tres puntos, podemos construir $x_r$ para que este valor itere sobre una formula.

$$
\begin{align*}
\frac{x_{n+1}-x_r}{x_n - x_r} &\approx \frac{x_{n+2}-x_r}{x_{n+1}-x_r} \\
(x_{n+1}-x_r)(x_{n+1}-x_r)&\approx (x_n - x_r)(x_{n+2}-x_r)\\
x_r&\approx \frac{x_{n+2}x_n - x_{n+1}^2}{x_{n+2}-2x_{n+1}+x_{n}} \\
x_r&\approx 
\frac{
x_{n+2}x_n - x_{n+1}^2 + x_n^2-x_n^2+2x_{n+1}x_n
- 2x_{n+1}x_n}{x_{n+2}-2x_{n+1}+x_{n}} \\
x_r&\approx 
\frac{
x_{n+2}x_n - 2x_{n+1}x_n + x_n^2  - (x_{n+1}^2 - 2x_{n+1}x_n + x_n^2)}{x_{n+2}-2x_{n+1}+x_{n}} \\
x_r&\approx 
\frac{
x_n(x_{n+2} - 2x_{n+1} + x_n)}{x_{n+2}-2x_{n+1}+x_{n}} -
\frac{x_{n+1}^2 - 2x_{n+1}x_n + x_n^2}{x_{n+2}-2x_{n+1}+x_{n}} \\
x_r&\approx 
x_n -
\frac{(x_{n+1} - x_n)^2}{x_{n+2}-2x_{n+1}+x_{n}} \\
\end{align*}
$$

Si se recuerda el metodo de punto fijo, podemos tomar las primeras $3$ iteraciones como $x_n, x_{n+1}, x_{n+2}$ respectivamente, va a notar que reemplazando con la formula de $x_r$ va a encontrar valores mas acelerados que las iteraciones de punto fijo. Entre mas adelante estén los 3 puntos consecutivos, mas lejos va a lanzar a $x_r$. Por lo tanto, hay que hacer un sliding window entre valores consecutivos. Sin embargo, para reutilizar información podemos introducir el siguiente método.