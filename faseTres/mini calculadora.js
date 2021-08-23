/* 17.	Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.
*/

var prompt = require("prompt-sync")();

var num1 = prompt('Digite um número inteiro     ');
var num2 = prompt('Digite outro número inteiro (diferente de zero)     ');

var som = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;

console.log('A soma dos dois números é igual a', som);
console.log('A subtração dos dois números é igual a', sub);
console.log('A multiplicação dos dois números é igual a', mul);
console.log('A divisão dos dois números é igual a', div);