---
date:
  created: 2026-01-12
draft: false
categories:
  - Notas
tags:
  - Programacion competitiva
  - Matematica
  - Dificultad Media
---

# Principio de exclusion-inclusion (PIE)

??? info "Pre-requisitos" 
    - Creería que bitmask, aunque en realidad no es tan necesario 
    - LCA para el ejemplo que esta abajo, aunque solo es un ejemplo 
    - Teoria de conjuntos y su terminología.

---

Al principio es intuitivo pensar en:

> **_Si yo cuento algo dos veces, solamente se lo resto y ya_**.

Un ejemplo simple es cuando queremos calcular distancias de dos nodos en un arbol: Si un nodo $u$ y otro nodo $v$ tienen un LCA $a$, entonces podemos calcular la distancia con respecto a la raiz $r$ si hacemos lo siguiente:

$$
d(r,u)+d(r, v)-2\cdot d(r, a)
$$

Cuando restamos la distacia de la raiz al LCA, estamos balanceando el hecho de que contamos $2$ veces esa distancia a la hora de ver cada nodo a la raiz por separado.

Sin embargo, en algunos ejercicios no es tan simple el decir como

> **_Si yo cuento algo dos veces, solamente se lo resto y ya_**.

---

## Formalidad

Considere un set finito $X$ y $3$ subsets $A,B,C \subseteq X$. Para obtener $|A \cup B \cup C|$ podríamos tomar simplemente $|A|+|B|+|C|$, pero ¿Y si esos conjuntos se intersectan?, si se intersectan algunos, habremos contado algún elemento de más.

Los elementos que hemos contado de más han sido los elementos que estan dentro de los conjuntos $A \cap B, A \cap C, B \cap C$, entonces le podemos restar a la cuenta $|A \cap B|+ |A \cap C| + |B \cap C|$

Pero ahora restamos de mas los elementos que estan en $A \cap B \cap C$, entonces los añadimos de nuevo. Esto nos da que:

$$
|A \cup B \cup C| = |A|+|B|+|C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
$$

Puede probar con algúnos sets y va a ver que si da la cuenta. Para leer un proof riguroso, puede leer esta sección de [cp-algorithms](https://cp-algorithms.com/combinatorics/inclusion-exclusion.html#proof).

## Formulas 

Suponga que no hay un set $X$ del que queremos sacar el principio de inclusión exclusión, luego la formula para $n$ sets esta dada por:

### Principio sin restricción

$$
\left|\bigcup_{i=1}^n A_i \right| = \sum_{\emptyset \neq J\subseteq \{1,2,\ldots ,n\}} (-1)^{|J|-1}{\Biggl |}\bigcap_{j\in J}A_{j}{\Biggr |}
$$

No hay que asustarse con esta formula, puede considerar todos los subsets del set $\{1, 2, \dots, n\}$, dependiendo del tamaño del subset, va a sumar o va a restar la cardinalidad de la intersección de los sets $A_j$ para los cuales $j \in J$, donde $J$ es el subset que estamos fijando.

??? example "Simulación con set pequeños"
    Podemos hacer la simulación con $J = \{1, 2\}$. Si tenemos este set, quiere decir que tenemos $A_1, A_2$, entonces vamos a considerar todos los subsets o tambien llamado $\mathscr{P}(J)$. Note que se indica que $J \neq \emptyset$, entonces vamos a comenzar por alguno que no este vacío.

    - $\{1\}$: Entonces vamos a seleccionar $A_1$ y $|J| - 1 = 0$, por lo tanto, la expresión de arriba dentro de la suma queda $1 \cdot |A_1|$
    - $\{1, 2\}$: Entonces vamos a seleccionar $A_1, A_2$ y $|J| - 1 = 1$, por lo tanto, la expresión de arriba dentro de la suma queda $(-1) \cdot |A_1 \cup A_2|$. Note que en este caso, hay que restar la cardinalidad de la intersección, porque estos son los elementos que terminamos contando de mas.
    - $\{2\}$: Entonces vamos a seleccionar $A_2$ y $|J| - 1 = 0$, por lo tanto, la expresión de arriba dentro de la suma queda $1 \cdot |A_2|$

### Principio con restricción

Para un universo $X$, siendo $A_1, A_2, \dots, A_n$ subsets de ese universo, se puede definir el principio de inclusión exclusión.

$$
\left|X\setminus\bigcup_{i=1}^n A_i \right| = |X|+\sum_{\emptyset \neq J\subseteq \{1,2,\ldots ,n\}} (-1)^{|J|}{\Biggl |}\bigcap_{j\in J}A_{j}{\Biggr |}
$$

Note que ahora los subsets de un indice, se van a restar, ya que estamos tratando de hallar la diferencia con respecto al universo.

## Implementación

La implementación tal cual del PIE se puede usar usando mascara de bits, para poder tomar todos los subconjuntos de $J$ explicitamente.

```cpp
int answer = 0;
for (int mask = 0; mask < (1 << n); mask++) {
    // (1)
    int cnt = 0, intersection_size = 0;
    for (int i = 0; i < n; i++) { // (2)
        if (mask & (1 << i)) cnt++;
        // (3)
    }
    if (cnt & 1) answer -= intersection_size;
    else answer += intersection_size;
}
```

1. Si tiene otra forma para recorrer todas las mascaras de bits, esta bien tambien.
2. Esto se puede hacer con un `__builtin_popcount` pero se suele usar el `for` para calcular la cardinalidad de la intersección.
3. Compute de alguna forma la cardinalidad de la intersección del subset J activo.


!!! note "No siempre se implementa así"
    En realidad, PIE se puede notar de muchas maneras a la hora de resolver ejercicios, en realidad, la implementación de mascara de bits es poco usada porque las restricciones suelen cantar mucho esta implementación.

    La idea en general es lo valioso, ya que se puede usar con combinatoria o contando cosas en general, no siempre se va a expresar de la forma de sets y subsets.

Con esta implementación, hasta ese momento queda con una complejidad de $O(2^n n)$ a falta del computo de la cardinalidad de la intersección.

Sin embargo, recuerde que PIE se puede presentar de muchas formas, la implementación con la mascara de bits o subsets es solamente un caso muy particular.

## Problema explicado

### [Count GCD](https://codeforces.com/problemset/problem/1750/D)

> _Como pre-requisito es importante entender la idea o las observaciones de la solución, lea la editorial si hace falta, pero es bueno que piense el problema primero_

??? example "Solución"
    La cosa es, necesitamos hallar todos los numeros $k$ tal que $\gcd(\frac{a_{i-1}}{a_i}, k) = 1$, es decir, que sean coprimos.
    Sabemos que $k \le \frac{m}{a_i}$ ya que le tenemos que quitar el gcd resultante que queremos, es decir, que nuestro universo $X$ van a ser el set de numeros para los cuales $k$ puede tomar valor. Quiere decir que: $|X| = \frac{m}{a_i}$

    Ahora, el que $\frac{a_{i-1}}{a_i}$y $k$ sean coprimos, quiere decir que **no** comparten ningún factor primo. Para esto, podemos usar PIE.
    Sea $A_{p_j}$ como el conjunto de los numeros divisibles por el primo $p_j$, tal que $p_j$ hace parte de la factorización prima de $\frac{a_{i-1}}{a_i}$. Formalmente necesitamos hallar:
    $$
    \left|X\setminus\bigcup_{i=1}^j A_{p_i} \right| = |X|+\sum_{\emptyset \neq J\subseteq \{1,2,\ldots ,j\}} (-1)^{|J|}{\Biggl |}\bigcap_{w\in J}A_{p_w}{\Biggr |}
    $$
    Donde $j$ es la cantidad de factores primos que tiene $\frac{a_{i-1}}{a_i}$.
    Ahora, para este caso, ¿que nos representa esa intersección? Si tenemos la intersección de los conjuntos $A_{p_1}, A_{p_2}, \dots, A_{p_w}$, entonces quiere decir que tenemos los numeros que son divisibles por $p_1$ y por $p_2$ y por … $p_w$, para saber la cantidad de numeros, podemos simplemente decir:
    $$
    \left\lfloor\frac{|X|}{\prod\limits_{i = 1}^{w}p_i}\right\rfloor
    $$
    Ya teniendo esto, la formula queda tal que así
    $$
    \text{coprimos} = \sum\limits_{S \subseteq \text{ factores primos de } \frac{a_{i-1}}{a_i}}{(-1)^{|S|}\left\lfloor \frac{|X|}{\prod\limits_{p \in S}p} \right\rfloor}
    $$
    Si se ve el codigo de la solución, esta tal cual en la parte de la mascara de bits (Usada para ir por todos los subsets) y se puede demostrar que cualquier numero de los que vamos a ver no puede tener mas de $9$ factores primos, por lo tanto, la complejidad es de $O(2^9\cdot 9\cdot \log A + \sqrt{m})$
    Codigo [aquí](https://codeforces.com/contest/1750/submission/329267244)


## Mas problemas

Los problemas se pueden sacar de esta [lista](https://youkn0wwho.academy/topic-list/principle_of_inclusion_and_exclusion).

## Referencias
- [Cp algo](https://cp-algorithms.com/combinatorics/inclusion-exclusion.html)
