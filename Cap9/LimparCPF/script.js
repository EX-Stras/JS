let lis = document.querySelectorAll('li')
lis = Array.from(lis)

function limparCPF(cpf){
    cpf = cpf.replace(/\D/g, '')
    cpf = cpf.replace(/\d{9}/, '$&-')
    cpf = cpf.replace(/(\d{3})(\d{3})/g, '$1.$2.')
    return cpf
}

const limpos = lis.map(item => {
    return limparCPF(item.innerText)
})

limpos.forEach(item => {
    console.log(item)
})