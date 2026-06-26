const img = document.querySelector('main img')
const p = document.querySelector('p.ico')
const audio = new Audio('re-zero-return-by-death.mp3')

p.addEventListener('click', imgMove)
img.addEventListener('click', HandleClick)
img.style.transition = ".5s"
contador = false;
contador2 = false;
 
function HandleClick(event){
    if (contador == false){
        img.style.transform = "rotate(360deg)"
        contador = true;
    } else {
        img.style.transform = "rotate(0deg)"
        contador = false;
    }
}

function imgMove(event){
    if (contador2 == false){
        img.style.transform = "translate3d(0,-600px,0)"
        img.style.opacity = "0"
        contador2 = true
    } else {
        img.style.transform = "translate3d(0,0,0)"
        img.style.opacity = "1"
        contador2 = false
        audio.play()
    }
}