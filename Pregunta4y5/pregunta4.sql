SELECT tienda, SUM(ventas) as total FROM test.informacion_ventas
GROUP BY informacion_ventas.tienda
ORDER BY total DESC