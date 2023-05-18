// Consigna: Escribir un script que muestre la posición de la primera vocal de un texto introducido por teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1

let inputTexto = prompt("Ingrese una palabra o mensaje a elección", "...");

const vocales = ["a","e","i","o","u"];

for (let i=0; i < inputTexto.length; i++) {

    let primeraVocal = inputTexto[i].toLowerCase();

    if (inputTexto.includes(primeraVocal)){
        console.log(`su mensaje incluye una vocal ()`)
    }
}
