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
        if (body.classList.contains('vermelho')){
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

