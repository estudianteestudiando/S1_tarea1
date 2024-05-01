//9.	Solicitar al usuario un número y mostrar si es divisible por 2.
//Analisis de requeimiento:
//Ent: numero=0(leer), residuo=0(calcular)
//Pro: residuo= numero%2
//     si residuo==0 entonces
//        escribir "El numero es divisible para 2."
//     sino
//        escribir "El numero es divisible para 2."
//     finsi
//     escribir "Espero haberte ayudado..."
//Sal: mostrar el mensaje

// pseudocodigo
// Algoritmo divisible2
//   declarar numero = 0, reciduo = 0
//   escribir "Ingrese numero"
//   leer numero
//   recidio = numero % 3
//   si reciduo==0 entonces
//     escribir "El numero es divisible para 2."
//   sino
//     escribir "El numero no es divisible para 2."
//   finsi
//   escribir "Espero haberte ayudado..."
// finAlgoritimo

const read = require('prompt-sync')();
const write = console.log

function divisible2(){
    let numero=0, residuo=0
    numero= read("ingrese un numero: ")
    numero= parseInt(numero)
    residuo=numero%2
    if(residuo==0){
        write(`El ${numero} es divisible para 2.`)
    }
    else{
        write(`El ${numero} no es divisible para 2.`)
    }
    write("Espero haberte ayudado...")
}
divisible2()