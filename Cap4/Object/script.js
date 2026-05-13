console.clear()

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