
var valores = [true, false, 2, "hola", "mundo", 3, "char"];

for (let valor of valores) {
    if (valor.tipeof(String)){
        if (valor.length > longitud){
            mayor = valor
            longitud = valor.length
        } 
    }
}
console.log("el mayor valor es: " + mayor);