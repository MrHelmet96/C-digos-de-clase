// Escribe una función llamada filtrarPares que tome un array de números como argumento y devuelva un nuevo array que contenga solo los números pares del array original.

function filtrarPares(numeros) {
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    return numerosPares;
  }
  
  // Ejemplo de uso:
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const numerosPares = filtrarPares(numeros);
  console.log(numerosPares); // Output: [2, 4, 6, 8, 10]
  