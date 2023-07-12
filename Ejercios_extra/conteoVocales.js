// Consigna: Escribe un programa que pida una frase que contenga al menos 30 caracteres y luego escriba por pantalla cuántas veces aparecen cada una de las vocales.

//pedir una frase
let inputFrase = prompt("Por favor, escriba una frase de al menos 30 caracteres", "...");

// Crear un objeto para almacenar las vocales y sus frecuencias
const vocales = {
  a: 0,
  e: 0,
  i: 0,
  o: 0,
  u: 0
};

// Convertir la frase a minúsculas para hacer las comparaciones de forma insensible a mayúsculas
const inputMinuscula = inputFrase.toLowerCase();

// Recorrer cada caracter de la frase
for (let i = 0; i < inputMinuscula.length; i++) {
  const caracter = inputMinuscula[i];
  
  // Verificar si el caracter es una vocal
  if (caracter in vocales) {
    // Incrementar el contador de la vocal correspondiente
    vocales[caracter]++;
  }
}

// Mostrar las frecuencias de las vocales en la frase
for (let vocal in vocales) {
  document.write(`La vocal ${vocal} aparece ${vocales[vocal]} veces<br>`);
}