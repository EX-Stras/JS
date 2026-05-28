export default function accordion_list(){
    const perguntas = document.querySelectorAll('[data-js=js-accordion] h2')
    const respostas = document.querySelectorAll('[data-js=js-accordion] p')

    function mostrar(event){
        this.classList.toggle('mudar')
        this.nextElementSibling.classList.toggle('show-right')
    }
    
    perguntas.forEach((item, index) => {
        item.addEventListener('click', mostrar)
    })
}