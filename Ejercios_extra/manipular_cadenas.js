// Escribe una función llamada capitalizarPalabras que tome una cadena de texto como argumento y devuelva la misma cadena, pero con la primera letra de cada palabra en mayúscula.

function capitalizarPalabras(cadena) {
    const palabras = cadena.split(" ");
    const palabrasCapitalizadas = palabras.map((palabra) => {
      const primeraLetra = palabra.charAt(0).toUpperCase();
      const restoPalabra = palabra.slice(1);
      return primeraLetra + restoPalabra;
    });
    return palabrasCapitalizadas.join(" ");
  }
  
  const texto = prompt("Ingrese un texto","hola mundo, cómo estás?");
  const resultado = capitalizarPalabras(texto);
  console.log(resultado);
  