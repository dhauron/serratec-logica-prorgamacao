/*23.	É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou?*/

var prompt = require("prompt-sync")();

var total = 345 + 1545;
var cupom = total/190;

console.log('Alice ganhou ', cupom + '  cupons');