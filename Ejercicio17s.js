//2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
//Analisis de requerimiento:
//Ent: edad=0(leer)
//pro: si edad >= 18
//             entonces
//                 Si tienes (edad) años eres mayor de edad en Ecuador.
//             sino
//                 Si tienes ${edad} años eres menor de edad en Ecuador.
//             finSi
//Sal: mostrar gracias.

//Pseudocodigo:
//algoritmo vejes
//   Declarar edad=0
//   Escribir "ingresa tu edad: "
//   Leer edad
//   si edad >= 18
//          entonces
//              Si tienes (edad) años eres mayor de edad en Ecuador.
//          sino
//              Si tienes ${edad} años eres menor de edad en Ecuador.
//          finSi
// Escribir `Gracias`
// finAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function vejes(){
   let edad=0
    edad= read("ingresa tu edad: ")
    edad=parseInt(edad)
    if(edad >= 18){
    write(`Si tienes ${edad} años eres mayor de edad en Ecuador.`)
    }
    else{
        write(`Si tienes ${edad} años eres menor de edad en Ecuador.`)
    }
    write(`Gracias.`)
}
vejes()