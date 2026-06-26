export default function initForms(){
    const form = document.forms
    const botao = form.modal.elements.enviar
    const email = form.modal.elements.email
    const senha = form.modal.elements.senha
    let span;
    
    email.addEventListener("keyup", HandleEvent)
    senha.addEventListener("keyup", HandleEvent)

    function HandleEvent(event){
        if(!this.checkValidity()){
            this.classList.remove('certo')
            this.classList.add('errado')
            console.log(this.getAttribute("name"))
            this.nextElementSibling.innerText = `*${this.validationMessage}`
        } else {
            this.classList.add('certo')
            this.classList.remove('errado')
            this.nextElementSibling.innerText = ""
            console.log(this)
        }
    }

}