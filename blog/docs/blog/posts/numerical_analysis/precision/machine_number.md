---
title: Numero de maquina
---
# Numero de maquina

Para representar el numero de maquina, se puede ver de la forma

$$
(-1)^s 2^{c-u}(1-f)
$$

Donde $s \in \{0, 1\}$ el cual indica el signo del numero, el numero $c < 2^{11}$ el cual es la representación decimal y $u$ es una constante que depende del estándar, para $11$ bits $u = 1023$.

Por ultimo $f <1$ es la fracción que se puede formar con los bits después del punto flotante. Considere lo siguiente:

$$
\underbrace{0}_{\text{signo}}\underbrace{00000000000}_{c}.\underbrace{0000000\dots}_{f}
$$

Luego, el primer bit después del punto flotante se ve como $2^{-1}$, el segundo se multiplicaría con $2^{-2}$, así sucesivamente.
