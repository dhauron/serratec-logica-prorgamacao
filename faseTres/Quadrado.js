/*21.	O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.*/

var prompt = require("prompt-sync")();

var n = prompt('Digite um número    ');

var quadrado = Math.pow(n,2);

console.log('O quadrado de', n +' foi', quadrado);