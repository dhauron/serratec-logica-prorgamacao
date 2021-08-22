/*17.	Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.
== Banco de Sangue ==
[Digite “Sim” ou “Não” nas restrições a seguir]
Idade abaixo de 16 ou acima de 69 anos: Não
Pesa menos de 50kg: Não
Portador de Hepatite: Não
Já teve Malária: Não
Fez doação recente: Sim

[Resultado da triagem]
Pode doar sangue? False
*/

var prompt = require("prompt-sync")();

var idade = prompt('Qual é a sua idade?          ');
var peso = prompt('Qual é o seu peso?          ');
var hepatite = prompt('Você é portador de hepatite? Responda com s ou n          ');
var malaria = prompt('Você já teve malária? Responda com s ou  n          ');
var doacao = prompt('Você fez doação recente? Responda com s ou n          ')

var doador = ((15 < idade < 69) && (peso >= 50) && (hepatite == 'n') && (malaria == 'n') && (doacao == 'n'));

if(doador)
   console.log('Você pode doar sangue');
   else
   console.log('Você não pode doar sangue');