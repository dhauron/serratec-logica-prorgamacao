/* 16.	O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.
Mês do seu nascimento: 01
Dia do aniversário: 25
Você é inteligente? True!
*/

var prompt = require("prompt-sync")();

var mes = prompt('Qual é o número do seu mês de aniverssário?   ');
var dia = prompt('Qual é o dia do aniverssário?                 ');
var inteligente = mes == 1 && dia == 25;

if(inteligente)
    console.log('Você é inteligente');
    else
    console.log('Você não é tão inteligente')
