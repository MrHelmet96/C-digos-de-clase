//Escribe una función llamada contarPropiedades que tome un objeto como argumento y devuelva el número de propiedades que tiene ese objeto.

let persona = {
    nombre: 'Alejandro',
    apellido: 'Casco',
    edad: 28,
    profesion: 'Programador',
    ciudad: 'Posadas' 
}

function contarPropiedades(object) {
    let num_propiedades = Object.keys(object).length;
    document.write(`la cantidad de propiedades del este objeto es: ${num_propiedades}`);
}

contarPropiedades(persona);