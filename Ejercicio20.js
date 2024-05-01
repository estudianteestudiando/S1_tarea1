//5.	Pedir al usuario dos números y mostrar si son iguales o diferentes.
//Analisis de requerimiento:
//Ent: num1=0.0(leer) num2=0.0(leer)
//pro: si (num1===num2)
//         escribir "Los números ingresados son iguales."
//     sino
//         escribir "Los números ingresados son diferentes."
//Sal:mostrar mensaje.

//Pseudocodigo
//algoritmo igualDiferente
//declarar num1=0.0, num2=0.0
//Escribir "Ingrese el primer número: "
//leer num1
//Escribir "Ingrese el segundo número: "
//leer num2
//     si (num1===num2)
//         escribir "Los números ingresados son iguales."
//     sino
//         escribir "Los números ingresados son diferentes."
//     finsi
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function igualDiferente() {
    let num1=0.0, num2=0.0
    num1 = parseFloat(read("Ingrese el primer número: "))
    num2 = parseFloat(read("Ingrese el segundo número: "))
    if (num1===num2) {
        write("Los números ingresados son iguales.")
    } else {
        write("Los números ingresados son diferentes.")
    }
}
igualDiferente()