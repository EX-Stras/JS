console.clear()

const h1 = document.querySelector('[data-cor]')
const div = document.querySelector('[data-azul]')
console.log(Object.prototype.toString.call(h1),
             Object.getOwnPropertyNames(HTMLHeadingElement.prototype))
console.log(h1.dataset.cor,
            h1.dataset.width,
            div.dataset.azul
)

div.dataset.ola = 500;