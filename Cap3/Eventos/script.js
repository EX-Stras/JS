const section1 = document.querySelector('section');
const body = document.querySelector('body');
let contador = 0;

function Contador(){
    console.log(++contador)
}

function AoClicar(event){
    const currentTarget = event.currentTarget;
    const target = event.target;
    const type = event.type;
    console.log(this)

    console.log(currentTarget, target, type)
}

function previnindo(event){
    event.preventDefalt();
    console.log(event)
}

function cores(event){
    if(event.key === "a"){
        body.classList.toggle('azul')
        if (body.classList.contains('vermelho')){
            body.classList.remove('azul','vermelho')
            body.classList.toggle('roxo')
        }
    } else if (event.key === "b"){
        body.classList.toggle('vermelho')
        if (body.classList.contains('azul')){
            body.classList.remove('azul','vermelho')
            body.classList.toggle('roxo')
        }
    }
}

section1.addEventListener('click', Contador)

section1.addEventListener('click', AoClicar)

const a1 = document.querySelector('a[href^="http"]')

a1.addEventListener('click', previnindo)

window.addEventListener('keydown', cores)

console.log('EXERCÍCIO:')

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

/*
function linkas(event){
    event.preventDefalt;
    as1.forEach((item) => {
        item.classList.remove('ativo')
    })

    this.classList.add('ativo')
}

const as1 = document.querySelectorAll('a[href^="#"]')

as1.forEach((item) => {
    item.addEventListener('click', linkas)
})
*/

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

/*
function item1(event){
    const target = event.target;
    console.log(target)
}


const itens = document.body.querySelectorAll('*')

itens.forEach((item) => {
    item.addEventListener('click', item1)
})
*/

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

/*
function item2(event){
    const target = event.target;
    const currentTarget = event.currentTarget;
    if (event.target != event.currentTarget){
        console.log(`${event.target} e ${event.currentTarget} removidos com sucesso!!!`)
    } else if (!(this.target === event.currentTarget)){
    console.log(`${event.target} removido com sucesso!!!`)
    }
    target.remove()
    currentTarget.remove()
}


const itens2 = document.body.querySelectorAll('*')

itens.forEach((item) => {
    item.addEventListener('click', item2)
})
*/

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function size(event){
    if (event.key === 't'){
        p1.forEach((item) => {
            item.classList.toggle('size')
        })
    }
}

const p1 = document.body.querySelectorAll('p')

    window.addEventListener('keydown', size)

