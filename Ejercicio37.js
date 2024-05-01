//22.	Dado un arreglo de 5 elementos presentar la suma de dichos elementos.
//Analisis de requerimiento:
//Ent:arreglo=0(leer), suma=0(calcular)
//pro: ingresar arreglos
//     suma=suma+arreglo[i]
//Sal: mostrar suma

//Pseudocodigo
//ALgoritmo sumaArr
//   declarar arreglo=[], suma
//   Escribir "ingrese 5 elementos para su arreglo: "
//   para (i = 0 ; i<=4 ; i++)
//         arreglo[i]= Escribir ""
//                     leer numero ingresado
//   para (i = 0 ; i<=4 ; i++)
//         suma=suma+arreglo[i]
//   Escribir arreglo
//FinAlgoritmo 

const read = require('prompt-sync')();
const write = console.log

function sumaArr(){
    let arreglo=new Array (4)
    let suma=0
    write("ingrese 5 elementos para su arreglo: ")
    for (i = 0 ; i<=4 ; i++){
        arreglo[i]=parseInt(read(""))
    }
    for (i = 0 ; i<=4 ; i++){
        suma=suma+arreglo[i]
    }
    write(`La suma de los arreglos da: ${suma}`)
}
sumaArr()