//12.	Pedir 5 números y asignarlos en un arreglo.
//Analisis de requerimiento:
//Ent:num1=0(leer), num2=0(leer), num3=0(Leer), num4=0(leer), num5=0(leer), arreglo=[](calcular)
//pro:arreglo=[num1,num2,num3,num4,num5]
//Sal: mostrar mensaje

//Pseudocodigo:
//algoritmo arreglo
//   declarar arreglo=[]
//   Escribir "ingrese 5 numeros para su arreglo: "
//   para (i = 0 ; i<=4 ; i++)
//         arreglo[i]= Escribir ""
//                     leer numero ingresado
//   Escribir arreglo
//FinAñgoritmo 

const read = require('prompt-sync')();
const write = console.log

function arreglo(){
    var arreglo=new Array(4)
    write("ingrese 5 numeros para su arreglo: ")
    for (i = 0 ; i<=4 ; i++){
        arreglo[i]=parseInt(read(""))
    }
    write(arreglo)
}
arreglo()