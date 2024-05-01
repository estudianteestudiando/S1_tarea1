//4.	Pedir al usuario un número y mostrar su doble.
// Analisis:
//Entrada: numero=0, doble=0
//Proceso: Calcular doble=numero*2
//Salida: doble

//seupdocodigo:
//algoritmo porDos
//   Declarar numero=0, doble=0
//   Escribir "Ingrese un numero "
//   Leer numero
//   doble= (numero*2)
//   Escribir `el doble de ${numero} es ${doble}`
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function porDos(){
var numero=0, doble=0
numero= read("Ingrese un numero ")
doble= (numero*2)
write(`El doble de ${numero} es ${doble}`)
}
porDos()