//16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
//Analisis de requerimiento:
//Ent: sueldoMensual=0.0(leer), sueldoAnual=0.0(calcular) sueldoNeto=0.0(calcular), excedente=0.0(calcular)
//pro: sueldoAnual= sueldoMensual*12
//     si (sueldoAnual > 30000) entonces
//     excedente = (sueldoAnual-30000)*0.15
//     sino
//         excedente=0  
//     finsi 
//     sueldoNeto=sueldoAnual-excedente
//Sal: mostrar sueldoNeto

// pseudocodigo
// Algoritmo econo
//   declarar sueldoMensual=0.0, sueldoAnual=0.0, sueldoNeto=0.0, excedente=0.0
//   escribir "ingrese su sueldo mensual: "
//   leer sueldoMensual
//   sueldoAnual= sueldoMensual*12
//     si (sueldoAnual > 30000) entonces
//     excedente = (sueldoAnual-30000)*0.15
//     sino
//         excedente=0  
//     finsi 
//     sueldoNeto=sueldoAnual-excedente
//   escribir (`Su sueldo neto es de ${sueldoNeto} dolares.`)
// finAlgoritimo

const read = require('prompt-sync')();
const write = console.log

function econo(){
   let sueldoMensual=0.0, sueldoAnual=0.0, sueldoNeto=0.0, excedente=0.0
    sueldoMensual= read("ingrese su sueldo mensual: ")
    sueldoMensual=parseFloat(sueldoMensual)
    sueldoAnual= sueldoMensual*12
    if(sueldoAnual > 30000){
    excedente = (sueldoAnual-30000)*0.15
    }
    else{
        excedente=0 
    }
    sueldoNeto=sueldoAnual-excedente
    write(`Su sueldo neto es de ${sueldoNeto} dolares.`)
}
econo()
