export default function initForms(){
    const form = document.forms
    const botao = form.modal.elements.enviar
    const email = form.modal.elements.email
    const senha = form.modal.elements.senha
    const usuarios = []; let quant = 0;
    
    botao.addEventListener("click", HandleEvent)

    function HandleEvent(event){
        event.preventDefault()
        usuarios[quant] = new NovoUsu(email.value, senha.value)
        console.log(usuarios[quant])
        quant++;
    }

    function NovoUsu(email, senha){
        this.email = email
        this.senha = senha
        let nome = email.split("@")[0]
        this.nome = nome
    }


}