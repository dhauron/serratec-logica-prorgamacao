/* 14.	O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.*/

var prompt = require("prompt-sync")();

var celsius = prompt("Digite a temperatura em graus celsius    ");

var fahrenheit = (celsius * 9/5) + 32

console.log('A temperatura em Fahrenheit é igual a:', fahrenheit );
