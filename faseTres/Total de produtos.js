/*16.	Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.
*/

var prompt = require("prompt-sync")();

var qtd_produtos = prompt('Digite quantos produtos irá comprar:    ');

console.log('Parabéns por comprar', qtd_produtos, 'produtos!');