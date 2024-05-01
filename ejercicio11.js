//11.	Solicitar al usuario una distancia en metros y mostrarla en centímetros.
//Analisis de requerimiento:
//Ent:metros=0.0(leer), centímetros=0.0(calcular)
//pro: centímetros= (metros*100)
//Sal: mostrar centimetros

//seupdocodigo:
//algoritmo macm
//   declarar metros=0.0, centímetros=0.0
//   Escribir "Ingrese los metros a transformar: "
//   Leer metros
//   centímetros= (metros*100)
//   Escribir centimetros
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function macm(){
var metros=0.0, centímetros=0.0
metros= read("Ingrese los metros a transformar: ")
metros=parseFloat(metros)
centímetros= (metros*100)
write(`Ahora tenemos ${centímetros} centimetros`)
}
macm()