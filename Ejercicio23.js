//8.	Pedir al usuario un número y mostrar si es múltiplo de 3.
//Analisis de requeimiento:
//Ent: numero=0(leer), residuo=0(calcular)
//Pro: residuo= numero%3
//     si residuo==0 entonces
//        escribir "El numero es multiplo 3"
//     sino
//        escribir "El numero no es multiplo 3"
//     finsi
//     escribir "gracias por su visita..."
//Sal:  mostrar el mensaje

// algoritmo
// Algoritmo mutiplo3
//   declarar numero = 0, reciduo = 0
//   escribir "Ingrese numero"
//   leer numero
//   recidio = numero % 3
//   si reciduo==0 entonces
//     escribir "El numero es multiplo 3"
//   sino
//     escribir "El numero no es multiplo 3"
//   finsi
//   escribir "gracias por su visita..."
// finAlgoritimo

const read = require('prompt-sync')();
const write = console.log

function multiplo3(){
    let numero=0, residuo=0
    numero= read("ingrese un numero: ")
    numero= parseInt(numero)
    residuo=numero%3
    if(residuo==0){
        write(`El ${numero} es multiplo de 3.`)
    }
    else{
        write(`El ${numero} no es multiplode 3.`)
    }
    write("Gracias por tu visita...")
}
multiplo3()