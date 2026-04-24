console.clear()

function initTabNav(){
    const imagens = document.querySelectorAll('.js-tabmenu img')
    const textos = document.querySelectorAll('.js-tabcontent section')
    textos[0].classList.add('ativo')
    let num = 0;

    function ativarTAB(index){
        textos.forEach(item => {
            item.classList.remove('ativo')
        })
        textos[index].classList.add('ativo')
    }

    imagens.forEach((item, index) => {
        item.addEventListener('click', function(){
            ativarTAB(index)
        })
    })
}
initTabNav()



function accordion_list(){
    const perguntas = document.querySelectorAll('.js-accordion h2')
    const respostas = document.querySelectorAll('.js-accordion p')

    function mostrar(event){
        this.classList.toggle('mudar')
        this.nextElementSibling.classList.toggle('ativo')
    }
    
    perguntas.forEach((item, index) => {
        item.addEventListener('click', mostrar)
    })
}
accordion_list()



function scroll_suave(){
    const links_internos = document.querySelectorAll('.js-menu a[href^="#"]')

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
    const sections = document.querySelectorAll('.js-scroll')

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