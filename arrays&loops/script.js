var nums = [5,6,7,8],
    nomes = ['Lucas','João','Júlia'];

    console.log('Arrays')

console.log(nums[3], nomes[0])

console.log(nums)

nums.pop()

console.log(nums)

nums.push(590)

console.log(nums)

console.log('////////////////////////////////////////')
console.log('Loops de for')
var nums2 = [5,6,7,8];

for (var i = 0; i < 5; i++){
    nums2.push(9 + i)

    console.log(nums2)
}
console.log('////////////////////////////////////////')
console.log('While loop')

var nums3 = ['oi','olá','você','vocês'];
console.log(nums3)

var i = 0;
while (i < 4){
    console.log(nums3[i]);
    i++;
}
console.log('////////////////////////////////////////')
console.log('Break')

i = 0;
console.log(nums2)
while (true) {
console.log(nums2[i])
i++;
if (nums2[i] === undefined){
    break;
}
}

console.log('////////////////////////////////////////')
console.log('ForEach')

var linguagens = ['C','C++','Python','Java','JavaScript'];

console.log(linguagens)

linguagens.forEach(function(item){
    console.log(item)
})

console.log('////////////////////////////////////////')

console.log(linguagens)

linguagens.forEach(function(item, posiçao, array){
    console.log(item, posiçao, array)
    if (posiçao === 0){
         linguagens.pop();
    }
    else if(posiçao === 3) {
        linguagens.push('JavaScript')
    }
})

console.log('////////////////////////////////////////')
console.log('EXERCÍCIO:')



// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let anos = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

anos.forEach(function(ano, posicao, array){
    console.log(`O brasil ganhou a copa de ${ano}`)
})

console.log('////////////////////////////////////////')

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância','Laranja']

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])

    if(frutas[i] === 'Pera'){
        break;
    }
}

     // Coloque a última fruta da array acima em uma variável,
    // sem remover a mesma da array.
console.log('////////////////////////////////////////')

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])

    if (i === frutas.length - 1){
        var fruta = frutas[i];
    }
}
