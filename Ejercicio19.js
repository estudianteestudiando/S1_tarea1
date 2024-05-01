//4.	Solicitar al usuario un número y mostrar si es positivo o negativo.
//Analisis de requerimiento:
//Ent: num=0(leer)
//pro: si (num > 0) 
//         escribir ("El número ingresado es positivo.");
//     sino si (num === 0)
//         escribir ("El número ingresado es 0, intenta con otro número.");
//     sino
//         escribir ("El número ingresado es negativo.");
//Sal: mostrar mensaje

//pseudocodigo
//algoritmo posNeg
//decarar num=0
//escribir "ingrese un numero: "
//leer num
//si (num > 0) 
//    escribir ("El número ingresado es positivo.");
//sino si (num === 0)
//    escribir ("El número ingresado es 0, intenta con otro número.");
//sino
//    escribir ("El número ingresado es negativo.");
//finsi
//finAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function posNeg(){
    let num=0
    num = parseInt(read("ingrese un numero: "))
    if (num > 0) {
        write("El número ingresado es positivo.");
    } else if (num === 0) {
        write("El número ingresado es 0, intenta con otro número.");
    } else {
        write("El número ingresado es negativo.");
    }
}
posNeg()