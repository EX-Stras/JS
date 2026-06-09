export default function dropDownMenu(){
    
    function initDropMenu(event){
        if(event.target == aSobre){
            event.preventDefault()
        }
        this.classList.add('drop')
        clickOutSide(event, (element) => {
            this.classList.remove('drop')
            this.removeAttribute('data-outside')
        }, this)
    }

    const aSobre = document.querySelector('a[href="sobre.html"]')
    const menuDrop = document.querySelector('menu[data-drop]')
    const divDrop = document.querySelector('div[data-drop]')
    divDrop.addEventListener('click', initDropMenu)

}

import clickOutSide from "./outside.js";
