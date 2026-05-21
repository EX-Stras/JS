export function abrir(){
    const modal = document.querySelector('section[data-modal=conteiner]')
    const button = document.querySelector('header a[href^=https]')
    button.addEventListener('click', (event) => {
        event.preventDefault()
        modal.classList.add(modal.dataset.modal)
    })
}

export function fechar(){
    const modalX = document.querySelector('section button[data-modal=fecharX]')
    const modal = document.querySelector('section[data-modal=conteiner]')
    modalX.addEventListener('click', (event) => {
        event.preventDefault()
        modal.classList.add(modalX.dataset.modal)
        modal.classList.remove(modal.dataset.modal)
        modal.classList.remove(modalX.dataset.modal)
    })
}