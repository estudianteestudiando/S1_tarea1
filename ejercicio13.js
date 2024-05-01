//13.	Dado un arreglo de 5 nombres presentarlos todos.
//Analisis de requerimiento:
//Ent: arreglo=""(leer)
//pro: para (i = 0 ; i<=4 ; i++)
//          Escribir ""
//          leer arreglo[i]
//Sal: mostrar arreglo

//Pseudocodigo:
//algoritmo losTres
//Declarar arreglo=[]
//Escribir "ingrese 5 nombres para su arreglo: "
//    para (i = 0 ; i <= 4 ; i++)
//         arreglo[i]= Escribir ""
//                     leer arreglo
//    escribir (arreglo)
// FinAlgoritmo	

const read = require('prompt-sync')();
const write = console.log

function nombres(){
    let arreglo=new Array (4)
    write("ingrese 5 nombres para su arreglo: ")
    for (i = 0 ; i<=4 ; i++){
        arreglo[i]=read("")
    }
    write(arreglo)
}
nombres()