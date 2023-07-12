// Escribe una función llamada calcularEdad que tome una fecha de nacimiento (representada como un objeto Date) como argumento y devuelva la edad actual en años.


function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date(); // Fecha actual
  
    // Resta el año de nacimiento del año actual
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  
    // Verifica si aún no ha cumplido años en el año actual
    if (
      fechaNacimiento.getMonth() > fechaActual.getMonth() ||
      (fechaNacimiento.getMonth() === fechaActual.getMonth() &&
        fechaNacimiento.getDate() > fechaActual.getDate())
    ) {
      edad--; // Resta 1 a la edad si no ha cumplido años aún
    }
  
    return edad;
  }
  
  // Ejemplo de uso:
  const fechaNacimiento = new Date('1990-05-10');
  
  const edad = calcularEdad(fechaNacimiento);
  console.log(edad); // Output: 32
  