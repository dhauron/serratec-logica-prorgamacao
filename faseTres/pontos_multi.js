/*26.	O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.
Digite seus cupons: 12
Seus cupons agora valem 36 pontos!
*/

var prompt = require("prompt-sync")();

var cupons = prompt('Digite quantos cupons você tem   ');

var pontos = cupons*3

console.log('Seus cupons agora valem', pontos + ' pontos!');