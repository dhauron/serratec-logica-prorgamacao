/* 8.	A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.
Paciente: Moisés
Já vacinado: ok
[Triagem]
Sujeito a infecção? false
*/

var prompt = require("prompt-sync")();

var paciente = prompt('Digite o nome do paciente:  ');

var vacinado = prompt('Foi vacinado? s ou n   ');

if(vacinado == 's'){
    console.log('Já vacinado: ok');
}
if(vacinado == 'n'){
console.log('Sujeito a infecção');
}
    