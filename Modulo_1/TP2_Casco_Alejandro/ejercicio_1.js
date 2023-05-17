
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
let masLargo = "";
for(let i=0; i < valores.length; i++){
    
    if (typeof valores[i] == "string"){
        
        if (valores[i].length > masLargo.length) {
            masLargo = valores[i];
        }
    }
    
 }
 console.log(masLargo);
