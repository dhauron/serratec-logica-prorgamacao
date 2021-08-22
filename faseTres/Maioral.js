/*12.	Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.
== Maioral ==
  Player 1: 7
  Player 2: 8
: Resultados :
  Player 1 venceu? False
  Player 2 venceu? True
  Houve empate? False
*/
var prompt = require("prompt-sync")();

var player1 = prompt("Digite um número     ");
var player2 = prompt("Digite um número     ");

var resultado = (player1 > player2);
var empate = (player1 == player2);
  if(resultado)
     console.log("player 1 é o maioral");
   else
     console.log("player 2 é o maioral");
    
  
