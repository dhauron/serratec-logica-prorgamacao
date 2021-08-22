/* 11.	No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 
== Eleições 2020 ==
  Digite sua idade: 17
   Você já pode votar? True
   */
  
   var prompt = require("prompt-sync")();

   var idade = prompt("Digite sua idade     ");
   var votante = (idade >= 16);
   if(votante)
     console.log("Exerça sua cidadania")
     else
     console.log("Você ainda não pode votar");
   