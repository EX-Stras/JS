const infocpf = document.querySelector('span[data-cpf]')
const infoemail = document.querySelector('span[data-email]')

const cpf = localStorage.getItem('cpf')
const email = localStorage.getItem('email')

infocpf.innerText = cpf
infoemail.innerText = email 

