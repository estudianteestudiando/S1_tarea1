//12.	Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
//Analisis de requerimiento:
//Ent:  montoTotal=0.0(leer), iva=0.0(leer), valorIva=0.0(calcular), total=0.0(calcular)
//pro: valorIva=montoTotal*(iva/100)
//     total=montoTotal+valorIva
//Sal: total

//Pseudocodigo
//algoritmo impuestos
//declarar montoTotal=0.0, iva=0.0, valorIva=0.0, total=0.0
//escribir "ingrese el monto total de su factura: "
//leer montoTotal
//escribir "ingrese el IVA: "
//leer iva
//valorIva=montoTotal*(iva/100)
//total=montoTotal+valorIva
//escribir `El monto total a pagar incluyendo el IVA es de ${total} dolares.`
//finAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function impuestos(){
    let montoTotal=0.0, iva=0.0, valorIva=0.0, total=0.0
    montoTotal=parseFloat(read("ingrese el monto total de su factura: "))
    iva=parseFloat(read("ingrese el IVA: "))
    valorIva=montoTotal*(iva/100)
    total=montoTotal+valorIva
    write(`El monto total a pagar incluyendo el IVA es de ${total} dolares.`)
}
impuestos()