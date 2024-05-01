//3.	Solicitar al usuario dos números y mostrar su suma.
//Analisis:
//Entrada: primerNum=0(leer), segundoNum=0(leer), mas=0(calcular)
//Proceso: mas=primerNum+segundoNum
//Salida: mas

//Seupdocodigo:
//algoritmo suma
//   declarar primerNum = 0, segundoNum = 0, mas = 0;
//   Escribir "ingrese el primer numero: "
//   Leer primerNum
//   Escribir "ingrese el segundo numero: "
//   Leer segundoNum
//   mas = primerNum+segundoNum;
//   Escribir Su Resultado es: mas
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function Suma(){
   var primerNum = 0, segundoNum = 0, mas = 0;
   primerNum = read("ingrese el primer numero: ");
   primerNum = parseInt(primerNum);
   segundoNum = read("ingrese el segundo numero: ");
   segundoNum = parseInt(segundoNum)
   mas = primerNum+segundoNum;
   write(`Su Resultado es: ${mas}`)
}
Suma();