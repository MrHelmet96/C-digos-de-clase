function alReves(texto) {
    const invertido = Array.from(texto).reverse().join("");
   return invertido;
}

var texto = prompt("Escriba un mensaje", ".sever la atse otsE");
var invertido = alReves(texto);
console.log(invertido);
