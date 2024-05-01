//3.	Pedir al usuario un número y mostrar si es par o impar.
//Analisis de requerimiento:
//Ent: numero=0(leer)
//pro: si numero % 2 === 0
//             entonces
//                 El numero es par.
//             sino
//                 El numero es impar.
//             finSi
//Sal: mostrar Gracias por preferirnos.

//Pseudocodigo:
//algoritmo ParoImpar
//   Declarar numero=0
//   Escribir "ingrese un numero: "
//   Leer numero
//   Si numero % 2 === 0
//             entonces
//                 `El numero es par.`
//             sino
//                 `El numero es impar.`
//             finSi
// Escribir `Gracias por preferirnos.`
// finAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function ParoImpar(){
    let numero=0
     numero= read("ingrese un numero: ")
     numero=parseInt(numero)
     if(numero % 2 === 0){
     write(`El ${numero} es par.`)
     }
     else{
         write(`El ${numero} es impar.`)
     }
     write(`Gracias por preferirnos`)
 }
 ParoImpar()