//6.	Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
//Analisis de requerimiento:
//Ent: vocales=""(leer)
//pro: si (vocales === 'a' o vocales === 'e' o vocales === 'i' o vocales === 'o' o vocales === 'u'o vocales === 'A' o vocales === 'E' o vocales === 'I' o vocales === 'O' o vocales === 'U')
//         escribir "El carácter ingresado es una vocal."
//     sino
//         escribir "El carácter ingresado es una consonante."
//Sal: mostrar mensaje

//Pseudocodigo
//algoritmo vocalOConso
//Declarar vocales=""
//Escribir "ingrese una vocal y una consonante: "
//leer vocales
//     si (vocales === 'a' o vocales === 'e' o vocales === 'i' o vocales === 'o' o vocales === 'u'o vocales === 'A' o vocales === 'E' o vocales === 'I' o vocales === 'O' o vocales === 'U')
//         escribir "El carácter ingresado es una vocal."
//     sino
//         escribir "El carácter ingresado es una consonante."
//     finSi
//finAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function vocalOConso(){
    let vocales=""
    vocales=read("ingrese una vocal y una consonante: ")
    if (vocales === 'a' || vocales === 'e' || vocales === 'i' || vocales === 'o' || vocales === 'u'|| vocales === 'A' || vocales === 'E' || vocales === 'I' || vocales === 'O' || vocales === 'U') {
        write("El carácter ingresado es una vocal.");
    } else {
        write("El carácter ingresado es una consonante.");
    }
}
vocalOConso()
