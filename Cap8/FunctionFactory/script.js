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

//function createPerson(height, weight, age, specialization){
    //let state = "On hold..."
    //function hire() {
        //this.state = "hired"
    //}
    //function reject() {
        //this.state = "rejected"
    //}
    //return {
        //state,
        //height,
        //weight,
        //age,
        //specialization,
        //hire,
        //reject
    //}
//}

//const Andre = createPerson(1.70, "69kg", 23, "software engineer")

//console.log(Andre)
//Andre.hire()
//console.log(Andre)

function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return this; // retornar this irá funcionar da mesma forma
  }

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    });
    return this;
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return this;
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
    return this;
  }
  
  return Object.freeze({
    elements,
    on,
    hide,
    show,
    addClass,
    removeClass,
  });
}
