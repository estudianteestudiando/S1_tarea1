//7.	Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
//Analisis
//Entrada: gradosFar""(calcular), gradosCel""(leer)
//Proceso: calcular gradosFar = (gradosCel*9/5)+32
//Salida: mostrar= gradosFar

//seupdocodigo:
//algoritmo cambio
//   declarar gradosCel="", gradosFar=""
//   Escribir "ingrese los grados celsius: "
//   Leer gradosFar
//   gradosFar= (gradosCel*9/5)+32
//   Escribir gradosFar
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function cambio(){
var gradosCel=0.0, gradosFar=0.0
gradosCel= read("Ingrese los grados celsius: ")
gradosCel=parseFloat(gradosCel)
gradosFar= (gradosCel*9/5)+32
write(`La temperatura a cambiado a ${gradosFar} grados Fahrenheit`)
}
cambio()