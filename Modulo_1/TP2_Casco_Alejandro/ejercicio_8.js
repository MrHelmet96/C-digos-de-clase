// Consigna: Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego imprima por pantalla usando document.write().

function numerosAleatorios(){
    const numsGenerados = [];

    for (let i=1; numsGenerados.length < 100; i++) {
       let numero = Math.floor(Math.random() * 100) + 1;               
    
       if(!numsGenerados.includes(numero)) {
        numsGenerados.push(numero);
       }
    }
    
    numsGenerados.forEach(function(numero, indice) {
        let posicion = indice + 1;
        document.write(`Posición ${posicion}: ${numero}<br>`);
    })
}

numerosAleatorios();





