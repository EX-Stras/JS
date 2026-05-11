console.clear()
/*
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

function PeFfunction() {
    function AreaTriEqui(lado){
        let altura = (lado * 1.732)/2;
        return (lado * altura) / 2;
    }

    console.log(+AreaTriEqui(3).toFixed(3))

    const nomes = {
        nome1: "Lucas",
        nome2: "João",
        nome3: "Júlia",
    }

    function ExeN(){
        console.log(`Tarefas de hoje:
${this.nome1} deverá lavar a casa,
${this.nome2} terá que passar as roupas,
${this.nome3} terá que fazer as compras`, this)
    }
    
    ExeN.call(nomes)

    const p = document.querySelectorAll('p')

    const Ativos = Array.prototype.filter.call(p, (item) => {
        return item.classList.contains('ativo')
    })

    console.log(Ativos)

    const array1 = [1,2,3,4,6,5,8]
    console.log(Math.max.apply(this, array1))

    const h2 = document.querySelectorAll('h2');

    const filtrarLi = Array.prototype.filter.bind(h2, (item) => {
    return item.hasAttribute('class')
    });

    console.log(filtrarLi())
    h2[4].classList.add('ativo')
    console.log(filtrarLi())

    const $ = document.querySelectorAll.bind(document)
    
    console.log($('p'))
}
PeFfunction()
*/

console.log("////////////////////////////////////")
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

let p = document.querySelectorAll('p');
p = Array.prototype.reduce.call(p, (cc, item) => {
return cc + item.innerText
}, '')
console.log("A quantidade de caracteres que todos os parágrafos juntos tem é:", p.length)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criadoraHTML(tag, classe, conteudo){
    let o = document.createElement(tag)
    o.classList.add(classe)
    o.innerText = conteudo;
    document.body.appendChild(o)
}

criadoraHTML('p','ativo','ovos')

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const criar = criadoraHTML.bind(this, 'h1', 'titulo')

criar('ola')
