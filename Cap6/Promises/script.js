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

const num = 1;
let resultado;

const promessa = new Promise(function(resolve, rejected){
    if(num){
        resolve(num)
    } else {
        rejected(Error('oi'))
    }
})

promessa.then(r => {
    console.log(r)
    resultado = r * 10;
    return resultado;
    
}).catch(r => {
    console.log(r)
    return 'oi'
}).then(r => {
    console.log(resultado)
})