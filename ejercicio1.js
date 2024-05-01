// 1. Pedir al usuario su nombre y saludarlo.
// Analisis:
// Entrada: nombre (leer),  
// Proceso: nombre =(pedir que ingrese su nombre:)
// Salida: se escribe el saludo.

//pseudocodigo:
//algoritmo saludar
//   Declarar nombre=""
//   Escribir "ingrese su nombre por favor: "
//   Leer nombre
//   Escribir Hola ${nombre}!, Bienvenido.
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function saludar(){
    var nombre = ""
    nombre = read("ingrese su nombre por favor: ")
    write(`Hola ${nombre}!, Bienvenido.`) 
}
saludar();

