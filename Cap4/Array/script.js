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

function ArrayConstruct(){
    const dados = [new String('Tipo 1'), [32,'Carro', {cor: 'Azul', Casa: 32,}], function andar(){
        console.log(`${nome} andou!`);
    }]
    console.log(dados)
    const pessoas = ['Carlos','Ana','Marcelo'];
    pessoas[10] = 'João';
    console.log(
        pessoas,
        pessoas.length
    )
    let h1 = document.querySelectorAll('h1')
    console.log(h1)
    h1 = Array.from(h1)
    console.log(h1)

    let p = document.querySelectorAll('p')
    console.log(Array.isArray(p))
    p = Array.from(p)
    console.log(Array.isArray(p))

    let arrayestranho = ['ola', 'ola2']
    arrayestranho[2] = 32
    console.log(arrayestranho)

    let arrys = Array.of(0,2,5,3,1,4)

    /*
    let sort = []; let maiores = [];
    arrys.forEach((item, index) => {
        maiores[index] = 0;
        arrys.forEach((item2, index2) => {
            if (item > item2){
                maiores[index] += 1;
            }
        })
    })
    console.log(maiores)
    arrys.forEach((item, index) => {
        sort[maiores[index]] = item;
    })

    console.log(sort)
    */

    console.log(arrys.sort())
    arrys.reverse()
    console.log(arrys)

    let personagens1 = ['Wilson','Wanda',"Wendy"]

    personagens1.splice(3,0,'Wortox')
    console.log(personagens1)

    console.log(personagens1.copyWithin(0, 1, 3))

    console.log(personagens1.fill('Maxwell',1,3))

    const letras1 = ['a','b','c']
    const letras2 = ['x','y','z']
    const letras = letras1.concat(letras2, 1)
    console.log(letras)

    console.log(
        letras.includes('z'),
        letras.indexOf('a'),
        letras.join(' '),
        letras.slice(1,3)
    )
}
ArrayConstruct()