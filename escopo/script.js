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
console.log(cor/*, marca, portas*/); //porque marca e porta foram definidas com let e const, que não atravessam as chaves.

// Como corrigir o erro abaixo?
  const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4))
console.log(dividirDois(6))

// O que fazer para total retornar 500?
let numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
