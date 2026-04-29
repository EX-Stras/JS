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


function Strings(){
    const nome = "Lucas",
        ano = new String(2018);

    console.log(nome[--nome.length])
    console.log(ano)

    const nomeCompleto = nome.concat(ano,' ','hetero')
    console.log(nomeCompleto)

    console.log(nome.includes('Lu'))
    console.log(nome.startsWith('Lu'), nome.endsWith('as'))

    const exemplo = 'hetero '

    console.log(exemplo.slice(-3, -2))

    console.log(exemplo.indexOf('e'))
    console.log(exemplo.lastIndexOf('e'))

    console.log(exemplo.padEnd(10, '.'))
    console.log(exemplo.padStart(10, '.'))

    console.log(exemplo.repeat(5))

    console.log(exemplo.replace('r','v'))

    let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
    listaItens = listaItens.replace(/[ ]+/g, ', ');
    console.log(listaItens)

    console.log(exemplo.split('e'))

    let nomes = ["Lucas","José","Gustavo"];
    console.log(nomes.join(', '))

    const cumprimento = '   ola   ';
    console.log(
        cumprimento.trimStart(),
        cumprimento.trimEnd(),
        cumprimento.trim()
    )
}
Strings()

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento


const transacoes1 = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let informacao = [];
let x = 0;
transacoes1.forEach((item) => {
    if (item.descricao.includes('Taxa')){
    informacao[x] = item.descricao.concat(': ', item.valor)
    x++;
    }
})

console.log(informacao)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

let transportes2 = [];
transportes2 = transportes.split(';');
console.log(transportes2)

// Substitua todos os span's por a's
let html = `    
<ul>
    <li><span>Sobre</span></li>
    <li><span>Produtos</span></li>
    <li><span>Contato</span></li>
</ul>`;

let html2 = [];
html2 = html.split('span')
html = html2.join('a')
console.log(html)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1])

// Retorne o total de taxas

const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let quantidadeDeTaxas = 0;

transacoes2.forEach(item => {
    if(item.toLowerCase().includes('taxa')){
        quantidadeDeTaxas++;
    }
})

console.log(quantidadeDeTaxas)
