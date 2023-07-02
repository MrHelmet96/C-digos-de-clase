// Crea un objeto llamado calculadoraAvanzada con métodos cuadrado y cubo que tomen un número como argumento y devuelvan el resultado correspondiente.

const calculadoraAvanzada = {
    cuadrado: function(numero) {
      return numero ** 2;
    },
    cubo: function(numero) {
      return numero ** 3;
    }
  };
  
  // Ejemplo de uso:
  console.log(calculadoraAvanzada.cuadrado(5)); // Output: 25
  console.log(calculadoraAvanzada.cubo(3)); // Output: 27
  