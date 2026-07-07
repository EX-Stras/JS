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

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

function criarLI(classe){
  const li = document.createElement('li')
  li.classList.add(classe)
  return li
}

const lis = ['primeiro','segundo','terceiro','quarto']
let i = 0;

for(const classe of lis){
  lis[i] = criarLI(classe)
  i += 1
}

console.log(...lis)

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const prop in window){
  console.log(`${prop}: ${window[prop]}`)
}
