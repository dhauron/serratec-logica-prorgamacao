/* 22.	Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.*/

var prompt = require("prompt-sync")();

var total = 345 + 1545

var tres_sj = total/3;
var cinco_sj = total/5;
var dez = (total + 28.35)/10;

console.log('Em 3 vezes sem juros, cada parcela custará R$', tres_sj);
console.log('Em 5 vezes sem juros, cada parcela custará R$', cinco_sj);
console.log('Em 10 vezes com 1,5% de juros, cada parcela custará R$', dez);