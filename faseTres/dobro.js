/*20.	Escrever um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem: "O dobro de x foi y.", substituindo x e y pelos valores.
Dica: Utilize uma variável nova para armazenar o resultado.
*/

var prompt = require("prompt-sync")();

var n = prompt('Digite um número    ');

var dobro = n * 2;

console.log('O dobro de', n +' foi', dobro);