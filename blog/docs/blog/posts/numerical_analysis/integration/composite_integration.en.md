---
title: Composite Integration
---
# Composite Numerical Integration

When the interval $[a, b]$ is large, simple rules (like Simpson or Trapezoidal) can be imprecise. Composite integration divides the interval into $n$ subintervals of width $h = (b-a)/n$ and applies the rule to each.

### Composite Simpson's Rule (1/3)

The interval is divided into an even number $n$ of subintervals. Applying Simpson's rule across each pair of segments:

$$ \int_a^b f(x) \; dx = \frac{h}{3}\left[f(a) + 4\sum_{j = 1}^{n / 2}f(x_{2j-1}) + 2\sum_{j = 1}^{n/2-1}f(x_{2j}) + f(b)\right] $$

!!! abstract "Structure"
    - The first and last points are added once.
    - Odd-indexed points ($x_1, x_3, \dots$) are multiplied by 4.
    - Internal even-indexed points ($x_2, x_4, \dots$) are multiplied by 2.

---

### Composite Trapezoidal Rule

$$ \int_a^b f(x) \; dx = \frac{h}{2}\left[f(a) + 2\sum_{j = 1}^{n-1}f(x_j) + f(b)\right] $$

---

### Composite Midpoint Rule

Requires an even number of subintervals $n$. With $h = (b-a)/(n+2)$:
$$ \int_a^b f(x) \; dx = 2h \sum_{j=0}^{n/2} f(x_{2j}) $$
