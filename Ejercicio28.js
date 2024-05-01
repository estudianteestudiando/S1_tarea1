//13.	Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
//Analisis de requerimiento:
//Ent:precioProducto=0.0(leer), descuento=0(leer), precioFinal=0(calcular), calculado=0(calcular)
//pro:calculado=precioProducto*(descuento / 100)
//    precioFinal=precioProducto-calculado
//Sal: mostrar mensaje

//Pseudocodigo:
//algoritmo suma
//   declarar precioProducto=0.0, descuento=0, precioFinal=0, calculado=0
//   Escribir "ingrese precio del producto:"
//   Leer precioProducto
//   Escribir "ingrese el segundo numero: "
//   Leer descuento
//   calculado=precioProducto*(descuento / 100)
//   precioFinal=precioProducto-calculado
//   Escribir `Precio Venta: precioProducto - Descuento: calculado = Precio Final = precioFinal`)
//   Escribir `Con un descuento de calculado dolares, nos debe de pagar precioFinal dolares.`)
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function rebajas(){
   let precioProducto=0.0, descuento=0, precioFinal=0, calculado=0
    precioProducto= read("ingrese precio del producto:")
    precioProducto=parseFloat(precioProducto)
    descuento= read("ingrese su porcentaje de descuento:")
    descuento=parseInt(descuento)
    calculado=precioProducto*(descuento / 100)
    precioFinal=precioProducto-calculado
    write(`Precio Venta: ${precioProducto} - Descuento: ${calculado} = Precio Final = ${precioFinal}`)
    write(`Con un descuento de ${calculado} dolares, nos debe de pagar ${precioFinal} dolares.`)
}
rebajas()
