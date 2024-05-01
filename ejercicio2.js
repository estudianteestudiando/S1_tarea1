//2. Pedir dos palabras y presentarlas concatenadas.
//Analisis:
//Entrada: palabra1=""(leer), palabra2=""(leer), concatenar(proceso)
//Proceso: concatenar=palabra1+palabra2
//Salida: concatenar.

//Seupdocodigo:
//algoritmo unir
//   declarar palabra1="", palabra2="", concatwnar=""
//   Escribir "Ingrese palabra1"
//   Leer palabra1
//   Escribir "Ingrese palabra2"
//   Leer palabra2
//   concatenar=palabra1+palabra2
//   Escribir concatenar
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function unir(){
   var palabra1 = "", palabra2 = "", concatenar = "";
   palabra1 = read("ingrese palabra1: ");
   palabra2 = read("ingrese palabra2: ");
   concatenar = palabra1+" "+palabra2;
   write(concatenar)
}
unir();
