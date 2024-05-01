//15.	Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí.
//Analisis de requerimiento:
//Ent: arreglo=[](leer), variable, i
//pro: variable = arreglo[0]
//     arreglo[0] = arreglo[4]
//     arreglo[4] = variable
//Sal: mostrar arreglos

//Pseudocodigo:
//algoritmo Cambiararre
//Declarar arreglo=[], variable, i
//Escribir "Ingrese 5 elementos para llenar su variable: "
//    para (i = 0 ; i <= 4 ; i++)
//         arreglo[i]= Escribir ""
//                     leer arreglo
//     variable = arreglo[0]
//     arreglo[0] = arreglo[4]
//     arreglo[4] = variable
//Escribir "Después de intercambiar el primer y último elemento su arreglo queda asi:"
// for (i = 0 ; i <= 4 ; i++){
//     escribir arreglo[i]
// FinAlgoritmo	

const read = require('prompt-sync')();
const write = console.log 

function Cambiararre(){
    let arreglo = new Array(4)
    let variable, i

    write("Ingrese 5 elementos para llenar su variable: ")

    for (i = 0 ; i <= 4 ; i++){
        arreglo [i] = parseInt(read(""))
    }

    variable = arreglo[0]
    arreglo[0] = arreglo[4]
    arreglo[4] = variable

    write("Después de intercambiar el primer y último elemento su arreglo queda asi:")
    for (i = 0 ; i <= 4 ; i++){
        write(arreglo[i])
    }

}
Cambiararre()

