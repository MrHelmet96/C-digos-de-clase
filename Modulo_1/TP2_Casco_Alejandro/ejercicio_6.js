// Consigna: Escribir un script que muestre la posición de la primera vocal de un texto introducido por teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1

// let inputTexto = prompt("Ingrese una palabra o mensaje a elección", "...");

// const vocales = ["a","e","i","o","u","A","E","I","O","U"];

// for (let i=0; i < inputTexto.length; i++) {

//     let primeraVocal = inputTexto[i]

//     if (vocales.includes(primeraVocal)){
//         var posicion = i + 1;
        
//     }
//     document.write(`Su mensaje contiene como primera vocal la letra "${inputTexto[i]}" en la posición ${posicion} <br/>`);
// }

const texto = prompt("Ingrese un texto:");

function encontrarPrimeraVocal(texto) {
  const vocales = ["a", "e", "i", "o", "u","A","E","I","O","U"];

  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i];
    if (vocales.includes(caracter)) {
      const posicion = i + 1;
      return `La primera vocal es "${texto[i]}" y está en la posición Nº${posicion}.`;
    }
  }
  return "No se encontraron vocales en el texto.";
}

const resultado = encontrarPrimeraVocal(texto);
document.write(resultado);
