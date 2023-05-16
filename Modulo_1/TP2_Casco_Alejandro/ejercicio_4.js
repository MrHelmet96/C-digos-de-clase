let valorIngresado = prompt("Por favor, Ingrese un número(entero y mayor que cero)", "...");

let numero = parseInt(valorIngresado);

if ((numero % 2) == 0){
    console.log(`el numero ${numero} es par`);
} else {
    console.log(`el numero ${numero} es impar`);
}