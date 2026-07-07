export default function menuMobile(){

    const div = document.querySelector('div[data-dropMobile]')
    div.addEventListener('click', dropDown)

    function dropDown(event){
        this.classList.add('drop')
        clickOutSide(event,  (element) => {
            this.classList.remove('drop')
            this.removeAttribute('data-outside')
        }, this)
    }

}

import clickOutSide from "./outside.js";