const section = document.querySelector('section')

console.log('HEIGHT:')

console.log(`${section.clientHeight}px`)
console.log(`${section.offsetHeight}px`)
console.log(`${section.scrollHeight}px`)

console.log('WIDTH:')

console.log(`${section.clientWidth}px`)
console.log(`${section.offsetWidth}px`)
console.log(`${section.scrollWidth}px`)

console.log('DISTANCIA ATÉ A BORDA:')

console.log(`${section.offsetLeft}px`)
console.log(`${section.offsetTop}px`)

console.log('GET BOUNDING:')

const react = section.getBoundingClientRect();

console.log(react)

console.log('WINDOW:')

console.log(window.pageYOffset)
console.log(window.pageXOffset)
console.log(window.innerHeight)
console.log(window.innerWidth)

console.log('MATCH-MEDIA:')

const telap = matchMedia('(max-width: 800px)')

if(telap.matches){
    console.log('telap')
} else {
    console.log('telag')
}