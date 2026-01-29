---
title: Polinomios de Hermite
---
# Polinomios de Hermite

Los polinomios de Hermite son un caso especial de los **polinomios osculantes**. Estos polinomios tienen la capacidad de replicar tanto los valores de la función como sus derivadas en un conjunto de nodos.

### Definición

Para un conjunto de $n+1$ puntos, el polinomio de Hermite $H_{2n+1}(x)$ es el único polinomio de menor grado ($2n+1$) tal que:

- $P(x_i) = f(x_i)$ para todo $i = 0, \dots, n$.
- $P^\prime(x_i) = f^\prime(x_i)$ para todo $i = 0, \dots, n$.

### Construcción con Polinomios de Lagrange

Se puede expresar como:

$$
P_{2n +1}(x) = \sum\limits_{j = 0}^nf(x_j)H_{n, j}(x) + \sum\limits_{j = 0}^nf^\prime(x_j)\hat{H}_{n, j}(x)
$$

Donde:
- $H_{n, j}(x) = [1-2(x-x_j)L^\prime_{n, j}(x_j)] L^2_{n, j}(x)$
- $\hat{H}_{n, j}(x) = (x - x_j)L^2_{n, j}(x)$

$L_{n,j}$ representa los polinomios base de Lagrange.

### Construcción con Diferencias Divididas

Podemos extender el método de Newton. Definimos una nueva sucesión $z_i$ tal que cada nodo se repite:
$$ z_{2i} = z_{2i+1} = x_i $$

Para resolver la indeterminación en los puntos repetidos, usamos la derivada:
$$ f[z_{2i}, z_{2i+1}] = f^\prime(x_i) $$

Luego, el polinomio se construye normalmente:
$$
P_{2n + 1}(x) = f[z_0] + \sum_{k = 1}^{2n+1}\left( f[z_0, z_1, \dots, z_k] \prod_{i = 0}^{k-1}(x-z_{i}) \right)
$$

??? example "Ejemplo paso a paso"
    
    A partir de los puntos $x_0 = -1, x_1= 0, x_2 = 2$:
    - $f(x_0) = 5, f(x_1) = 2, f(x_2) = -4$
    - $f^\prime(x_0) = 12, f^\prime(x_1) = -7, f^\prime(x_2) = -51$
    
    1. **Lagrange**:
       - $L_0 = (x^2 - 2x)/3, L^\prime_0(-1) = -4/3$
       - $L_1 = (x^2 -x-2)/(-2), L^\prime_1(0) = 1/2$
       - $L_2 = (x^2 + x)/6, L^\prime_2(2) = 5/6$
    2. **Componentes de Hermite**:
       - $H_0 = [1 - 2(x+1)(-4/3)]L_0^2$
       - $H_1 = [1 - 2(x)(1/2)]L_1^2$
       - $H_2 = [1 - 2(x-2)(5/6)]L_2^2$
    3. **Resultado**: El polinomio $P_5(x)$ suma todas estas contribuciones multiplicadas por $f(x_j)$ y $f^\prime(x_j)$.
