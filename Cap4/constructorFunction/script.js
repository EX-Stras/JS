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

/*
let pasto = 200;

const boi = {
    peso: 400,
    valor: 5000,
    nome: "Osvaldo",
    comer() {
        console.log(`${this.nome} comeu 1 grama de ${pasto} que tinha no pasto!`)
        pasto = pasto - 1;
    },
}

console.log(boi)
*/
/*
function cachorro(altura, largura, raça){
    this.altura = altura;
    this.largura = largura;
    this.raça = raça;
}

const viraLata = new cachorro(1.4, 3.7, 'Vira-Lata');
console.log(viraLata)
*/
/*
const div = document.querySelectorAll('div.contato')

function s(seletor) {
    this.seletor = seletor;
    this.mostrar = function () {
        return document.querySelector(this.seletor)
    }
    this.ativo = function() { 
        this.mostrar().classList.add('ativo')
    }
}

const contato = new s('div.contato')
*/












// Transforme o objeto abaixo em uma Constructor Function
function pessoa(nome, idade) {
  this.nome = nome,
  this.idade = idade,
  this.andar = function() {
    return this.nome + ' andou'
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const Joao = new pessoa('João', 20)
const Maria = new pessoa('Maria', 25)
const Bruno = new pessoa('Bruno', 15)


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function manipulacao(seletor){
    this.seletor = seletor;
    const node = document.querySelectorAll(this.seletor)
    this.elements = function(){
        return node;
    }
    this.add = function(classe){
        node.forEach(item => {
            item.classList.add(classe)
        })
    }
    this.remove = function(classe){
        node.forEach(item => {
            item.classList.remove(classe)
        })
    }
}

const divC = new manipulacao('div.contato p')