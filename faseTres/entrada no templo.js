/*13.	Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.
Digite a temperatura: 36.9
Usa máscara (S ou N): N
Autorizar a entrada? False
*/

  var prompt = require("prompt-sync")();
  var limite = 36.9;
  var temperatura = prompt("Digite a temperatura    ");
  var permitir = (temperatura <= limite);
  
  if (permitir)
   console.log("Entrada permitida, mas use a máscara");
   else
   console.log("Entrada negada");

    
