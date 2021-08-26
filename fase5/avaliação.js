/*5.	Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada. Pela soma dos pontos, o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10
*/

var prompt = require("prompt-sync")();

var P1 = prompt('Digite a nota da P1:  ');
var P2 = prompt('Digite a nota da P2:  ');
var NF = (parseInt(P1) + parseInt(P2)); 


if(NF <= 3){
  console.log('Aluno reprovado');
}      
if(NF >= 4){
  console.log('Aluno em recuperação');  
}
if(NF >= 6){
  console.log('Aluno aprovado');
}
