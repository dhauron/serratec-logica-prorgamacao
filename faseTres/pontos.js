/*25.	O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto.
Digite seus cupons: 12
De acordo com seus cupons, você tem 12 pontos no programa de fidelidade!
*/

var prompt = require("prompt-sync")();

var cupons = prompt('Digite quantos cupons você tem   ');

var pontos = cupons*1

console.log('De acordo com seus cupons, você tem', pontos + ' pontos no programa de fidelidade!');