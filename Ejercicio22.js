//7.	Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo.
//Analisis de requerimiento:
//Ent: nomb1=""(leer), nomb2=""(leer)
//pro: si (nomb1 === nomb2)
//        escribir "El número ingresado solo tiene un dígito."
//    sino si (nomb1 > nomb2)
//        escribir `nomb1 es mayor que nomb2.`
//    sino 
//        escribir `nomb1 es menor que nomb2.`
//Sal:mostrar mensaje

//pseudocodigo
//algoritmo maxMenIgu2
//Declarar nomb1="", nomb2=""
//escribir "ingrese un nombre: "
//leer nomb1
//escribir "ingrese otro nombre: "
//leer nomb2
//si (nomb1 === nomb2)
//        escribir `nomb1 es igual nomb2.`
//    sino si (nomb1 > nomb2)
//        escribir `nomb1 es mayor que nomb2.`
//    sino 
//        escribir `nomb1 es menor que nomb2.`
//    finsi
//finAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function maxMenIgu2(){
    let nomb1="", nomb2=""
    nomb1=read("ingrese un nombre: ")
    nomb2=read("ingrese otro nombre: ")
    if (nomb1 === nomb2) {
        write(`${nomb1} es igual ${nomb2}.`);
    } else if (nomb1 > nomb2) {
        write(`${nomb1} es mayor que ${nomb2}.`);
    } else {
        write(`${nomb1} es menor que ${nomb2}.`);
    }
}
maxMenIgu2()