/*14.	É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.
Sexo: Feminino
Ano de nascimento: 1999
Cidadão emancipado? True
*/

var prompt = require("prompt-sync")();
var sexo = prompt("Digite o sexo (F ou M)  ");
var idade = prompt("Digite a idade  ");

var emancipada = (sexo = 'F' && idade >= 21);
var emancipado = (sexo = 'M' && idade >= 18);
{
if(emancipada)
  console.log("Você é emancipada")
  else
  console.log("Você não é emancipada");
}
{ 
if(emancipado)
   console.log("Você é emancipado")
   else
   console.log("Você não é emancipado");
}


