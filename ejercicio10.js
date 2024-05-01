//10.	Pedir al usuario dos números y mostrar el mayor.
//Analisis de requerimiento:
//Ent: num1=0(leer), num2=(leer)
//Pro: si num1>num2 entonces
//        escribir "El num1 es el mayor."
//     sino
//        escribir "El num2 es el mayor."
//     finsi
//     escribir "Un gusto haberte atendido."
//Sal:  mostrar el mensaje

// algoritmo
// Algoritmo mayor
//   declarar num1=0, num2=0
//   escribir "Ingrese el primer numero: "
//   leer num1
//   escribir "Ingrese el segundo numero: "
//   leer num2   
//   si num1>num2 entonces
//      escribir "El num1 es el mayor."
//   sino
//      escribir "El num2 es el mayor."
//   finsi
//   escribir "Un gusto haberte atendido."
// finAlgoritimo//pro:
//Sal:

const read = require('prompt-sync')();
const write = console.log

function mayor(){
    let num1=0, num2=0
    num1= read("Ingrese el primer numero: ")
    num1= parseInt(num1)
    num2= read("Ingrese el segundo numero: ")
    num2= parseInt(num2)
    if(num1>num2){
        write(`El ${num1} es el mayor.`)
    }
    else{
        write(`El ${num2} es el mayor.`)
    }
    write("Un gusto haberte atendido.")
}
mayor()