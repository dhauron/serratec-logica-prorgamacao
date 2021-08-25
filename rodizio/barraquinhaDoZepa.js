var cafe
var doce1 = bala
var doce2= pirulito
var doce3= bombom
var doce4= pacoca
var doce5= jujuba

const prompt= require ("prompt-sync")();

var zepa= prompt ( " O que desejas?");
 
if ( zepa== bala ||zepa== pirulito || zepa== bombom || zepa ==jujuba ){
    console.log ( " Obrigado pela preferência!")}
    if ( zepa == cafe || zepa== pacoca){
console.log ("Desculpa, infelizmente devorei o estoque...")
    }else {
        console.log ("Por favor escolha um produto válido.");

    }