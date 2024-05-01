//20.	Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.
//Analisis de requerimiento:
//Ent: primerEle=0(calcular), ultiEle=0(calcular), arreglo=[](leer)
//pro: si primerEle % 2 === 0
//        si ultiEle % 2 === 0
//      escribir "El primer número es par y el último también."
//       sino
//      escribir "El primer número es par y el último es impar."
//    sino
//    si ultiEle % 2 === 0
//      escribir "El primer número es impar y el último es par."
//      sino
//      escribir "El primer número es impar y el último también."
//Sal: mostrar mensaje.

//seupdocodigo:
//algoritmo parImpar
//   Declarar primerEle=0, ultiEle=0, arreglo=[]
//   Escribir "ingrese 5 numeros para su arreglo: "
//   si primerEle % 2 === 0
//        si ultiEle % 2 === 0
//      escribir "El primer número es par y el último también."
//       sino
//      escribir "El primer número es par y el último es impar."
//    sino
//    si ultiEle % 2 === 0
//      escribir "El primer número es impar y el último es par."
//      sino
//      escribir "El primer número es impar y el último también."
//             finSi
//finAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function parImpar(){
  let primerEle=0, ultiEle=0, arreglo=[]
  write("ingrese 5 numeros para su arreglo: ")
  for (i = 0 ; i<=4 ; i++){
    arreglo[i]=parseInt(read(""))
}
primerEle= arreglo[0]
ultiEle=arreglo[4]
if (primerEle % 2 === 0) {
    if (ultiEle % 2 === 0) {
      write("El primer número es par y el último también.");
    } else {
      write("El primer número es par y el último es impar.");
    }
  } else {
    if (ultiEle % 2 === 0) {
      write("El primer número es impar y el último es par.");
    } else {
      write("El primer número es impar y el último también.");
    }
  }
}
parImpar()