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
*/
function ArrayEiteracao(){
    const carros = ['Ford','Subaru','Jeep'],
    querer = carros.map(item => {
        return 'Quero um carro da marca: ' + item;
    })

    console.log(querer)

    const nums = ['',1,2,3,0]

    nums.reduce((acumulador, item, index, array) => {
        console.log(acumulador, item, index, array)
        return item;
    }, 0)

    const num = nums.some(item => {
        return item;
    })
    
    console.log(num)

    const num2 = nums.every(item => {
        return item;
    })
    
    console.log(num2)

    const nomes = ['Gustavo','Micklin','Zendaia','Lucas']
    let nome = nomes.find(item => {
        return item.toLocaleLowerCase().includes('mi')
    })
    
    console.log(nome)
    
    nome = nomes.filter(item => {
        return item.toLocaleLowerCase().includes('u')
    })
    
    console.log(nome)
    
}
ArrayEiteracao()

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

let cursos = document.querySelectorAll('section.curso')
cursos = Array.from(cursos)

const info = cursos.map((item, index) => {
    return {
        titulo: cursos[index].querySelector('h1').innerText,
        descricao: cursos[index].querySelector('p').innerText,
        quantidade_de_aulas: cursos[index].querySelector('span.aulas').innerText,
        horas_de_curso: cursos[index].querySelector('span.horas').innerText,
    }
})

console.log(info)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const MaiorQue100 = numeros.filter(item => item > 100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const ExisteBaixo = instrumentos.some(item => {
    return item.toLocaleLowerCase() === "baixo"
})

console.log(ExisteBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let Total = compras.reduce((acc, item, index) => {
    return acc += (item.preco.replace('R$ ','').trim().replace(',','.')) * 1
}, 0)

Total = Total.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})