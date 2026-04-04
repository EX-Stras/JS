console.log("BOOLEAN E CONDICIONAIS:")
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let MinhaIdade = 15, ParenteIdade = 40;
if (MinhaIdade < ParenteIdade){
    console.log('É menor!')
} else if (MinhaIdade === ParenteIdade){
    console.log('É igual!')
} else {
    console.log('É maior!')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false; // false 
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil < china){
    console.log('É menor!')
} else if (brasil === china){
    console.log('É igual!')
} else {
    console.log('É maior!')
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

console.log("-----------------------")
console.log("FUNÇÕES:")
// Crie uma função para verificar se um valor é Truthy
function valorTruthy(valor){
    if (valor){
        console.log('É truthy!');
    } else {
        console.log('É false!');
    }
}

valorTruthy(4)
valorTruthy(NaN)
valorTruthy('')
valorTruthy(' ')

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
    perimetro = lado*4;
    return perimetro;
}

console.log(perimetro(4))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    return nome + sobrenome;
}

console.log(nomeCompleto("Lucas ","Menêzes Cândido"))

// Crie uma função que verifica se um número é par
function parOuImpar(num){
    if (num % 2 == 0){
        console.log('É par!')
    } else {
        console.log('É impar!');
    }
}

parOuImpar(5)
parOuImpar(20212332234)
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
    console.log(typeof dado)
}

tipoDeDado('')
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
/*
addEventListener('scroll', function(){
    console.log("Lucas Menêzes Cândido")
})*/

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20))
console.log(jaVisitei(20))
console.log('-----------------------')
console.log('OBJETOS:')
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let dadosPessoais = {
    nome: "Lucas",
    sobrenome: "Menêzes Cândido",
    idade: 15,
    meuNomeCompleto(){
        console.log(this.nome + ' ' + this.sobrenome)
    }
};
console.log(dadosPessoais)

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.meuNomeCompleto()

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
console.log(carro)
carro.preco = 3000;
console.log(carro)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
    raça: "labrador",
    cor: "preto",
    idade: "10 anos",
    PassouUmHomem(){
        console.log('AAAAAAHHHHRRRRRRR, AU AU AU AU...')
    }
}

console.log(cachorro)
cachorro.PassouUmHomem()
