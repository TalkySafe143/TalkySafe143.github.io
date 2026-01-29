---
title: Cubic Splines
---
# Cubic Splines

Suppose there are points $(x_i, f(x_i))$; we can perform linear interpolation (straight lines between points). For a smoother curve, we construct degree 3 polynomials between each pair of points.

For consecutive points $(x_j, x_{j+1})$, the polynomial $S_j(x)$ is defined as:

$$
S_j(x) = a_j + b_j(x- x_j) + c_j(x-x_j)^2 + d_j(x-x_j)^3
$$

### Smoothness Conditions

The following must be satisfied:
1. $S_j(x) \subset [x_j, x_{j+1}]$
2. $S_j(x_{j + 1}) = S_{j+1}(x_{j+1})$ (Continuity)
3. $S^\prime_{j}(x_{j+1}) = S^\prime_{j+1}(x_{j+1})$ (First derivative smoothness)
4. $S^{\prime \prime}_j(x_{j+1}) = S^{\prime \prime}_{j+1}(x_{j+1})$ (Second derivative smoothness)

??? example "Introductory Example"

    Points: $(1, 2), (2, 3), (3, 5)$. We have $S_0$ ([1,2]) and $S_1$ ([2,3]).
    
    - $S_0 = a_0 + b_0(x-1) + c_0(x-1)^2 + d_0(x-1)^3$
    - $S_1 = a_1 + b_1(x-2) + c_1(x-2)^2 + d_1(x-2)^3$
    
    Conditions:
    - $S_i(x_i) = f(x_i) \implies a_0 = 2, a_1 = 3$
    - $S_0(x_1) = a_1 \implies a_0 + b_0 + c_0 + d_0 = 3$
    - $S_1(x_2) = 5 \implies a_1 + b_1 + c_1 + d_1 = 5$
    - $S^\prime_0(x_1) = S^\prime_1(x_1) \implies b_0 + 2c_0 + 3d_0 = b_1$
    - $S^{\prime \prime}_0(x_1) = S^{\prime \prime}_1(x_1) \implies 2c_0 + 6d_0 = 2c_1$
    - Natural boundary: $c_0 = 0$ and $2c_1 + 6d_1 = 0$
    
    Solution:
    - $a_0 = 2, b_0 = 0.75, c_0 = 0, d_0 = 0.25$
    - $a_1 = 3, b_1 = 1.5, c_1 = 0.75, d_1 = -0.25$

---

### General Derivation

For $n$ points, we have $4n$ unknowns. Let $h_j = x_{j+1} - x_j$.

??? abstract "Step-by-step Equations"

    - **Equation 1 (Continuity)**:
      $$ S_j(x_{j+1}) = a_j + b_jh_j + c_jh_j^2 + d_jh_j^3 = a_{j+1} \tag{1} $$
      
    - **Equation 2 (First Derivative)**:
      $$ S^\prime_j(x_{j+1}) = b_j + 2c_jh_j + 3d_jh_j^2 = b_{j+1} \tag{2} $$
      
    - **Equation 3 (Second Derivative)**:
      $$ S^{\prime \prime}_j(x_{j+1}) = 2c_j + 6d_jh_j = 2c_{j+1} \tag{3} $$

From (3), solve for $d_j$:
$$ d_j = \frac{c_{j+1} - c_j}{3h_j} \tag{*} $$

From (1), find $b_j$:
$$ b_j = \frac{a_{j+1} - a_j}{h_j} - \frac{h_j}{3}(2c_j + c_{j+1}) \tag{8} $$

Substituting into (2) and shifting index ($j \rightarrow j-1$):
$$ h_{j-1}c_{j-1} + 2(h_{j-1} + h_j)c_j + h_jc_{j+1} = 3\frac{a_{j+1}-a_j}{h_j} - 3\frac{a_j - a_{j-1}}{h_{j-1}} \tag{**} $$

### Matrix Construction

With natural boundaries ($c_0=0, c_n=0$):

$$
\begin{bmatrix}
1 & 0 & 0 & \dots \\
h_0 & 2(h_0+h_1) & h_1 & \dots \\
0 & h_1 & 2(h_1+h_2) & h_2 \\
\vdots & \vdots & \vdots & 1
\end{bmatrix} 
\begin{bmatrix} c_0 \\ c_1 \\ \vdots \\ c_n \end{bmatrix} =
\begin{bmatrix} 0 \\ 3(\text{slopes}) \\ \vdots \\ 0 \end{bmatrix}
$$

??? example "Full Exercise ($n=4$)"

    Points: $(0, 0), (1, 1), (2, 16), (3, 81)$. $h_0=1, h_1=1, h_2=1$.
    Matrix:
    $$
    \begin{bmatrix} 1 & 0 & 0 & 0 \\ 1 & 4 & 1 & 0 \\ 0 & 1 & 4 & 1 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} c_0 \\ c_1 \\ c_2 \\ c_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 3(16-1) - 3(1-0) \\ 3(81-16) - 3(16-1) \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ 42 \\ 150 \\ 0 \end{bmatrix}
    $$
    Solution: $c_0=0, c_1=1.2, c_2=37.2, c_3=0$.
    Final parameters:
    - $d_0=0.4, d_1=12, d_2=-12.4$
    - $b_0=0.6, b_1=1.8, b_2=40.2$
    Polynomials constructed! 😎
