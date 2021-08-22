/* 12.	O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.
*/

{
    const prompt = require("prompt-sync")();
    
    const LIMITE_CLIENTES = 8;
    
    console.log("Tem uma pessoa na porta da loja querendo entrar");
    var qtd = prompt("Quantas pessoas temos na loja agora?");
    
    var permitir = qtd < LIMITE_CLIENTES;
    var texto = "A loja está cheia";
    
    // valor true
    if (permitir)
     texto = "Pode permitir a entrada do cliente que está na fila";
    
     console.log(texto);
    }