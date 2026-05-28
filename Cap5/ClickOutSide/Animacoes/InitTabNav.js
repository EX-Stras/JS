export default function initTabNav(){
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