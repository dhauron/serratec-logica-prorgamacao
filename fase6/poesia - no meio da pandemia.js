/*7.	No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.*/

var prompt = require("prompt-sync")();

const poesia = `No Meio do Pandemia
Humilde paródia de
Carlos Drummond de Andrade

No meio da pandemia tinha um bolsonaro
Tinha um bolsonaro no meio da pandemia
Tinha um bolsonaro
No meio da pademia tinha um bolsonaro

Nunca me esquecerei desse acontecimento
Na vida de minhas retinas tão fatigadas
Nunca me esquecerei que no meio da pademia 
Tinha um bolsonaroo
Tinha um bolsonaro no meio da pandemia
No meio da pandemia tinha um bolsonaro`;

var resposta = prompt('Gostaria de apreciar uma poesia? s ou n   ');

console.log('Gostaria de apreciar uma poesia? s ou n   ');


do{
    console.log(poesia);
    resposta = prompt('Gostaria de apreciar uma poesia? s ou n   ');
    if(resposta == 'n')
    break;
}while(resposta = true);
