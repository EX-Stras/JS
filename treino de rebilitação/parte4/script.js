console.log(window.innerWidth)
console.log(window.innerHeight)
console.log(window.location.href)
console.log(window.location.host)

const ps = document.querySelectorAll('p');
/*
addEventListener('click', azulzinho)

function azulzinho(){
    ps.forEach(item => {
        item.classList.toggle('azul')
})
}
*/
// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href)
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector('.ativo');
console.log(ativo)
// Retorne a linguagem do navegador
console.log(window.navigator.language)
// Retorne a largura da janela 
console.log(window.innerWidth)
console.log('----------------')
console.log('SELEÇÃO DE ELEMENTOS:')
const contato = document.getElementById('vermelha')
const classe = document.getElementsByClassName('imgc')
const tag = document.getElementsByTagName('p')
console.log(contato, classe, tag)
const link = document.querySelector('[href^="https://"]');
console.log(link)
const todosP = document.querySelectorAll('p');
console.log(todosP[1+3])


// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img')
console.log(imagens)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagem)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const PrimeiroMain = document.querySelector('main.primario')
console.log(PrimeiroMain)
const h2 = PrimeiroMain.querySelector('h2')
console.log(h2)

// Selecione o último p do site
const Ps = document.querySelectorAll('p')
console.log(Ps)
Ps.forEach((item, index) => {
    if (index === Ps.length - 1){
        console.log(item)
    }
})

