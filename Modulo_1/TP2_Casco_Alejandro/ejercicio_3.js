//Pedir al usuario que ingrese un número y asignar ese valor a una variable
let valorIngresado = prompt("Por favor, Ingrese un número(entero y mayor que cero)", "...");

let numero = parseInt(valorIngresado);

let factorial = 1

for (i=1; i <= numero; i++){
    factorial = factorial * i
}
console.log(factorial);