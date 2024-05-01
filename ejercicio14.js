//14.	Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo.
//Analisis de requerimiento:
//Ent: arreglo=[](leer)
//pro:for (i = 0 ; i<=4 ; i++)
//        arreglo[i]=leer ""
//Sal: mostrar arreglo

//Pseudocodigo:
//algoritmo losTres
//Declarar arreglo=[]
//Escribir "ingrese 5 elementos para su arreglo: "
//    para (i = 0 ; i <= 4 ; i++)
//         arreglo[i]= Escribir ""
//                     leer arreglo
//    escribir (arreglo[0], arreglo[2], arreglo[4])
// FinAlgoritmo	

const read = require('prompt-sync')();
const write = console.log

function losTres(){
    let arreglo=new Array (4)
    write("ingrese 5 elementos para su arreglo: ")
    for (i = 0 ; i<=4 ; i++){
        arreglo[i]=read("")
    }
    write(arreglo[0], arreglo[2], arreglo[4])
}
losTres()