//9.	Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
//Analisis de requerimiento:
//Ent:numero=0(leer), mult1=0(calcular), mult2=0(calcular), mult3=0(calcular), mult4=0(calcular), mult5=0(calcular), mult6=0(calcular), mult7=0(calcular), mult8=0(calcular), Mult9=0(calcular), mult10=0(calcular)
//pro:mult1= numero*1
//    mult2= numero*2
//    mult3= numero*3
//    mult4= numero*4
//    mult5= numero*5
//    mult6= numero*6
//    mult7= numero*7
//    mult8= numero*8
//    Mult9= numero*9
//    mult10= numero*10
//Sal: mult1
//    mult2
//    mult3
//    mult4
//    mult5
//    mult6
//    mult7
//    mult8
//    Mult9
//    mult10

//Seupdocodigo:
//algoritmo tablas
//   declarar palabra1="", palabra2="", concatwnar=""
//   Escribir "ingrese el numero: "
//   Leer numero
//   mult1= numero*1
//   mult2= numero*2
//   mult3= numero*3
//   mult4= numero*4
//   mult5= numero*5
//   mult6= numero*6
//   mult7= numero*7
//   mult8= numero*8
//   Mult9= numero*9
//   mult10= numero*10
//   Escribir numero x 1= mult1
//   Escribir numero x 2= mult2
//   Escribir numero x 3= mult3
//   Escribir numero x 4= mult4
//   Escribir numero x 5= mult5
//   Escribir numero x 6= mult6
//   Escribir numero x 7= mult7
//   Escribir numero x 8= mult8
//   Escribir numero x 9= Mult9
//   Escribir numero x 10= mult10
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function tablas(){
    var numero=0, mult1=0, mult2=0, mult3=0, mult4=0, mult5=0, mult6=0, mult7=0, mult8=0, Mult9=0, mult10=0
    numero= read("ingrese el numero: ")
    numero= parseInt(numero)
    mult1= numero*1
    mult2= numero*2
    mult3= numero*3
    mult4= numero*4
    mult5= numero*5
    mult6= numero*6
    mult7= numero*7
    mult8= numero*8
    Mult9= numero*9
    mult10= numero*10
    write(`${numero} x 1= ${mult1}`)
    write(`${numero} x 2= ${mult2}`)
    write(`${numero} x 3= ${mult3}`)
    write(`${numero} x 4= ${mult4}`)
    write(`${numero} x 5= ${mult5}`)
    write(`${numero} x 6= ${mult6}`)
    write(`${numero} x 7= ${mult7}`)
    write(`${numero} x 8= ${mult8}`)
    write(`${numero} x 9= ${Mult9}`)
    write(`${numero} x 10= ${mult10}`)
}
tablas()