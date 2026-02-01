var idade = 13;

console.log(idade);

var parOuImpar = idade % 2;

if (parOuImpar == 0){
    console.log('è par!!!');
}

else {
    console.log('Droga, é impar...')
}


var total1 = (10 + (23 % 5) / 2) * 5,
    total2 = (total1 ** 2) / 2;

    console.log(total1)
    console.log(total2)

var idade2 = '21';

    console.log(+idade2 + 5) //transformou a string em Number

    // Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35
console.log(total)

// Crie duas expressões que retornem NaN
var num1 = '24p',
    num2 = '12a';

    console.log (+num1)
    console.log (+num2)
// Somar a string '200' com o número 50 e retornar 250
var num3 = '200',
    num4 = 50;

    console.log(+num3 + num4)
// Incremente o número 5 e retorne o seu valor incrementado

var num5 = 5;

    console.log(num5++)
    console.log(num5)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var pesoPorDois = numero / 2;
var peso = pesoPorDois + unidade; 

    console.log(peso)