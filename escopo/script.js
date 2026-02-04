'use strict'

console.log('ESCOPO DE FUNÇÃO:')

function carro(){
    var carros = 'uno!'
    console.log(carros)
}

carro()
//console.log(carros) Isso é um erro, a variável só existe dentro da função.
console.log('/////////////////////////////////')
console.log('ESCOPO DE BLOCO:')

if(true){
    var toyota = 'CARRO';
}
{ var/*let - teste -*/ j = 6; }

console.log(toyota)
console.log(j)

//são variáveis entre chaves que não estão em funções.
//se usarmos const ou let para criar as variáveis elas não poderão atravessar as chaves!!!
//já as variáveis com var vazam até se se a condição for falsa (só que saem undefined).

console.log('/////////////////////////////////')
console.log('LET & CONST')

const oi = {
    tudoBem: true,
}
console.log(oi.tudoBem)

oi.tudoBem = false;
console.log(oi.tudoBem)

//oi = 'ola'; mostrando um erro!!!
console.log('/////////////////////////////////')
console.log('EXERCÍCIO:')


// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
