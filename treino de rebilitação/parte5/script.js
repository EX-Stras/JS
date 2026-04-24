console.clear()
/*
const imgs = document.querySelectorAll('img');

imgs.forEach(item => {
    console.log(item)
})

imgs.forEach(() => console.log('algo'))
*/
// Mostre no console cada parágrado do site
console.log('FOREACH E ARRAY FUNCTION:')
const p = document.querySelectorAll('p');
p.forEach((item, index, array) => console.log(item))
// Mostre o texto dos parágrafos no console
p.forEach(item => console.log(item.innerText))
// Como corrigir os erros abaixo:
const imgS = document.querySelectorAll('img');

imgS.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgS.forEach(() => {
  console.log(i++);
});

imgS.forEach(() => i++);
console.log('----------------------')
console.log('CLASSES E ATRIBUTOS:')
const divS = document.querySelectorAll('div');

divS.forEach((item, index) => {
  item.classList.add('ativo')
  if (index === divS.length - 1){
    item.classList.remove('ativo')
  }
  console.log(item.classList)
})
if (divS[divS.length - 2].classList.contains('ativo')) {
  console.log('Está ativo!')
}

console.log(divS[1].attributes)
console.log(divS[1].getAttribute('class'))
//divS[1].setAttribute('class','oi')

// Adicione a classe ativo a todos os itens do menu
const conteudo = document.querySelectorAll('menu a')
conteudo.forEach(item => item.classList.add('ativo'))
console.log(conteudo)
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
conteudo.forEach(item => item.classList.remove('ativo'))
console.log(conteudo)
// Verifique se as imagens possuem o atributo alt
imgS.forEach(item => console.log(item.hasAttribute('alt')))

// Modifique o href do link externo no menu
linkExterno = document.querySelector('a[href^="https"]')
console.log(linkExterno)
linkExterno.setAttribute('href','https://www.google.com')
console.log(linkExterno)


