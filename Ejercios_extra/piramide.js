// Realiza un script que escriba por pantalla una piramide del 1 al 20 de la siguiente forma: 
// 1
// 22
// 333
// 4444
// 55555

for (let i = 1; i <= 20; i++) {
    let linea = "";
    document.write("</br>")
    for (let j = 0; j < i; j++) {
      linea += i;
    }
    document.write(linea);
  }
  