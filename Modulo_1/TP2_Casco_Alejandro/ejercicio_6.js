// Consigna: Escribir un script que muestre la posición de la primera vocal de un texto introducido por teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1

const texto = prompt("Ingrese un texto:");

function encontrarPrimeraVocal(texto) {
  const vocales = ["a", "e", "i", "o", "u","A","E","I","O","U"];

  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    if (vocales.includes(caracter)) {
      // let posicion = i + 1;
      return `La primera vocal es "${texto[i]}" y está en la posición ${i+1}.`;
    }
  }
  return "No se encontraron vocales en el texto.";
}

const resultado = encontrarPrimeraVocal(texto);
document.write(resultado);
