//8.	Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
//Analisis de requerimiento:
//Ent: nombre=""(leer)
//pro: Escribe= nombre,Escribe= nombre,Escribe= nombre,Escribe= nombre,
//Sal: nombre
//     nombre
//     nombre

//pseudocodigo
//Algoritmo repetir
//   Declarar nombre=""
//   Escribir "Escribe un nombre: "
//   Leer nombre
//   Escribir nombre
//   Escribir nombre
//   Escribir nombre
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function repetir(){
    var nombre=""
    nombre=read("Escribe un nombre: ")
    write(nombre)
    write(nombre)
    write(nombre)
}
repetir()