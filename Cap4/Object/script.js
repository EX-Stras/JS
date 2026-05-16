console.clear()

function objetos(){
    const pessoa = {
        init: function (nome, idade){
            this.nome = nome;
            this.idade = idade;
            return this;
        },
        nadar: function (distancia){
            return `${this.nome} nadou ${distancia}`
        }
    }

    pessoa.falar = function (algo) {
        return `${this.nome} falou '${algo}'!`
    }

    const Ronaldo = Object.create(pessoa)

    console.log(Ronaldo.init("Ronaldo", 16).nadar("12 km"))

    const carro = {
        ligar: () => {
            return "ligando..."
        },
        acelerar: () => {
            return "acelerando..."
        }
    }

    const honda = {
        marca: "Honda",
        kilometragem: 0,
    }

    Object.assign(honda, carro)

    let moto = {
        valor: 5000,
    }

    Object.defineProperties(moto, {
        rodas: {
            value: 5,
            configurable: true,
            writable: true,
            enumerable: false,
        }
    })

    console.log(Object.keys(moto))
    console.log(Object.getOwnPropertyNames(moto))

    Object.freeze(moto)

    moto.kilometragem = 0;
    delete moto.valor

    console.log(Object.getOwnPropertyNames(moto))

    console.log(moto.constructor)

    console.log(Object.prototype.isPrototypeOf(moto))

    console.log(Object.propertyIsEnumerable('getOwnPropertyNames'))
     console.log(Object.prototype.toString.call(pessoa.init))
     
}
objetos()

// Crie uma função que verifique
// corretamente o tipo de dado

function tipo(dado){
    return Object.prototype.toString.call(dado)
}

console.log(tipo(true))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};

Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        writable: false,
        configurable: false,
        enumerable: true,
    }
})

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

const proto = [String, Array]
proto.forEach(item => {
    console.log(Object.getOwnPropertyNames(item.prototype))
})

