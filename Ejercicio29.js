//14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
//Analisis de requerimiento:
//Ent: nota=0.0(leer)
//pro: si notas>=60 entonces
//        escribir "Felicidades has aprobado."
//     sino
//        escribir "Has reprobado, intentelo de nuevo."
//     finsi
//     escribir "Muchas gracias."
//Sal: mostrar mensaje

// pseudocodigo
// Algoritmo calificacion
//   declarar notas=0.0
//   escribir "ingrese su nota: "
//   leer notas
//   si notas>=60 entonces
//       escribir "Felicidades has aprobado."
//   sino
//       escribir "Has reprobado, intentelo de nuevo."
//   finsi
//   escribir "Muchas gracias."
// finAlgoritimo

const read = require('prompt-sync')();
const write = console.log

function calificacion(){
   let notas=0.0
    notas= read("ingrese su nota: ")
    notas=parseFloat(notas)
    if(notas >= 60){
    write("Felicidades has aprobado.")
    }
    else{
        write("Has reprobado, intentelo de nuevo.")
    }
    write(`Muchas gracias.`)
}
calificacion()
