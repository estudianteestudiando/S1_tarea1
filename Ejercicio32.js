//17.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
//Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
//Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.
//Analisis de requerimiento:
//Ent: tamGuineo = 0(leer), preInicial = 0(calcular), ganancia = 0(calcular), tipoGuineo = ""(leer)
//pro:si tipoGuineo === "A"
//       si tamGuineo === 1
//          preInicial = 10
//          ganancia = preInicial + 2
//       sino 
//          preInicial = 10
//          ganancia = preInicial + 3    
//    sino
//       si tamGuineo === 1
//          preInicial = 10
//          ganancia = preInicial - 3
//       sino
//         preInicial = 10
//         ganancia = preInicial - 5
//Sal: Mostrar mensaje.

//seupdocodigo:
//algoritmo guineos
//   Declarar tamGuineo = 0, preInicial = 0, ganancia = 0, tipoGuineo = ""
//   Escribir "Ingrese el tipo del Guino. (A o B): "
//   Leer tipoGuineo
//   Escribir "Ingrese el tamaño del Guineo. (1 o 2): "
//   Leer tamGuineo
//    si tipoGuineo === "A"
//       si tamGuineo === 1
//          preInicial = 10
//          ganancia = preInicial + 2
//       sino
//          preInicial = 10
//          ganancia = preInicial + 3    
//    sino
//       si tamGuineo === 1
//          preInicial = 10
//          ganancia = preInicial - 3
//       sino
//         preInicial = 10
//         ganancia = preInicial - 5
//    finSi
//   Escribir La ganancia obtenida es de ${ganancia} dolares.
// finAlgoritmo

const read = require('prompt-sync')();
const write = console.log 


function guineos(){
    let tamGuineo = 0, preInicial = 0, ganancia = 0
    let tipoGuineo = ""
 
    tipoGuineo = read("Ingrese el tipo del Guino. (A o B): ")
    tamGuineo = parseInt(read("Ingrese el tamaño del Guineo. (1 o 2): "))

    if (tipoGuineo === "A"){
        if (tamGuineo === 1){
            preInicial = 10
            ganancia = preInicial + 2
        }else{
            preInicial = 10
            ganancia = preInicial + 3
        }  
    }else{
        if (tamGuineo === 1){
            preInicial = 10
            ganancia = preInicial - 3
        }else{
            preInicial = 10
            ganancia = preInicial - 5
        }
    }

    write(`La ganancia obtenida es de ${ganancia} dolares.`)
}
guineos()