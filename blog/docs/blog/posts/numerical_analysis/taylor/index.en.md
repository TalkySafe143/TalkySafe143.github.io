---
title: Taylor Polynomial
---
# Taylor Polynomial

To reconstruct a function $f(x)$, it can be seen as:

$$
f(x) = P_n(x) + R_n(x)
$$

Where $P_n(x)$ is the $n$-th Taylor polynomial and $R_n(x)$ is the remainder (error) polynomial.

It is stated that:

$$
P_n(x) = f(x_0) + f^{\prime}(x_0)(x-x_0) + f^{\prime\prime}(x_0)\frac{(x-x_0)^2}{2!} + \dots + f^{n}(x_0)\frac{(x-x_0)^n}{n!}
$$

Where $x_0$ is the point where the function is centered.

Similarly, $R_n(x)$ is defined as:

$$
R_n(x) = f^{n+1}(\xi(x))\frac{(x-x_0)^{n+1}}{(n+1)!}
$$

??? example "Example"
    
    If $f(x) = \cos(x)$ and $x_0 = 0$, then we can see that:
    
    $$
    P_2(x) = 1 - \frac{x^2}{2}
    $$
    
    ??? "Matlab Code"
        
        ```matlab
        % Symbolic variable x - Create a domain
        syms x; 
        
        % Define the cosine function
        f = @(x)cos(x);
        
        % Placing the ; prevents printing
        
        % Create Taylor Polynomial of order 2 f(x) = cos
        % By default x_0 = 0
        T2 = taylor(cos(x), 'Order', 3)
        
        % Create Taylor Polynomial of order 2 f(x) = cos
        T3 = taylor(cos(x), 'Order', 4)
        
        T4 = taylor(cos(x), 'Order', 5)
        
        fplot(f, [-2*pi, 2*pi])
        hold on; % Works on the same graphics instance
        
        fplot(T2, [-2*pi, 2*pi])
        hold on;
        
        fplot(T4 , [-2*pi, 2*pi])
        hold on;
        ```
