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

