
var valores = [true, false, 2, "hola", "mundo", 3, "char"];

let masLargo = "";
var nuevoArreglo = [];
var arregloNumeros = [];


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
 