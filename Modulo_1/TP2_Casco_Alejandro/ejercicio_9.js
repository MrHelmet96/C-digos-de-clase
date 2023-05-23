// Consigna: Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales < 11. Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 5 “Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente”

const calificaciones = [];

while(true) {
    const inputNota = prompt(`Ingrese la nota del alumno (o ingrese "fin" cuando haya terminado la carga)`,`nota aquí`);

    if(inputNota.toLowerCase() === "fin") {
        break;
    }

    const nota = parseFloat(inputNota);

    if (nota <1 || nota >10 || isNaN(nota)) {
        alert(`La nota ingresada no es valida. \nIngrese una nota válida o "fin" para finalizar la carga.`)
        continue;
    }
    calificaciones.push(nota);
}

contador = 0;
suma_de_notas = 0;
for (nota of calificaciones) {
    suma_de_notas = suma_de_notas + nota;
    contador = contador + 1;
}
promedio = suma_de_notas / contador;

console.log(calificaciones);
console.log (suma_de_notas);
console.log(promedio);