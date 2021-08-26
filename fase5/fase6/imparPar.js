/*11.	Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares).
*/

var prompt = require("prompt-sync")();

var num = prompt('Até qual número você quer contar?  ');
var par = num % 2 == 0

if(par){
   console.log('Esse número é par');
} else 
   console.log('Esse número é ímpar');
