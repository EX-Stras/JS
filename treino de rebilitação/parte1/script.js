console.log("VARIÁVEIS:")
// Declarar uma variável com o seu nome
let meuNome = "Lucas Menêzes Cândido";
// Declarar uma variável com a sua idade
let idade = 15;
// Declarar uma variável com a sua comida
// favorita e não atribuir valor
let comidaFavorita;
// Atribuir valor a sua comida favorita
comidaFavorita = "Não sei!";
// Declarar 5 variáveis diferentes sem valores
let a1, a2, a3, a4, a5;

console.log(meuNome, idade, comidaFavorita, a1, a2, a3, a4, a5)

console.log("---------------------------")
console.log("TIPOS DE DADOS:")
// Declare uma variável contendo uma string
let NomeMeu = "Lucas";
// Declare uma variável contendo um número dentro de uma string
let NumString = "15";
// Declare uma variável com a sua idade
let Idade2 = 15;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
let MEUNOME = NomeMeu, sobrenome = " Menêzes Cândido";
console.log (`meu nome é ${MEUNOME + sobrenome}`)
// Coloque a seguinte frase em uma variável: It's time
let frase = "It´s time";
console.log(frase)
// Verifique o tipo da variável que contém o seu nome
console.log (typeof MEUNOME)
console.log("---------------------------")
console.log("NÚMEROS E OPERADORES:")
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
/*35*/
console.log(total)
// Crie duas expressões que retornem NaN
let NaN2 = "12a", NaN3 = "13^3ydgd", resultado1 = total * NaN2, resultado2 = total * NaN3;
console.log(resultado1, resultado2)
// Somar a string '200' com o número 50 e retornar 250
let num1 = "200", num2 = 50;
num1 = num1 * 1;
console.log(num2 + num1)
// Incremente o número 5 e retorne o seu valor incrementado
let TOTAL = num1 + num2;
TOTAL+=5;
console.log(TOTAL)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var pesoPorDois = numero / 2; // NaN (Not a Number)
var peso = pesoPorDois + unidade; // '80kg'
console.log(peso)
