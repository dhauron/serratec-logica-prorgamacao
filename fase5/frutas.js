/*11.	No blog “Incentivo ao consumo de frutas”, o aluno digita o nome de sua fruta favorita, e receberá alguma informação singular sobre ela. Para se tornar interessante, a lista deve conter pelo menos 6 curiosidades, e uma sobre frutas de modo geral.
*/

var prompt = require("prompt-sync")();

console.log('Segundo dados do CEAJESP, duas das frutas mais consumidas no Brasil no ano de 2017 foram a laranja e a melancia.')
var fruta = prompt('Destas frutas qual é a sua fruta favorita?     ');

if(fruta == 'laranja'){
    console.log('Você sabia que a laranja foi primeiro associado à fruta e depois veio a cor, depois do chocolate e da baunilha a laranja é o sabor preferido pelas pessoas, os EUA são o país que mais consome a laranja na forma de suco, o Brasil é o maior produtor de laranja, existe um museu de laranjas na Espanha e as laranjas nunca apodrecem antes de serem arrancadas da árvore?');
}
    if(fruta == 'melancia'){
    console.log('Você sabia que a melancia é tecnicamente uma fruta e um vegetal, altamente nutritiva, os antigos egípcios foram os primeiros a produzir melancias em grande escala, as variedades sem sementes são as preferidas nos EUA, são plantas anuais e a mais pesada da história tinha 159kg?');
    }    

console.log('As frutas são fontes de vitaminas, minerais, fibras e antioxidantes de extrema importância para o funcionamento do nosso organismo.');
