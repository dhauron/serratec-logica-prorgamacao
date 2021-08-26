/*7.	No tablet da lanchonete, o cliente pode escolher dois complementos para o seu lanche. Apenas se marcar algum item de salada, pode também escolher se quer adicionar molho. Ao finalizar, o pedido é enviado para a cozinha.
:Lanchonete:
Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles
Item 1: B
Item 2: T
Adicionar molho: Não
[Cozinha]
Lanche com Bacon e Tomate, sem molho.
*/
var prompt = require("prompt-sync")();

console.log(':Lanchonete');
console.log('Complementos: Q = queijo. B = bacon, A = alface, T = tomate, P = picles');
var item = prompt('Item1: ');
var item2 = prompt('Item 2: ');

var compl1 = '';

switch (item){
    case 'Q': compl1 = 'Queijo'; break;
    case 'B': compl1 = 'Bacon'; break;
}
var teraComp1 = (item1 == 'A') || (item1 == 'T') || (item2 == 'A') || (item2 == 'T');

