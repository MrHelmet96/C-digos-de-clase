

let inputString = prompt("Por favor, ingresé un mensaje o palabra a elección:","...");


function analizarTexto(texto) {
    if (texto === texto.toUpperCase()){
        return "todos los caracteres de su string están en mayúscula";
    } else if (texto === texto.toLowerCase()){
        return "todos los caracteres de su string están en minúsculas";
    } else {
        return "Este texto contiene tanto minúsculas como mayúsculas";
    }
}

document.write(analizarTexto(inputString));