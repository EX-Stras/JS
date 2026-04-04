console.log('TUDO É OBJETO:')
// nomeie 3 propriedades ou métodos de strings
let nome = "Lucas";
console.log("charAt, replace, lenght")
// nomeie 5 propriedades ou métodos de elementos do DOM
console.log('getElementById, getElementByClassName, querySelector, addEventListener, querySelectorAll')
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
console.log('write text(texto)')
console.log('-------------------------')
console.log('Arrays e loops')
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let anos = ["1959","1962","1970","1994","2002"];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
anos.forEach(function(item) {
    console.log(item)
});


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

frutas.forEach(function(item){
    if (item === 'Pera'){
        console.log(item,'Sim')
    } else {
        console.log(item,'Não')
    }
});

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

fruta = frutas.pop();
frutas.push(fruta);
console.log('----------------------')
console.log('ATRUIÇÃO E TERNÁRIO:')
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll+=500;
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCarro);
console.log(darCredito)
console.log('-----------------------')
console.log('ESCOPO:')
// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(cor);

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

