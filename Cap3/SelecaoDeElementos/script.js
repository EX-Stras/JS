const id = document.getElementById('pegar');

console.log(id);

const classe = document.getElementsByClassName('q a');

console.log(classe[0]);

const tag = document.getElementsByTagName('header');

console.log(tag[0].innerText);

const query1 = document.querySelector('.faq');

const query2 = query1.querySelector('p:last-child');

console.log(query1.innerHTML)
console.log(query2.innerText)