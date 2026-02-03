/*var Joao = {
    idade: 40,
    profissao: 'programador',
}

console.log(Joao)

var triangulo = {
    area(base, altura){
        return (base * altura) / 2;
    },

    perimetro(cat1, cat2, hipo){
        return cat1 + cat2 + hipo;
    },
}

console.log(triangulo.perimetro(5, 10, 16))

console.log(Math.random())

var section = {
    width: 800,
    height: 50,
    border: 1,
    color: '#84e',
    backgroundColor: '#fff',
    metadeHeight(){
        return this.height / 2;
    }
}

section.padding = 10;
section.backgroundColor = '#ff0';
*/



//////////////////////////////////////////////////////



// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var eu = {
    nome: 'Lucas',
    sobrenome: 'Menêzes Cândido',
    idade: 14,
}

// Crie um método no objeto anterior, que mostre o seu nome completo

    eu.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`
    }

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raça: 'labrador',
    idade: 10,
    cor: 'preto',

    latir(pessoa){
        if (pessoa === 'homem'){
            return 'AU AU AU AU!!!'
        } else {
            return 'ZZZZZZZZ...'
        }
    }
}
