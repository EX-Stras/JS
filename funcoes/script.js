    /*function trianguloArea (base, altura){
    return (base * altura) / 2;
}

function linguagensDeProgramacao (num){

    if(typeof num !== 'number'){
        return 'Escreva um número'
    }

    switch (num){
        case 1:
            return 'Você é monolíngue!';
            break;
        case 2:
            return 'Você é bílingue!';
            break;
        case 3:
            return 'Você é trílingue!';
            break;
    }

    if (num >= 4)
    {
        return 'Você é poliglota!'
    }

    else if (num === 0)
    {
        return 'Como você sabe contar mas não sabe escrever?'
    }

    else if (num < 0)
    {
        return 'Eu não sou idiota...'
    }
}

var base = 5,
    altura = 20;
var area = trianguloArea (base, altura);
console.log(area)

console.log(trianguloArea)

var ovo = trianguloArea;

console.log(ovo)

num = 0;

console.log(linguagensDeProgramacao(num))

addEventListener('click', function(){console.log('oi')})*/

// Crie uma função para verificar se um valor é Truthy
function trueorfalse (valor){
        console.log(!!valor)
}

var valor = 1;

trueorfalse(valor)

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro (lado){
    return lado * 4;
}

var lado = 7;

   console.log(perimetro(lado))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto (nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

var nome = 'Lucas',
    sobrenome = 'Menêzes Cândido';

console.log(nomeCompleto(nome, sobrenome))

// Crie uma função que verifica se um número é par

function parOuImpar (num2) {
    if (num2 % 2 === 0){
        return 'É par';
    } else {
         return 'É impar';
    }
}

var num2 = 5;

console.log(parOuImpar(num2))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function type (arg){
    return typeof arg;
}

console.log(type(7));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){console.log('Lucas Menêzes Cândido')})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
