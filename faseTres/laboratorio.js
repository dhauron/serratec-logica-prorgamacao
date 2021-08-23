/*27.	O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.*/

var prompt = require("prompt-sync")();

var garrafa = prompt('Qual é a capacidade da garrafa em mililitros?   ');

var gel = garrafa * 0.30;

console.log('Acrescente', gel + ' de gel neste vasilhame e preencha o restante de alcool');