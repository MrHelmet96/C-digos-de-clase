// Consigna: Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego imprima por pantalla usando document.write().

function numerosAleatorios(min, max){
    
    numeroAlAzar = numerosAleatorios(1,100)
    numeroRedondo = Math.round(numeroAlAzar);

    for (let i=1; i <= 100; i++) {
    
        return Math.random() * (max - min) + min;        
    
        document.write(`número ${i}: ${numeroRedondo} <br/>`);       
    
    }
    
}




