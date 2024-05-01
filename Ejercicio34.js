//19.	Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
//Analisis de requerimiento:
//Ent: arreglo=0(leer), ele1=0(calcular), ele2(calcular)
//pro:  primer_elemento = arreglo [1]
//      ultimo_elemento = arreglo [5]
//      si (primer_elemento > ultimo_elemento)
//          escribir "El primer elemento es mayor que el último elemento"
//      sino
//          escribir "El primer elemento no es mayor que el último elemento"
//      finsi
//Sal: mostrar mensaje

//Pseudocodigo:
//algoritmo priMayUlt
//declarar primer_elemento = 0, ultimo_elemento = 0, arreglo=0
//Escribir "Ingrese 5 números para el arreglo:"
//          Para i <- 1 Hasta 5 Hacer
//               Escribir "Número ", i, ": "
//               Leer arreglo[i]
//          FinPara
//          primer_elemento <- arreglo[1]
//          ultimo_elemento <- arreglo[5]
//          Si primer_elemento > ultimo_elemento Entonces
//             Escribir "El primer elemento es mayor que el último elemento."
//          Sino
//             Escribir "El primer elemento no es mayor que el último elemento."
//          FinSi	
//finAlgoritmo

const read = require('prompt-sync')();
const write = console.log 

function priMayUlt(){
    let arreglo = new Array (4)
    let ele1 = 0, ele2 = 0

    write("Escribir 5 números para el arreglo: ")
    for (let i = 0; i <= 4 ; i++){
        arreglo [i] = read("")
    }
    ele1 = arreglo [0]
    ele2 = arreglo [4]
    
    if (ele1 > ele2){
        write("El primer elemento es mayor que el último elemento")
    }else{
        write("El primer elemento no es mayor que el último elemento")
    }
}

priMayUlt()