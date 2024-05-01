//18.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
//El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
//Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva
//Analisis de requerimiento:
//Ent: costopersonal=20.00(calcular), numeroDePersonas=0(leer), preTotal=0(calcular), total=0(calcular), PostTotal=0(calcular)
//pro: si numeroDePersonas > 100 && numeroDePersonas <= 200
//             entonces
//                 costopersonal = 15.00
//     sino si numeroDePersonas > 200
//             entonces
//                 costopersonal= 10.00
//             finSi
//     preTotal=costopersonal*numeroDePersonas
//     total=preTotal*0.15
//     PostTotal=preTotal+total
//Sal: mostrar mensaje.

//seupdocodigo:
//algoritmo somosMas
//   Declarar costopersonal=20.00, numeroDePersonas=0, preTotal=0, total=0, PostTotal=0
//   Escribir "ingrese el numero de personas: "
//   Leer numeroDePersonas
//   si numeroDePersonas > 100 && numeroDePersonas <= 200
//             entonces
//                 costopersonal = 15.00
//   sino si numeroDePersonas > 200
//             entonces
//                 costopersonal= 10.00
//             finSi
//   preTotal=costopersonal*numeroDePersonas
//   total=preTotal*0.15
//   PostTotal=preTotal+total
//   Escribir El costo total a pagar por cada invitado es de ${PostTotal} dolares incluyendo el iva.
// finAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function somosMas(){
    let costopersonal=20.00, numeroDePersonas=0, preTotal=0, total=0, PostTotal=0
     numeroDePersonas= read("ingrese el numero de personas: ")
     numeroDePersonas=parseInt(numeroDePersonas)
     if(numeroDePersonas > 100 && numeroDePersonas <= 200){
     costopersonal = 15.00
     }
     else if(numeroDePersonas > 200){
        costopersonal= 10.00
     }
     preTotal=costopersonal*numeroDePersonas
     total=preTotal*0.15
     PostTotal=preTotal+total
     write(`El costo total a pagar por cada invitado es de ${PostTotal} dolares incluyendo el iva.`)
 }
 somosMas()
 