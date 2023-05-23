// Consigna: Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días. Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días.

let INPUTmes = parseInt(prompt("Ingrese el número del mes (1-12):"));

while (mes < 1 || mes > 12 || isNaN(mes)) {
    alert("Ingrese un número de mes válido (entre 1 y 12).");
    mes = parseInt(prompt("Ingrese el número del mes (1-12):"));
  }

const thisYear = new Date().getFullYear();
const fecha = new Date(thisYear, mes - 1, 1);
fecha.setMonth(fecha.getMonth() + 1);
fecha.setDate(fecha.getDate() - 1);

const cantidadDias = fecha.getDate();

const nombresMeses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

const nombreMes = nombresMeses[mes - 1];

document.write(`El mes ${mes} es ${nombreMes} y tiene ${cantidadDias} días.`);
