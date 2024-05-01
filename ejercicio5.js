//5.	Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
//Analisis:
//Entrada: edadActu=0(leer), masUnAnio=0(calcular)
//PRoceso: calcular masUnAnio=edadActu+1
//Sal: masUnAnio

//seupdocodigo:
//algoritmo viejo
//   Declarar edadActu=0, masUnAnio=0
//   Escribir "Ingrese su edad "
//   Leer edadActu
//   masUnAnio= (edadActu+1)
//   Escribir `El proximo año tendras ${masUnAnio} años de edad.`
//FinAlgoritmo


const read = require('prompt-sync')();
const write = console.log

function viejo(){
var edadActu=0, masUnAnio=0
edadActu= read("Ingrese su edad ")
edadActu= parseInt(edadActu)
masUnAnio= (edadActu+1)
write(`El proximo año tendras ${masUnAnio} años de edad.`)
}
viejo()