//21.	Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor.
//Analisis de requerimiento:
//Ent: arreglo=[](leer), Mayor=0(calcular) 
//pro: ingresar arreglos
//     mayor = arreglo[0]
//     si arreglo[i]>mayor
//        mayor = arreglo[i]
//Sal: mostrar mayor

//Pseudocodigo:
//algoritmo arreMayor
//Declarar mayor=0
//Escribir "Ingrese 3 elementos para hacer el arreglo:"
//Para (i <- 1 Hasta 3 Hacer
//    para (let i = 0 ; i <= 2; i++)
//         arreglo[i]= Escribir ""
//                     leer numero ingresado
//mayor = arreglo[0]
//   para (i = 0 ; i<=4 ; i++)
//         ai (arreglo [i] > mayor)
//             mayor = arreglo [i]
//Escribir "El elemento mayor es:", mayor
// FinAlgoritmo	

const read = require('prompt-sync')();
const write = console.log 

function arreMayor(){
    let arreglo = new Array (2)
    let mayor = 0
    write("Ingrese 3 elementos para el arreglo: ")
    for (let i = 0 ; i <= 2; i++){
        arreglo [i] = parseInt(read(""))
    }
    mayor = arreglo [0]

    for (i = 1 ; i <= 2 ; i++){
        if (arreglo [i] > mayor){
            mayor = arreglo [i]
        }
    }
    write("De todos los elementos ingresados el mayor es:", mayor)
}
arreMayor()