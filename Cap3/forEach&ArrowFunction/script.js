const tags1 = document.getElementsByTagName('p');

const tags2 = Array.from(tags1);

console.log('MÉTODO FOREACH:')

tags2.forEach(function(item){
    console.log(item)
})
console.log('HTML-COLLECTION:')
console.log(tags1)
console.log('ARRAY:')
console.log(tags2)

console.log('ARRAY-FUNCTION:')
tags2.forEach(item => console.log(item));

console.log('EXERCÍCIO:')
// Mostre no console cada parágrado do site
const p = document.querySelectorAll('p');

p.forEach(item => console.log(item))
// Mostre o texto dos parágrafos no console

p.forEach(item => console.log(item.innerText))
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => console.log(item, index));

let i = 0;
imgs.forEach(() => console.log(i++));

imgs.forEach(() => i++);

