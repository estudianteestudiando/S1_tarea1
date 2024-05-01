//11.	Solicitar al usuario un número y mostrar si es un número de un solo dígito.
//Analisis de requerimiento:
//Ent: num=0(leer)
//pro:si si (num >= 0 && num <= 9)
//        escribir "El número ingresado solo tiene un dígito."
//    entonces
//        escribir "El número ingresado tiene mas de un dígito."
//Sal: mostrar mensaje

//Pseudocodigo
//algoritmo unSoNo
// Declarar num=0
// Escribir "ingrese cualquier numero: "
// leer num
//    si (num >= 0 && num <= 9)
//        escribir "El número ingresado solo tiene un dígito."
//    sino 
//        escribir "El número ingresado tiene mas de un dígito."
//    finSi
//finAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function unSoNo(){
    let num=0
    num=parseInt(read("ingrese cualquier numero: "))
    if (num >= 0 && num <= 9){
        write("El número ingresado solo tiene un dígito.")
    }else{
        write("El número ingresado tiene mas de un dígito.")
    }
}
unSoNo()