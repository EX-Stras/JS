const submit = document.querySelector('input[type="button"]')

//CPF//

function construirCPF(cpf){
    return cpf.replace(/(\d{3})(\d{3})(\d{3})/g, '$1.$2.$3-')
}

function limparCPF(cpf){
    cpf = cpf.replace(/\D/g,'')
    return cpf
}

function verificarCPF(cpf){
    const regexp = /^(?:\d{3}[-.\s]?){3}\d{2}$/
    const resultado = regexp.exec(cpf)

    if(resultado){
        cpf = limparCPF(cpf)
        return construirCPF(cpf)
    } else {
        return false 
    }
}

//EMAIL//

function verificarEmail(email){
    const regexp = /^\w(?:[A-Za-z0-9]+[\-\.\_]?[A-Za-z0-9])+@\w+\.(?:\w+[\.\-]?)+/
    return regexp.exec(email) || false
}

/////////

function ler(){
    const inputCPF = document.querySelector('input#icpf')
    const inputEmail = document.querySelector('input#iemail')

    inputCPF.classList.remove('errado')
    inputEmail.classList.remove('errado')

    const cpf = verificarCPF(inputCPF.value)
    const email = verificarEmail(inputEmail.value)

    if(cpf && email){
        localStorage.cpf = cpf
        localStorage.email = email

        window.history.pushState(null,null, 'extras/extra.html')
        location.reload()
    } else {
        if(!cpf){
            inputCPF.classList.add('errado')
        } 
        if (!email) {
            inputEmail.classList.add('errado')
        }
    }
}

submit.addEventListener('click', ler)