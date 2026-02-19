const div = document.querySelector('div');
const divs = document.querySelectorAll('div');
/*
console.log('CLASS-LIST:')
console.log(div.classList)

div.classList.add('ovo');
div.classList.remove('title1')
div.classList.toggle('title1')
console.log(div.classList.contains('title1'))
div.classList.replace('ovo', 'oval')

console.log(div.classList)
console.log('ATTRIBUTES:')

console.log(div.attributes)*/

addEventListener('click', function(){
    if (div.hasAttribute('style')){
        div.removeAttribute('style');
    } else {
        div.setAttribute('style',`background-color: orange;`)
    }
})

console.log(div.classList)

// Adicione a classe ativo a todos os itens do menu

const a1 = document.querySelector('menu');
const a2 = a1.querySelectorAll('a');

a2.forEach(item => item.classList.add('ativo'));

console.log(a2)

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

a2.forEach((item, index) => {
    if (index != 0){
        item.classList.remove('ativo')
    }
});

console.log(a2)

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img')

imgs.forEach((item) => {
    if (item.hasAttribute('alt')){
        console.log('Tem alt!!!')
    }
});

// Modifique o href do link externo no menu

a2.forEach((item) => {
    if (item.getAttribute('href') != "#"){
        item.setAttribute('href','https://www.cursoemvideo.com/')
    }
})

