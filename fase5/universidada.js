/*9.	Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.
Dia hoje: 10
Número do Boleto: 1234
Dia de pagamento: 11
Desconto na próxima mensalidade? true
*/

var prompt = require("prompt-sync")();

var boleto = prompt('Insira o número do boleto:  ');
var pagamento = prompt('Digite a data do pagamento:  ');

if(pagamento < 13)
   console.log('Será concedido um desconto na próxima mensalidade'); 

