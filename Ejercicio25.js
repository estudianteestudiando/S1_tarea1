//10.	Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
//Analisis de requerimiento:
//Ent: num=0(leer)
//pro: si (num === 100)
//    escribir "El número es igual a 100"
//sino si (num > 100) {
//    escribir "El número es mayor que 100"
//sino 
//    escribir "El número es menor que 100"
//Sal:mostrar mensaje

//pseudocodigo
//algoritmo maxMenIgu
//Declarar num=0
//Escribir "Ingrese un numero para averiguar si es mayor, menor o igual a 100: "
//leer num
//    si (num === 100)
//        escribir "El número ingresado solo tiene un dígito."
//    sino si (num > 100) 
//        escribir "El número es mayor que 100"
//    sino 
//        escribir "El número es menor que 100"
//    finSi
//finAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function maxMenIgu(){
    let num=0
    num= read("Ingrese un numero para averiguar si es mayor, menor o igual a 100: ")
    num= parseInt(num)
    if (num === 100) {
        write("El número es igual a 100");
    } else if (num > 100) {
        write("El número es mayor que 100");
    } else {
        write("El número es menor que 100");
    }
}
maxMenIgu()