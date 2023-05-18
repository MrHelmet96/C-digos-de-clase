//Consigna: A partir del siguiente array que se proporciona:
var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// 1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
// 2. Imprimir estos elementos de menor a mayor cantidad de letras.
// 3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta, multiplicación y división) realizadas con los dos elementos numéricos.

let masLargo = "";
let nuevoArreglo = [];
let arregloNumeros = [];


for(let i=0; i < valores.length; i++){
    
    if (typeof valores[i] == "string"){
        
        if (valores[i].length > masLargo.length) {
            masLargo = valores[i];
        }

        nuevoArreglo.push(valores[i]);
    }

    if (typeof valores[i] == "number"){
        arregloNumeros.push(valores[i]);
    }

 }

 let suma = arregloNumeros[0];
 let resta = arregloNumeros[0];
 let multiplicacion = arregloNumeros[0];
 let division = arregloNumeros[0];

 nuevoArreglo.sort(function(a,b){
    return a.length - b.length;
 });

 for (let i=0; i < arregloNumeros.length; i++){
    numero = arregloNumeros[i];
    
    suma += numero;
    resta -= numero;
    multiplicacion *= numero;
    division /= numero;
 }

 console.log("La palabra más larga dentro del array es:", masLargo);

 console.log("Los string de más corto a más largo: ", nuevoArreglo);

 console.log(`la suma de los elementos es: ${suma}`)
 console.log(`la resta de los elementos es: ${resta}`)
 console.log(`la multiplicación de los elementos es: ${multiplicacion}`)
 console.log(`la division de los elementos es: ${division}`)
 