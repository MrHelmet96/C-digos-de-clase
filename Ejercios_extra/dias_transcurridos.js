// Escribe una función llamada diasTranscurridos que tome dos fechas (representadas como objetos Date) como argumentos y devuelva el número de días transcurridos entre esas dos fechas.

function diasTranscurridos(fechaInicio, fechaFin) {
    // Calcula la diferencia en milisegundos entre las dos fechas
    const diferencia = fechaFin.getTime() - fechaInicio.getTime();
  
    // Convierte la diferencia en días redondeando hacia abajo
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  
    return dias;
  }
  
  // Ejemplo de uso:
  const fechaInicio = new Date('2023-01-01');
  const fechaFin = new Date('2023-01-10');
  
  const dias = diasTranscurridos(fechaInicio, fechaFin);
  console.log(dias); // Output: 9
  