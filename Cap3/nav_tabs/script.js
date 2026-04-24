console.clear()

const imagens = document.querySelectorAll('.js-tabmenu img')
const textos = document.querySelectorAll('.js-tabcontent section')
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