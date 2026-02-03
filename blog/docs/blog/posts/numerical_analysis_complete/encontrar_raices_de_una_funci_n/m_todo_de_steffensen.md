---
title: Método de Steffensen
tags: ['Análisis Numérico (Completo)']
---
Se toma punto fjio, a partir de este, se construye $x_n, x_{n+1}, x_{n+2}$ como 3 iteraciones consecutivas.

Luego, podemos obtener $x_r$ del metodo de $\Delta^2$ Aitken, luego a partir de $x_r$ se construyen $x_r, x_{r+1}, x_{r+2}$ de las iteraciones de punto fijo y se toman como  $x_n, x_{n+1}, x_{n+2}$ para volver a iterar con $\Delta^2$ Aitken.

[Taller Raices](https://www.notion.so/Taller-Raices-278b008f6cff8091a369e33d3113a57f?pvs=21)