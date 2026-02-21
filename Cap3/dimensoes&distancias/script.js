const section = document.querySelector('section')

console.log('HEIGHT:')

console.log(`${section.clientHeight}px`)
console.log(`${section.offsetHeight}px`)
console.log(`${section.scrollHeight}px`)

console.log('WIDTH:')

console.log(`${section.clientWidth}px`)
console.log(`${section.offsetWidth}px`)
console.log(`${section.scrollWidth}px`)

console.log('DISTANCIA ATÉ A BORDA:')

console.log(`${section.offsetLeft}px`)
console.log(`${section.offsetTop}px`)

console.log('GET BOUNDING:')

const react = section.getBoundingClientRect();

console.log(react)

console.log('WINDOW:')

console.log(window.pageYOffset)
console.log(window.pageXOffset)
console.log(window.innerHeight)
console.log(window.innerWidth)

console.log('MATCH-MEDIA:')

const telap = matchMedia('(max-width: 800px)')

if(telap.matches){
    console.log('telap')
} else {
    console.log('telag')
}

console.log('EXERCÍCIO:')

// Verifique a distância da primeira imagem
// em relação ao topo da página

const img1 = document.querySelector('img')

console.log(img1.offsetTop)

// Retorne a soma da largura de todas as imagens

const imgs2 = document.querySelectorAll('img')

let soma = 0;

imgs2.forEach((item) => {
   soma += item.clientWidth;
})

console.log(soma)


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links1 = document.querySelectorAll('a')

links1.forEach((item) => {
    if (item.clientWidth < 48){
        console.log('Não tem o necessário!!!')
    } else {
        console.log('Tudo certo.')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu1 = document.querySelector('menu')

if (window.innerWidth < 720){
    menu1.classList.add('menu-mobile')
}
