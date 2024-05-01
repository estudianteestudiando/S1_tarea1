//1.	Pedir al usuario un número y mostrar si es mayor o menor que 10.
//Analisis de requerimiento:
//Ent: numero=0.0(leer)
//pro: si numero < 10
//             entonces
//                 El numero es menor que 10.
//             sino
//                 El numero es mayor que 10.
//             finSi
//Sal: mostrar Gracias por creer en nosotros.

//Pseudocodigo:
//algoritmo mayorOMenor
//   Declarar numero=0.0
//   Escribir "ingrese un numero: "
//   Leer numero
//   Si numero < 10
//             entonces
//                 `El numero es menor que 10.`
//             sino
//                 `El numero es mayor que 10.`
//             finSi
// Escribir `Gracias por creer en nosotros.`
// finAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function mayorOMenor(){
   let numero=0.0
    numero= read("ingrese un numero: ")
    numero=parseFloat(numero)
    if(numero < 10){
    write(`El ${numero} es menor que 10.`)
    }
    else{
        write(`El ${numero} es mayor que 10.`)
    }
    write(`Gracias por creer en nosotros.`)
}
mayorOMenor()