---
title: Runge-Kutta Methods
---
# Runge-Kutta Methods

Runge-Kutta methods achieve the accuracy of Taylor methods but without the need to explicitly calculate high-order derivatives. Instead, they perform multiple evaluations of the function $f(t, y)$ at intermediate points.

### Midpoint Method (RK2)

Calculates an intermediate step to estimate the slope:
$$ \omega_{i+1} = \omega_i + h f\left(t_i + \frac{h}{2}, \omega_i + \frac{h}{2}f(t_i, \omega_i)\right) $$

---

### Modified Euler Method

Averages the slopes at the beginning and end of the interval:
$$ \omega_{i+1} = \omega_i + \frac{h}{2}\left[ f(t_i, \omega_i) + f(t_{i+1}, \omega_i + hf(t_i, \omega_i)) \right] $$

---

### 4th Order Runge-Kutta (RK4)

The industry standard due to its excellent balance between cost and $O(h^4)$ accuracy.

$$ \omega_{i+1} = \omega_i + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4) $$

Where:
- $k_1 = h f(t_i, \omega_i)$ (Slope at the beginning)
- $k_2 = h f(t_i + \frac{h}{2}, \omega_i + \frac{1}{2}k_1)$ (Slope at midpoint using $k_1$)
- $k_3 = h f(t_i + \frac{h}{2}, \omega_i + \frac{1}{2}k_2)$ (Slope at midpoint using $k_2$)
- $k_4 = h f(t_{i+1}, \omega_i + k_3)$ (Slope at the end using $k_3$)

??? example "Step-by-Step Example"

    Solve $y^\prime = ty + t^3$ with $y(0)=5, h=0.5$ in $[0, 2]$.
    $\omega_0 = 5$. 
    
    1. **Iteration 1**:
       - $k_1 = 0.5[0(5) + 0^3] = 0$
       - $k_2 = 0.5[(0.25)(5) + 0.25^3] \approx 0.6328$
       - $k_3 = 0.5[(0.25)(5+0.3164) + 0.25^3] \approx 0.672$
       - $k_4 = 0.5[(0.5)(5.672) + 0.5^3] \approx 1.4805$
       - $\omega_1 = 5 + \frac{1}{6}[0 + 2(0.6328) + 2(0.672) + 1.4805] = 5.681$
