/*var maisDeDezoito = true;

if(maisDeDezoito) {
    console.log('tem mais de 18 anos!')
    console.log(typeof maisDeDezoito)
} else {
    console.log('tem menos de 18 anos!')
}

var nome1 = 'Lucas';

if(nome1) {
    console.log('Seu nome existe!')
}

var num1 = 3;

if(!num1 % 2 == 0){
    console.log('O número é impar!!!')
}

if(5 + 5 == 15 - 5 && 40 - 30){
    console.log('Tudo certo')
}

if( true || 0) {
    console.log('testando...')
}

var corFavorita = 'Azul';

switch(corFavorita) {

    case 'Vermelho':
        console.log('Você é bem rabugento')
        break;
    case 'Rosa':
        console.log('Você é muito doce')
        break;
    case 'Azul':
        console.log('Igual a mim...')
        break;
    default:
        console.log('Você foge dos padrões')
        break;
        
}
*/
// Verifique se a sua idade é maior do que a de algum parente
var eu = 14,
    irmao = 8;

if (eu > irmao){
    console.log('Sou mais velho')
} else {
    console.log('Sou mais novo')
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor' (já fiz isso)

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
if (nome){
    console.log('true')
} else {
    console.log('false')
}
var idade = 28;
if (idade){
    console.log('true')
} else {
    console.log('false')
}
var possuiDoutorado = false;
if (possuiDoutorado){
    console.log('true')
} else {
    console.log('false')
}
var empregoFuturo;
if (empregoFuturo){
    console.log('true')
} else {
    console.log('false')
}
var dinheiroNaConta = 0;
if (dinheiroNaConta){
    console.log('true')
} else {
    console.log('false')
}

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil >= china){
    console.log('É maior')
} else {
    console.log('É menor')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); //falso
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); //Cão, o '&&' sempre retorna o último valor
} else {
  console.log('Falso');
}

    