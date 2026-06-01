console.clear()

import initTabNav from "./Animacoes/InitTabNav.js";
import accordion_list from "./Animacoes/accordion_list.js";
import animacao_scroll from "./Animacoes/animacao_scroll.js";
import scroll_suave from "./Animacoes/scroll_suave.js";
import modalP from "./Animacoes/modal.js";
import initToolTip from "./Animacoes/tooltip.js";
import dropDownMenu from "./Animacoes/dropDownMenu.js";

initTabNav()
accordion_list()
animacao_scroll()
scroll_suave()
modalP()
initToolTip()
dropDownMenu()

function escrever(texto){
    console.log(texto)
    ++i;
    if(i > 10){
        clearInterval(ola)
    }
}

    let i = 1;

const ola = setInterval(escrever, 1000, 'Lucas')

// Mude a cor da tela para azul e depois para vermelho a cada 2s.
/*
function mudarCor(){
    document.body.classList.toggle('blue')
}

let contador = 0;

const cores = setInterval(mudarCor, 2000)
*/
// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).


const iniciar = document.querySelector('button.iniciar')
const resetar = document.querySelector('button.resetar')
const mostrador = document.querySelector('h1[data-tempo]')
let segundos = 0, minutos = 0, horas = 0, ativado = false, contador;
const html = document.documentElement;
let x = 0;

iniciar.addEventListener('click', iniciando)
resetar.addEventListener('click', resetando)
html.addEventListener('click', waitOrNot)

function iniciando(event){
    if (ativado == false){
        function passou(){
            segundos++;
            if(segundos == 60){
                segundos = 0;
                minutos++;
                if(minutos == 60){
                    minutos = 0;
                    horas++;
                }
            }
            mostrador.innerText = `${horas}:${minutos}:${segundos}`
        }

        contador = setInterval(passou, 1000)
        ativado = true;
    }
}

function resetando(event){
    if (ativado == true){
        event.preventDefault()
        clearInterval(contador)
        mostrador.innerText = `0:0:0`
        ativado = false;
        segundos = 0; minutos = 0; horas = 0;
    }
}

function waitOrNot(){
    x++;
    setTimeout(() => {
        x = 0;
    }, 200)
    if(x > 1){
        clearInterval(contador)
        ativado = false;
        html.addEventListener('click', leaveWait)
        html.removeEventListener('click', waitOrNot)
    }
}

function leaveWait(){
    x++;
    setTimeout(() => {
        x = 0;
    }, 200)
    if(x > 1){
        iniciando()
        html.removeEventListener('click', leaveWait)
        html.addEventListener('click', waitOrNot)
    }
}