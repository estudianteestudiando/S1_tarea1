//15.	Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.
// Analisis:
// Entrada:precioVenta=0.0(leer), anioFabricacion=0(leer), descuento=0(calcular), PrecioFinal=0(calculado).
// Proceso: si anioFabricacion < 2010
//             entonces
//                 descuento = precioVenta*0.10
//             sino
//                 descuento = 0
//             finSi
//             precioFinal = precioVenta - descuento
// Salida: precioFinal

//seupdocodigo:
//   Declarar precioVenta=0.0, anioFabricacion=0, decuento=0, precioFinal=0
//   Escribir "ingrese precio de venta:"
//   Leer precioVenta
//   Escribir "ingrese año de fabricacion:"
//   Leer anioFabricacion
//   Si anioFabricacion < 2010
//             entonces
//                 descuento = precioVenta*0.10
//             sino
//                 descuento = 0
//             finSi
//             precioFinal = precioVenta - descuento
//   Escribir precioFinal
// finAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function ventaVehiculo(){
   let precioVenta=0.0, anioFabricacion=0, descuento=0, precioFinal=0
    precioVenta= read("ingrese precio de venta:")
    precioVenta=parseFloat(precioVenta)
    anioFabricacion= read("ingrese año de fabricacion:")
    anioFabricacion=parseInt(anioFabricacion)
    if(anioFabricacion < 2010){
    descuento = precioVenta*0.10
    }
    else{
        descuento=0
    }
    precioFinal=precioVenta-descuento
    write(`Precio Venta: ${precioVenta} - Descuento: ${descuento} = Precio Final=  ${precioFinal}`)
}
ventaVehiculo()
