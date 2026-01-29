---
title: Gauss Jordan
---
# Gauss Jordan

To perform Gauss-Jordan elimination, the following steps must be considered:

We have an equation of the form $Ax = B$, where $A$ is the coefficient matrix, $x$ is the solution vector, and $B$ is the vector of results.

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

Remember that the following operations are allowed:

- Multiply (or divide) a row by a scalar
- Add/subtract between rows
- Swap rows

Some implementation details:

- Columns must be eliminated in order from left to right.
- The number of row operations required and fair will always be the number of elements below the principal diagonal.
- The pivot will always be the first row (or never changes).
- Operations must be done to eliminate $a_{21}, a_{31}, \dots, a_{n1}$ first.
    - In this case, the pivot will always be the first row to operate.
    - The pivot is the row immediately above the diagonal.
- The operation of swapping the row will always be done when a zero can be placed further down to satisfy the zeros of the lower diagonal.
- The number of operations required by Gauss is $\frac{2}{3}n^3 + \frac{5}{2}n^2 - \frac{7}{6}n$ at most: $O(n^3)$.

??? "Python Code"
    
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
        print("Number of rows:")
        n = int(input().strip())
        print("Coefficient Matrix")
        A = []
        for i in range(n):
            A.append(list(map(float, input().strip().split(" "))))
            assert(len(A[i]) == n)
        print("Solution Vector")
        B = list(map(float, input().strip().split(" ")))
        assert(len(B) == n)
    
        if determinant(A) == 0.0:
            print("No solution")
            return
    
        for i in range(n):
            A[i].append(B[i])
        X = [0.0] * n
        rank = solve_linear(A, X)
    
        if rank == 0.0:
            print("No solution")
            return
        print(X)
    
    if __name__ == '__main__':
        main()
    
    ```
