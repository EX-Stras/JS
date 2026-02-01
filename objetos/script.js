var Joao = {
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