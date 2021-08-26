/*8.	O abecedário da Xuxa agora segue cantando a definição musical até que a criança decida parar de ouvir, pressionando o zero.
*/

var prompt = require("prompt-sync")();

const musica = `A de amor
B de baixinho
C de coração
D de docinho
E de escola
F de feijão
G de gente
H de humano
I de igualdade
J, juventude
L, liberdade
M, molecagem
N, natureza
O, obrigado
P, proteção
Q de quero-quero
R de riacho
S, saudade
T de terra
U de universo
V de vitória
X, o que que é?
É Xuxa
E Z é zum-zum-zum-zum-zum
Vamos cantar
Vamos brincar
Alegria pra valer
O abecedário da Xuxa
Vamos aprender, yeah, yeah, yeah
Vamos cantar
Vamos brincar
Alegria pra valer
O abecedário da Xuxa
Vamos aprender
A de amor
B de baixinho
C de coração
D de docinho
E de escola
F de feijão
G de gente
H de humano
I de igualdade
J, juventude
L, liberdade
M, molecagem
N, natureza
O, obrigado
P, proteção
Q de quero-quero
R de riacho
S, saudade
T de terra
U de universo
V de vitória
X, o que que é?
É Xuxa
E Z é zum-zum-zum-zum-zum
Vamos cantar
Vamos brincar
Alegria pra valer
O abecedário da Xuxa
Vamos aprender, yeah, yeah, yeah
Vamos cantar
Vamos brincar
Alegria pra valer
O abecedário da Xuxa
Vamos aprender, yeah, yeah, yeah
Vamos cantar
Vamos brincar
Alegria pra valer
O abecedário da Xuxa
Vamos aprender, yeah, yeah, yeah
Vamos cantar
Vamos brincar
Alegria pra valer
O abecedário da Xuxa`;

var resposta = prompt('Gostaria de ouvir a música da xuxa? s ou n   ');

console.log('Gostaria de ouvir a música da xuxa? s ou n   ');


do{
    console.log(musica);
    resposta = prompt('Gostaria de ouvir a música da xuxa? s ou n   ');
    if(resposta == 'n')
    break;
}while(resposta = true);