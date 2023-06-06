// Realiza un script que escriba por pantalla una piramide del 1 al 20 de la siguiente forma: 
//1
//22
//333
//4444

for (let i = 1; i <= 20; i++) {
  for (let repeticion = 0; repeticion < i; repeticion++){
    document.write(i);
  }
  document.write("<br>");
}