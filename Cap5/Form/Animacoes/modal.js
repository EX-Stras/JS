export default function modalP(){
    const modal = document.querySelector('section[data-modal=conteiner]')
    const button = document.querySelector('header a[href^=https]')
    const modalX = document.querySelector('section button[data-modal=fecharX]')

    function toogleModal(){
        event.preventDefault()
        modal.classList.toggle(modal.dataset.modal)
    }

    function foraModal(){
        if(event.target === modal){
            toogleModal()
        }
    }

    button.addEventListener("click", toogleModal)
    modalX.addEventListener("click", toogleModal)
    modal.addEventListener("click", foraModal)
}

