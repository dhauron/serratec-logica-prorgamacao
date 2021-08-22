/*15.	O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido. */

var prompt = require("prompt-sync")();

var angulo1 = prompt('Digite o primeiro ângulo   ');
var angulo2 = prompt('Digite o segundo ângulo    ');
var angulo3 = prompt('Digite o terceiro ângulo   ');

var triangulo = (angulo1 + angulo2 + angulo3 == 180);

if(triangulo)
  console.log('Os ângulos podem formar um tringulo');
  else
  console.log('Os ângulos não podem formar um tringulo');