---
title: Método de Steffensen
---
# Método de Steffensen

Es un método que combina las iteraciones de punto fijo con la aceleración de Aitken para encontrar raíces de manera más rápida.

### Pasos del proceso

1. Se realiza punto fijo para obtener tres términos consecutivos: $x_n, x_{n+1}, x_{n+2}$.
2. Se aplica la fórmula de aceleración de Aitken para obtener una mejor aproximación $\hat{x}$:
   $$ \hat{x} \approx x_n - \frac{(x_{n+1} - x_n)^2}{x_{n+2}-2x_{n+1}+x_{n}} $$
3. Se toma este $\hat{x}$ como la nueva "semilla" (nuevo $x_n$) y se repite el proceso desde el paso 1.

Este ciclo permite que la convergencia sea cuadrática, similar al método de Newton, pero sin necesidad de conocer la derivada de la función.
