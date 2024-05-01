//6.	Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
//Analisis:
//Entrada: num1=0(leer), num2=0(leer), por=0(calcular)
//Salida: por

//Seupdocodigo:
//algoritmo Multiplicar
//   declarar num1 = 0, num2 = 0, por = 0;
//   Escribir "ingrese el primer numero a multiplicar: "
//   Leer num1
//   Escribir "ingrese el segundo numero a multiplicar: "
//   Leer num2
//   por = num1*num2;
//   Escribir El Resultado de multiplicar num1 por num2 es: por
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function Multiplicar(){
   var num1 = 0, num2 = 0, por = 0;
   num1 = read("ingrese el primer numero a multiplicar: ");
   num1 = parseInt(num1);
   num2 = read("ingrese el segundo numero a multiplicar: ");
   num2 = parseInt(num2);
   por = num1*num2;
   write(`El Resultado de multiplicar ${num1} por ${num2} es: ${por}`)
}
Multiplicar();