/*
const id = document.getElementById('pegar');

console.log(id);

const classe = document.getElementsByClassName('q a');

console.log(classe[0]);

const tag = document.getElementsByTagName('header');

console.log(tag[0].innerText);

const query1 = document.querySelector('.faq');

const query2 = query1.querySelector('p:last-child');

console.log(query1.innerHTML)

console.log(query2.innerText)

const tio1 = document.querySelector('dl');

const tio2 = tio1.getElementsByClassName('title3')

for (let x = 0; x < 120; x++){
console.log(tio2[x].innerText)  

if (tio2[x + 1] === undefined)
    x = 121;
}

const linksInternos = document.querySelectorAll('[href^="#"]')

console.log(linksInternos)
*/

/*
const teste = document.querySelector('.contato');

const teste2 = teste.querySelectorAll('p');

teste2.forEach(function(item){
    console.log(item.innerText)
})*/

// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img')

console.log(imgs)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const img = document.querySelectorAll('[src^="img/imagem')

img.forEach(function(item){
    console.log(item)
})

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]')

linksInternos.forEach(function(item){
    console.log(item)
})
// Selecione o primeiro h2 dentro de .animais-descricao

const descriçao = document.querySelector('.primario')

const h2 = descriçao.querySelector('h2')

console.log(h2)

// Selecione o último p do site

const p = document.querySelectorAll('p')

console.log(p[p.length - 1])