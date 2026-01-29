---
title: Gauss Jordan
---
# Gauss Jordan

Para hacer gauss Jordan se debe tener en cuenta los siguiente pasos:

Vamos a tener una ecuación de la forma $Ax = B$, donde $A$ es la matriz de coeficientes, $x$ es el vector solución y $B$ es el vector de los resultados

$$
\begin{bmatrix}
a_{11} & \dots & a_{1n} \\
\vdots & & \vdots \\
a_{n1} & \dots & a_{nn}
\end{bmatrix} 
\begin{bmatrix}
x_{1} \\
\vdots \\
x_n
\end{bmatrix} =
\begin{bmatrix}
b_{1} \\
\vdots \\
b_n
\end{bmatrix}
$$

Recordar que se pueden hacer las siguientes operaciones:

- Multiplicar (O dividir) una fila por un escalar
- Sumar restar entre filas
- Intercambiar filas

Algunos detalles para la implementación

- Las columnas se tienen que eliminar en orden de izquierda a derecha
- La cantidad de operaciones entre filas necesarias y justas siempre va a ser la cantidad de elementos debajo de la diagonal principal.
- El pivote siempre va a ser la primera fila (O nunca se cambia)
- Hay que hacer las operaciones para eliminar primero $a_{21}, a_{31}, \dots, a_{n1}$
    - En este caso, el pivote siempre va a ser la primera fila para operar
    - El pivote es la fila que esta inmediatamente encima de la diagonal
- La operación de cambiar la fila, siempre se va a ser cuando un cero se pueda colocar mas abajo para satisfacer los ceros de la diagonal inferior
- El numero de operaciones que requiere gauss es de $\frac{2}{3}n^3 + \frac{5}{2}n^2 - \frac{7}{6}n$ a lo mucho: $O(n^3)$

??? "Código en Python"
    
    ```python
    import numpy as np
    
    def determinant(A: list[list[float]]) -> float:
        matrix = np.array(A)
        return np.linalg.det(matrix)
    
    def swap_rows(A: list[list[float]], k: int) -> bool:
        n = len(A)
        for i in range(k+1, n):
            if A[i][k] != 0.0:
                A[i], A[k] = A[k], A[i]
                return True
        return False
    
    def solve_linear(A: list[list[float]], X: list[float]) -> int:
        n = len(A)
        ops_cnt = 0
        for k in range(n):
            if A[k][k] == 0.0:
                if not swap_rows(A, k):
                    return 0
            for i in range(k+1, n):
                if A[i][k] == 0.0:
                    continue
                factor = A[i][k]/A[k][k]
                for u in range(k, n):
                    A[i][u] -= factor*A[k][u]
                    ops_cnt += 2
        for i in range(n-1, -1, -1):
            s = A[i][n]
            for k in range(i+1, n):
                s -= X[k]*A[i][k]
            assert(A[i][i] != 0.0)
            X[i] = s/A[i][i]
    
        for i in range(n):
            s = 0
            for k in range(n):
                s += X[k]*A[i][k]
            assert(s == A[i][n])
    
    def main():
        print("Cantidad de filas:")
        n = int(input().strip())
        print("Matriz de coeficientes")
        A = []
        for i in range(n):
            A.append(list(map(float, input().strip().split(" "))))
            assert(len(A[i]) == n)
        print("Vector solucion")
        B = list(map(float, input().strip().split(" ")))
        assert(len(B) == n)
    
        if determinant(A) == 0.0:
            print("No hay solucion")
            return
    
        for i in range(n):
            A[i].append(B[i])
        X = [0.0] * n
        rank = solve_linear(A, X)
    
        if rank == 0.0:
            print("No hay solución")
            return
        print(X)
    
    if __name__ == '__main__':
        main()
    
    ```
