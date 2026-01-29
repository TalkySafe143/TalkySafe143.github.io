---
title: Machine Number
---
# Machine Number

To represent a machine number, it can be seen in the form:

$$
(-1)^s 2^{c-u}(1-f)
$$

Where $s \in \{0, 1\}$ indicates the sign of the number, the number $c < 2^{11}$ is the decimal representation, and $u$ is a constant that depends on the standard; for $11$ bits, $u = 1023$.

Finally, $f < 1$ is the fraction that can be formed with the bits after the floating point. Consider the following:

$$
\underbrace{0}_{\text{sign}}\underbrace{00000000000}_{c}.\underbrace{0000000\dots}_{f}
$$

Then, the first bit after the floating point is seen as $2^{-1}$, the second would be multiplied by $2^{-2}$, and so on.
