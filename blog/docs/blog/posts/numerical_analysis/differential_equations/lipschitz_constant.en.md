---
title: Lipschitz Constant
---
# Lipschitz Constant and Existence of Solutions

For an initial value problem (IVP) to have a unique solution, the function must satisfy certain regularity conditions.

### Definition

Let $D = \{(t, y) : a \le t \le b, -\infty < y < \infty\}$. If $f(t, y)$ is continuous on $D$ and satisfies the **Lipschitz Condition** in variable $y$:

$$ |f(t, y_1) - f(t, y_2)| \le L|y_1 - y_2| $$

where $L$ is a positive constant (Lipschitz Constant), then the problem:
$$ y^\prime(t) = f(t, y), \quad a \le t \le b, \quad y(a) = \alpha $$
has a **unique solution**.

If $f$ has partial derivatives, $L$ can be estimated as:
$$ L = \sup_{(t,y) \in D} \left| \frac{\partial f}{\partial y}(t, y) \right| $$
