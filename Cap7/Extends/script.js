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
import animaNums from "./Animacoes/animaNums.js";
import initBitcoin from "./Animacoes/bitcoin.js";

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
animaNums()
initBitcoin()

class programador {
    constructor(nome, tipo, nivel){
        this.nome = nome
        this.tipo = tipo
        this.nivel = nivel
    }
    contratar(){
        return `Parabéns ${this.nome}! você foi contratado como programador ${this.tipo} da EX-Stras!`
    }
    rejeitar(){
        return `Não foi dessa vez ${this.nome}...`
    }
    emEspera(){
        return `Você foi deixado em espera!`
    }
}

class frontEnd extends programador {
    perguntasExtras(){
        console.log('Sabe posicionamento avançado em CSS?')
    }
}

class backEnd extends programador {
    constructor(nome, tipo, nivel, linguagemEspecializado){
        super(nome, tipo, nivel)
        this.linguagemEspecializado = linguagemEspecializado
    }
}

const programador1 = new backEnd('João',"frontEnd","pleno","PHP")

console.log(programador1.contratar())
console.log(programador1)
