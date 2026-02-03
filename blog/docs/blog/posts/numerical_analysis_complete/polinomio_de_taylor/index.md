---
title: Polinomio de Taylor
tags: ['Análisis Numérico (Completo)']
---
Para poder reconstruir una función $f(x)$ se puede ver como:

$$
f(x) = P_n(x) + R_n(x)
$$

Donde $P_n(x)$ es el $n$-ésimo polinomio de Taylor y $R_n(x)$ es el polinomio de error.

Se dice que: 

$$
P_n(x) = f(x_0) + f^{\prime}(x_0)(x-x_0) + f^{\prime\prime}(x_0)\frac{(x-x_0)^2}{2!} + \dots + f^{n}(x_0)\frac{(x-x_0)^n}{n!}
$$

Donde $x_0$ es el punto donde se centra la función.

Igualmente, $R_n(x)$ se define como:

$$
R_n(x) = f^{n+1}(\xi(x))\frac{(x-x_0)^{n+1}}{(n+1)!}
$$

??? example "Ejemplo"
    
    Si $f(x) = \cos(x)$ y $x_0 = 0$, entonces podemos ver que:
    
    $$
    P_2(x) = 1 - \frac{x^2}{2}
    $$
    
    - Código de Matlab
        
        ```matlab
        % Variable simbolica x - Crear un dominio
        syms x; 
        
        % Definir la funcion del coseno
        f = @(x)cos(x);
        
        % Si se coloca el ; evita imprimir
        
        % Crear Polinomio de Taylor de orden 2 f(x) = cos
        % Por defecto x_0 = 0
        T2 = taylor(cos(x), 'Order', 3)
        
        % Crear Polinomio de Taylor de orden 2 f(x) = cos
        T3 = taylor(cos(x), 'Order', 4)
        
        T4 = taylor(cos(x), 'Order', 5)
        
        fplot(f, [-2*pi, 2*pi])
        hold on; % Trabaja sobre la misma instancia grafica
        
        fplot(T2, [-2*pi, 2*pi])
        hold on;
        
        fplot(T4 , [-2*pi, 2*pi])
        hold on;
        
        ```