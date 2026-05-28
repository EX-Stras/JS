console.clear()

function initTabNav(){
    const imagens = document.querySelectorAll('.js-tabmenu img')
    const textos = document.querySelectorAll('.js-tabcontent section')
    textos[0].classList.add('ativo')
    let num = 0;

    function ativarTAB(index){
        textos.forEach(item => {
            item.classList.remove('ativo')
        })
        textos[index].classList.add('ativo')
    }

    imagens.forEach((item, index) => {
        item.addEventListener('click', function(){
            ativarTAB(index)
        })
    })
}
initTabNav()



function accordion_list(){
    const perguntas = document.querySelectorAll('.js-accordion h2')
    const respostas = document.querySelectorAll('.js-accordion p')

    function mostrar(event){
        this.classList.toggle('mudar')
        this.nextElementSibling.classList.toggle('ativo')
    }
    
    perguntas.forEach((item, index) => {
        item.addEventListener('click', mostrar)
    })
}
accordion_list()



function scroll_suave(){
    const links_internos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scroll(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        distancia = section.offsetTop
        window.scrollTo({
            top: distancia,
            behavior: 'smooth',
        })
    }

    links_internos.forEach(item => {
        item.addEventListener('click', scroll)
    })
}
scroll_suave()



function animacao_scroll(){
    const sections = document.querySelectorAll('.js-scroll')

    function animacao(event){
        sections.forEach(item => {
           const distancia = item.getBoundingClientRect().top;
           if (distancia < 0){
            item.classList.add('passou')
           } else if (distancia >= 0 && item.classList.contains('passou')){
            item.classList.add('voltou')
            setTimeout(() => {
                item.classList.remove('passou')
                item.classList.remove('voltou')
            }, 1000);
           }
        })
    }
    window.addEventListener('scroll', animacao)
}
animacao_scroll()

function NumberMet(){
    const ano = 2018;
    const ano2 = new Number(99);

    console.log(Number.isNaN(2*'a'))

    console.log(Number.isInteger(22.2))
    console.log(Number.isInteger(20))

    console.log(Number.parseFloat('22 reais'))
    console.log(Number.parseInt('100.3324234345'))

    const preco = 1945.26;
    console.log(preco.toFixed(1))
    console.log(preco.toString())

    console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

    console.log(Math.PI, Math.E, Math.LN10)

    console.log(Math.max(10,89,56,43,12))
}
NumberMet()

// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.floor(Math.random()*(2000 - 1050 + 1)) + 1050)

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
numeros = numeros.split(', ')
console.log(Math.max(...numeros))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let soma = 0, nums = [];
listaPrecos.forEach((item, index) => {
    item = item.toUpperCase().slice(3).trim().replace(',','.') * 1;
    item = Math.round(item);
    soma += item;
    nums[index] = item.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
})
console.log(nums)
console.log(soma)


