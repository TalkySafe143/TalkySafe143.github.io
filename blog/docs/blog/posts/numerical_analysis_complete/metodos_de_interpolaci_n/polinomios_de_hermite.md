---
title: Polinomios de Hermite
tags: ['Análisis Numérico (Completo)']
---
### Polinomios osculantes

Sean $x_0, x_1, \dots, x_n$ $n+1$ numeros distintos que pertenecen a un intervalo $[a, b]$ y para cada $0 \le i \le n$, sea $m_i$ un numero no negativo.

Suponga que $f \in C^m[a, b]$ donde $C^m[a, b]$ es el conjunto de funciones continuas $m$ veces derivables en el intervalo $[a, b]$, donde $m \le n_{\max}$, el polinomio osculante que se aproxima a $f$ es el polinomio $P(x)$ de menor grado tal que:

$$
P^k(x_i) = f^k(x_i) \ 0\le i \le n \text{ y } 0\le k \le m_i
$$

En general, son polinomios que tienen la capacidad de replicar a la funcion en uno o mas puntos. Tiene la capacidad de replicar a los puntos y a su $m$-esima derivada.

??? example "Taylor"
    
    Es un caso especial de los polinomios osculantes. Luego $n = 0$ (O $1$ punto) y $m$ derivadas
    
??? example "Lagrange"
    
    En este caso, $n$ puntos pero $m = 0$ (Nunca se deriva)
    
??? example "Hermite"
    
    Este polinomio contiene $n$ puntos y $m=1$
    

---

Los polinomios de Hermite implican que para $x_i$ con $0 \le i \le n-1$ se conocen como los polinomios de Hermite si:

- $P(x_0) = f(x_0), P(x_1) = f(x_1), \dots, P(x_n) =  f(x_n)$
- $P^\prime(x_0) = f^\prime(x_0), P^\prime(x_1) = f^\prime(x_1), \dots, P^\prime(x_n) =  f^\prime(x_n)$

### Polinomio de Hermite con Lagrange

El polinomio esta defindo si $f \in C^1[a, b]$, el unico polinomio de menor grado ($2n +1$) que concuerda con $f$ y $f^\prime$ para todo $x_i$, va a ser el siguiente polinomio:

$$
P_{2n +1}(x) = \sum\limits_{j = 0}^nf(x_j)H_{n, j}(x) + \sum\limits_{j = 0}^nf^\prime(x_j)\hat{H}_{n, j}(x)
$$

Siendo:

$$
H_{n, j}(x) = \left[1-2(x-x_j)L^\prime_{n, j}(x_j)\right] L^2_{n, j}(x)
$$

$$
\hat{H}_{n, j}(x) = (x - x_j)L^2_{n, j}(x)
$$

Además si $f \in C^{2n+2}[a, b]$ entonces:

$$
f(x) = H_{2n+1}(x)+\underbrace{\frac{(x-x_0)^2 \times \cdots \times (x - x_n)^2}{(2n+2)!} f^{2n+2}(\xi(x))}_{\text{Cota de error máximo}}
$$

Donde $L_{n, j}$ hace referencia a los polinomios de Lagrange.

??? example "Ejemplo"
    
    A partir de los puntos $x_0 = -1, x_1= 0, x_2 = 2$ sabiendo que $f(x_0) = 5, f(x_1) = 2, f(x_2) = -4$ y con las derivadas $f^\prime(x_0) = 12, f^\prime(x_1) = -7, f^\prime(x_2) = -51$
    
    Como se tienen $3$ puntos, entonces $n = 2$, y el grado a calcular $\text{Grado}(2n + 1) = 5$
    
    - Paso 1: Construir los $L_j$ de Lagrange
        - $L_0 = \frac{(x- 0)(x-2)}{(-1-0)(-1-2)} = \frac{x^2 - 2x}{3}$
        - $L_1 = \frac{(x+1)(x-2)}{(0+1)(0-2)} = \frac{x^2 -x-2}{-2}$
        - $L_3 = \frac{(x+1)(x-0)}{(2+1)(2-0)} = \frac{x^2 + x}{6}$
    - Paso 2: Construir los $L^\prime_j$ de Lagrange
        - $L^\prime_0 = \frac{2x - 2}{3}$
        - $L^\prime_1 = \frac{2x -1}{-2}$
        - $L_3^\prime = \frac{2x + 1}{6}$
    - Paso 3: Construir $H_j$ de Hermite
        - $H_0 = [1 - 2(x - \underbrace{-1}_{x_0})\underbrace{(-4 / 3)}_{L^\prime_{0}(x_0)}]\underbrace{\left\{\frac{x^2-2x}{3}\right\}^2}_{L^2_0(x)}$
        - $H_1 = [1 - 2(x - \underbrace{0}_{x_1})\underbrace{(1 / 2)}_{L^\prime_{1}(x_1)}]\underbrace{\left\{\frac{x^2-x-2}{-2}\right\}^2}_{L^2_1(x)}$
        - $H_2 = [1 - 2(x - \underbrace{2}_{x_2})\underbrace{(5 / 6)}_{L^\prime_{2}(x_2)}]\underbrace{\left\{\frac{x^2+x}{6}\right\}^2}_{L^2_2(x)}$
    - Paso 3.1: Simplificar $H_j$
        - $H_0 = \frac{1}{27}\left( 8x^5 - 21x^4 - 12x^3 + 44x^2 \right)$
        - $H_1 =  -\frac{1}{4}(x^5 + 3x^4 + x^3 - 7x^2 - 4)$
        - $H_2 = -\frac{5}{108}x^5 + \frac{1}{36}x^4 + \frac{7}{36}x^3 + \frac{13}{108}x^2$
    - Paso 4: Construir $\hat{H_j}$
        - $\hat{H_0} = (x - \underbrace{-1}_{x_0})\underbrace{\left\{\frac{x^2 - 2x}{3}\right\}^2}_{L^2_0}$
        - $\hat{H_1} = (x - \underbrace{-1}_{x_0})\underbrace{\left\{\frac{x^2 - x + 2}{2}\right\}^2}_{L^2_1}$
        - $\hat{H_2} = (x - \underbrace{2}_{x_2})\underbrace{\left\{\frac{x^2 + x}{6}\right\}^2}_{L^2_2}$
    - Paso 4.1: Simplificar $\hat{H_j}$
        - $\hat{H_0} = \frac{1}{9}x^5 - \frac{1}{3}x^4 + \frac{4}{9}x^2$
        - $\hat{H_1} = \frac{1}{4}(x^5 - 2x^4-3x^3+4x^2+4x)$
        - $\hat{H_2} = \frac{1}{36}x^5 - \frac{1}{12}x^3 - \frac{1}{18}x^2$
    - Paso 5: Construir el polinomio $P_{2n+1}$
        
        $$
        P_5(x) = 5\underbrace{\left[\frac{1}{27}\left( 8x^5 - 21x^4 - 12x^3 + 44x^2 \right)\right]}_{H_0} + 2\underbrace{\left[-\frac{1}{4}(x^5 + 3x^4 + x^3 - 7x^2 - 4)\right]}_{H_1} - 4\underbrace{\left[-\frac{5}{108}x^5 + \frac{1}{36}x^4 + \frac{7}{36}x^3 + \frac{13}{108}x^2\right]}_{H_2} + 12\underbrace{\left[ \frac{1}{9}x^5 - \frac{1}{3}x^4 + \frac{4}{9}x^2 \right]}_{\hat{H_0}} - 7\underbrace{\left[ \frac{1}{4}(x^5 - 2x^4-3x^3+4x^2+4x) \right]}_{\hat{H_1}} - 51\underbrace{\left[  \frac{1}{36}x^5 - \frac{1}{12}x^3 - \frac{1}{18}x^2\right]}_{\hat{H_2}}
        $$
        

### Polinomio de Hermite con diferencias divididas

Teniendo las definicion de diferencias divididas.

??? example "Diferencias divididas"
    
    $$
    P_n(x) = f[x_0] + \sum_{k = 1}^n \left( f[x_0, x_1, \dots, x_k] \prod_{i = 0}^{k-1}(x-x_i) \right)
    $$
    

Podemos construir una nueva sucesión $z_i$ donde cada uno de los terminos van a estar definidos por:

$$
x_i = z_{2i} = z_{2i + 1}
$$

Sin embargo, para algunos puntos consecutivos se necesita definir $f$ de las diferencias divididas con un valor especifico, de manera general tenemos que:

$$
f[\{z_{2i}, z_{2i + 1}\}] = f^\prime(x_i)
$$

De esta manera, podemos definir el polinomio de Hermite de la forma:

$$
P_{2n + 1}(x) = f[z_0] + \sum_{k = 1}^{2n+1}\left( f[z_0, z_1, \dots, z_k] \prod_{i = 0}^{k-1}(x-z_{i}) \right)
$$