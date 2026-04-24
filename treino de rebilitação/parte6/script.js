/*
console.clear()
const menu = document.querySelector('menu')
const DivHeight = document.querySelector('div')
console.log('--------------------------')
console.log(DivHeight.clientHeight)
console.log(DivHeight.offsetHeight)
console.log(DivHeight.scrollHeight)
console.log('--------------------------')
console.log(DivHeight.offsetTop)
console.log(DivHeight.offsetLeft)
console.log('--------------------------')
const h2 = document.querySelector('main.primario h2')
console.log(h2.innerText)
const mapaH2 = h2.getBoundingClientRect()
console.log(mapaH2.top)
window.addEventListener('scroll', () => {
  let verificaçao = mapaH2.top  
  if ( verificaçao < 0){
      console.log('passou do item!')
    }
})
console.log('--------------------------')
console.log(window.innerWidth)
console.log(window.outerWidth)
if (window.innerWidth < 800){
  console.log('É um dispositivo móvel!')
}
console.log('--------------------------')
console.log(window.pageYOffset)
addEventListener('scroll', function(){
  if(window.pageYOffset > 0){
    menu.classList.add('azul')
  } else {
    menu.classList.remove('azul')
  }
})
console.log('--------------------------')
const pequena = window.matchMedia('(max-width: 600px)')

if (pequena.matches){
  console.log('tela pequena')
} else {
  console.log('tela maior')
}
*/

// Verifique a distância da primeira imagem
// em relação ao topo da página

const imagem = document.querySelector('img')
console.log(imagem.offsetTop)

// Retorne a soma da largura de todas as imagens

let soma = 0;

const imagens = document.querySelectorAll('img')
imagens.forEach(item => {
  console.log(item.offsetWidth)
  soma += item.offsetWidth
})

console.log(soma)

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((item, index) => {
  if (item.offsetWidth >= 48 && item.offsetHeight >= 48){
    console.log(`O item ${index}, está correto`)
  } else {
    console.log(`O item ${index}, está muito pequeno`)
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('menu')
const verificador = window.matchMedia('(min-width: 720px)')

if (verificador.matches){
  console.log('tudo certo!')
} else {
  menu.classList.add('menu-mobile')
  console.log('classe adicionada', menu.classList)
}
console.log('--------------------------')
console.log('EVENTOS:')

/*
window.addEventListener('click', function(){
  document.body.classList.toggle('azul')
}) */
/*
function Contar(event){
  console.log(event)
}

window.addEventListener('click', Contar)
*/
/*
const linkExterno = document.querySelector('a[href^="http"]');*/
const h2s = document.querySelectorAll('h2');/*
function clickNoLink(event) {
  event.preventDefault();
  h2s.forEach(item => {
    item.classList.toggle('azul')
  })
}

linkExterno.addEventListener('click', clickNoLink);
*/
/*
function cor(event) {
  h2s.forEach(item => {
    item.classList.add('azul')
  })
}

function cor2(event) {
  h2s.forEach(item => {
    item.classList.remove('azul')
  })
}

window.addEventListener('keydown', cor)
window.addEventListener('keyup', cor2)
*/


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

function addClass(event){
  event.preventDefault();
  internos.forEach(item => {
    item.classList.remove('ativo')
  })
  this.classList.add('ativo')
}

const internos = document.querySelectorAll('a[href^="#"]')

internos.forEach(item => {
  item.addEventListener('click', addClass)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todos = document.body.querySelectorAll('*')

function mostrar(event){
  console.log(event.currentTarget)
}

todos.forEach(item => {
  item.addEventListener('click', mostrar)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
/*
function remover(event){
  this.remove();
}
*/
// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function aumentar(event){
  if(event.key == "t" ){
    document.body.classList.toggle('font')
  }
}

window.addEventListener('keydown', aumentar)