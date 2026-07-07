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

class p {
    constructor(text, fontSize) {
        this.text = text
        this.fontSize = fontSize
    }
    create(className) {
        this.className = className
        this.element = document.createElement(`p`)
        this.element.classList.add(`${className}`)
        this.element.innerText = `${this.text}`
        this.element.style.fontSize = `${this.fontSize}px`
        return this.element
    }
    appendTo(tag) {
        this.father = document.querySelector(`${tag}`)
        this.father.appendChild(this.element)
    }
    get tag() {
        return this.element || "não definido"
    }
}

const meuP = new p("ola", 40)

console.log(meuP.create('new'))
meuP.appendTo('body')