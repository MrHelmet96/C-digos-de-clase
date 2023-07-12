// Consigna: Escribe un programa que pida una frase que contenga al menos 30 caracteres y luego escriba por pantalla cuántas veces aparecen cada una de las vocales.

// pedir una frase
let frase;

// Contar vocales
let vocal_a = 0;
let vocal_e = 0;
let vocal_i = 0;
let vocal_o = 0;
let vocal_u = 0;

let arreglo_a = ["a","A","á","Á"];
let arreglo_e = ["e","é","E","É"];
let arreglo_i = ["i","I","í","Í"];
let arreglo_o = ["o","O","ó","Ó"];
let arreglo_u = ["u","U","ú","Ú"];

do {
    frase = prompt("Por favor, ingrese una frase de 30 caracteres o más", "...");
    if (frase.length < 30) {
        alert("Su frase debe tener al menos 30 caracteres, pruebe otra frase");
    }
} while (frase.length < 30);

for(let i=0; i < frase.length; i++){
    if (arreglo_a.includes(frase[i])){
        vocal_a = vocal_a + 1;
    }
    if (arreglo_e.includes(frase[i])){
        vocal_e = vocal_e + 1;
    }
    if (arreglo_i.includes(frase[i])){
        vocal_i = vocal_i + 1;
    }
    if (arreglo_o.includes(frase[i])){
        vocal_o = vocal_o + 1;
    }
    if (arreglo_u.includes(frase[i])){
        vocal_u = vocal_u + 1;
    }
}

// escribir por pantalla
console.log(`usted escribio: ${frase}`);
console.log(`la vocal 'a' aparece ${vocal_a}`);
console.log(`la vocal 'e' aparece ${vocal_e}`);
console.log(`la vocal 'i' aparece ${vocal_i}`);
console.log(`la vocal 'o' aparece ${vocal_o}`);
console.log(`la vocal 'u' aparece ${vocal_u}`);
