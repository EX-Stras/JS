console.clear()

function initTabNav(){
    const imagens = document.querySelectorAll('[data-js=js-tabmenu] img')
    const textos = document.querySelectorAll('[data-js=js-tabcontent] section')
    textos[0].classList.add(textos[0].dataset.anime)
    let num = 0;

    function ativarTAB(index){
        textos.forEach(item => {
            item.classList.remove(item.dataset.anime)
        })
        textos[index].classList.add(textos[index].dataset.anime)
    }

    imagens.forEach((item, index) => {
        item.addEventListener('click', function(){
            ativarTAB(index)
        })
    })
}
initTabNav()



function accordion_list(){
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
accordion_list()



function scroll_suave(){
    const links_internos = document.querySelectorAll('[data-js=js-menu] a[href^="#"]')

    function scroll(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        distancia = section.offsetTop
        window.scrollTo({
            top: distancia,
            behavior: 'smooth',
        })
    }

    links_internos.forEach(item => {
        item.addEventListener('click', scroll)
    })
}
scroll_suave()



function animacao_scroll(){
    const sections = document.querySelectorAll('[data-js=js-scroll]')

    function animacao(event){
        sections.forEach(item => {
           const distancia = item.getBoundingClientRect().top;
           if (distancia < 0){
            item.classList.add('passou')
           } else if (distancia >= 0 && item.classList.contains('passou')){
            item.classList.add('voltou')
            setTimeout(() => {
                item.classList.remove('passou')
                item.classList.remove('voltou')
            }, 1000);
           }
        })
    }
    window.addEventListener('scroll', animacao)
}
animacao_scroll()

