console.clear()

import initTabNav from "./Animacoes/InitTabNav.js";
import accordion_list from "./Animacoes/accordion_list.js";
import animacao_scroll from "./Animacoes/animacao_scroll.js";
import scroll_suave from "./Animacoes/scroll_suave.js";
import modalP from "./Animacoes/modal.js";
import initToolTip from "./Animacoes/tooltip.js";
import dropDownMenu from "./Animacoes/dropDownMenu.js";
import menuMobile from "./Animacoes/menuMobile.js";
import initFuncionamento from "./Animacoes/date.js";
import initForms from "./Animacoes/form.js";

initTabNav()
accordion_list()
animacao_scroll()
scroll_suave()
modalP()
initToolTip()
dropDownMenu()
menuMobile()
initFuncionamento()
initForms()

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const formulario = document.forms.endereco;
const input = formulario.elements.cep;
const botao = formulario.elements.busca;
const resul = document.querySelector('main[data-form] p[data-resultado]')
let CEP;

botao.addEventListener('click', buscar)

function buscar(event){
    event.preventDefault()
    CEP = input.value;
    fetch(`https://viacep.com.br/ws/${CEP}/json/`).then(response => {
        return response.text()
    }).then(endereco => {
        resul.innerText = endereco.replace('{', '').replace('}','')
    })
}
// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

let compra;
const p = document.querySelector('main[data-bitcoin] p')

function pesquisar(){
    fetch("https://blockchain.info/ticker").then(response => {
        return response.json()
    }).then(valor => {
        compra = valor.BRL.buy
        compra = compra.toLocaleString('pt-BR',{style: 'currency', currency: "BRL"})
        p.innerText = compra
    })
}

pesquisar()

//setInterval(pesquisar(), 30000)

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const contar = document.querySelector('button[data-piada]')
const paragrafo = document.querySelector('p[data-piada')
contar.addEventListener('click', contarPiada)

function contarPiada(event){
    event.preventDefault()
    fetch("https://api.chucknorris.io/jokes/random").then(response => {
        return response.json()
    }).then(piada => {
        paragrafo.innerText = piada.value
    })
}
