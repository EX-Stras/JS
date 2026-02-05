console.log(window);

console.log(window.innerHeight, window.innerWidth)

if (window.innerWidth > 700)
    console.log(window.alert('Olá'))

titulo = document.querySelector('main');
console.log(titulo.classList)
console.log(titulo.innerText)
console.log(titulo.id)
console.log(titulo.offsetWidth)
console.log(titulo.offsetHeight)

titulo.addEventListener('click', function(){
console.log('Clicou em', titulo)
})

console.log('///////////////////////////////')

// Retorne o url da página atual utilizando o objeto window

console.log(window.location.href)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

ativo = document.querySelector('.ativo');

console.log(ativo)

listas = document.querySelectorAll('#lista')

console.log(listas)
// Retorne a linguagem do navegador


console.log(window.navigator.language)

// Retorne a largura da janela 

console.log(window.innerWidth)
