/*
12.	A loja “Casas Sergipe” vende os seguintes itens:
001 Cadeira simples - R$ 100,00
002 Cadeira luxo - R$ 200,00
003 Mesa simples - R$ 450,00
004 Mesa luxo - R$ 900,00
005 Cama - R$ 1500,00
Quando o vendedor digitar o código do item, o sistema de vendas exibe o nome do produto e o valor de venda.
*/

var prompt = require("prompt-sync")();

var c001 = 'Cadeira simples - R$ 100,00';
var c002 = 'Cadeira luxo - R$ 200,00';
var c003 = 'Mesa simples - R$ 450,00';
var c004 = 'Mesa luxo - R$ 900,00';
var c005 = 'Cama - R$ 1500,00';

var codigo = prompt('Digite o código do produto  ');

if(codigo == 'c001'){
   console.log('produto: ' + c001);
}
if(codigo == 'c002'){
    console.log('produto: ' + c002);
}
if(codigo == 'c003'){
    console.log('produto: ' + c003);
 }
 if(codigo == 'c004'){
    console.log('produto: ' + c004);
 }
 if(codigo == 'c005'){
    console.log('produto: ' + c005);
 }