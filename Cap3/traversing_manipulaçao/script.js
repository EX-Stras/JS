console.clear()
/*
const Ps = document.querySelector('p')
const aleatorio = (Math.random() ** 2) * 100;

if (aleatorio < 50){
    Ps.innerHTML = `<b>É menor!!!</b>`
} else {
    Ps.innerText = `<b>É maior!!!</b>`
}

const pai = Ps.parentElement
console.log(pai)
const proximo = Ps.nextElementSibling
console.log(proximo)
const ultimo = Ps.previousElementSibling
console.log(ultimo)
console.log(pai.children)
console.log(pai.children[2])

const ultimos = document.querySelectorAll('p:last-child')
console.log(ultimos)

console.log(Ps.previousSibling)
console.log(pai.childNodes)


const divC = document.querySelector('div.contato')
ultimos.forEach(item => {
    divC.appendChild(item)
})

divC.insertBefore(proximo, ultimos[2])
console.log(divC.children)
divC.removeChild(divC.children[1])

const img = document.querySelector('.imgs img')
console.log(img)

divC.replaceChild(img, divC.children[1])


const novoP = document.createElement('p');

novoP.classList.add('novoP')
novoP.innerText = `Muito aura`

divC.appendChild(novoP)
*/

// Duplique o menu e adicione ele em copy

const menu = document.querySelector('menu')
let menuClone = menu.cloneNode(true)

const footer = document.querySelector('footer')

footer.appendChild(menuClone)

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector('.faq')
console.log(faq.children[0])
const DT = document.querySelector('.faq h2')
console.log(DT)
// Selecione o DD referente ao primeiro DT

console.log(faq.children[1])
const DD = document.querySelector('.faq p')
console.log(DD)

// Substitua o conteúdo html de .faq pelo de .animais

const mainP = document.querySelector('main.primario')
faq.innerHTML = mainP.innerHTML;