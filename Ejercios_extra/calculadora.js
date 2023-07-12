// Consigna: Fabricar una calculadora utilizando funciones, es decir, que haya una función por cada operación matemática (como mínimo las 4 operaciones básicas, si quieren agregar más funciones depende de ustedes). Dicho algoritmo pedirá 3 datos por pantalla: primero la operación a realizar mediante el método que quiera, ya sea string o un número (ej; seleccione 1 para sumar, 2 para restar, etc), luego otros dos valores numéricos para realizar la operación. El resultado debe reflejarse por pantalla como una frase, por ejemplo: "Usted a ingresado un 4 y un 9, el resultado de la multiplicación entre ambos es 36"


// Declarando funciones
function sumar(num1, num2){
    resultado = num1 + num2;
    document.write(`Usted a ingresado un ${num1} y un ${num2}, el resultado de la suma entre ambos es ${resultado}`);
}
function restar(num1, num2){
    resultado = num1 - num2;
    document.write(`Usted a ingresado un ${num1} y un ${num2}, el resultado de la resta entre ambos es ${resultado}`);
}
function dividir(num1, num2){
    resultado = num1 / num2;
    document.write(`Usted a ingresado un ${num1} y un ${num2}, el resultado de la división entre ambos es ${resultado}`);
}
function multiplicar(num1, num2){
    resultado = num1 * num2;
    document.write(`Usted a ingresado un ${num1} y un ${num2}, el resultado de la multiplicación entre ambos es ${resultado}`);
}

// Pedir al usuario que ingrese qué operación desea realizar
let operacion = 0;
do {
    operacion = parseInt(prompt("Qué operación desea realizar? (ingrese el número segun corresponda)", "1- suma, 2- resta, 3- división, 4- multiplicación"));
    if (isNaN(operacion) || operacion < 1 || operacion > 4 ) {
        alert("Usted ingresó un número no valido. Pruebe otra vez")
    }
} while (isNaN(operacion) || operacion < 1 || operacion > 4 );

let num1 = parseInt(prompt("Ingrese el primer número","..."));
let num2 = parseInt(prompt("Ingrese el segundo número","..."));

if (operacion == 1) {
    sumar(num1, num2);
} else if (operacion == 2) {
    restar(num1, num2);
} else if (operacion == 3) {
    dividir(num1, num2);
} else if (operacion == 4) {
    multiplicar(num1,num2);
}
