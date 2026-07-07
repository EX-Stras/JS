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

//const pessoa = {
  //idade: 32,
  //nome: "Júlio",
  //altura: 1.82,
  //informacoes: {
    //pessoais: {
      //CPF: "078.190.123-77",
      //RG: "12131124"
    //},
    //publicas: {
      //nomeCompleto: "Júlio Lavanda Pinto",
      //estadoCivil: "solteiro",
      //rendaMensal: "R$ 7.000,00"
    //}
  //}
//}
//
//const {altura, informacoes: {pessoais}} = pessoa

//console.log(altura, pessoais)

//const [p1, p2] = [1, 2]

//console.log(p1, p2)

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, color, margin} = btnStyles

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]

console.log(cursoAtivo, cursoInativo)

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: corBob} = cachorro;
