export default function initClasses(){

    class Button {
        constructor(text, background, width, height, borderRadius){
            this.text = text
            this.background = background
            this.width = width
            this.height = height
            this.borderRadius = borderRadius
        } 
        element(){
            const botao = document.createElement('button')
            const estilo = botao.style
            botao.innerText = this.text
            estilo.backgroundColor = this.background
            estilo.width = `${this.width}`
            estilo.height = `${this.height}`
            estilo.borderRadius = `${this.borderRadius}`
            document.body.appendChild(botao)
        }
        static falar(){
            return "ola"
        }
    }

    const meuBotao = new Button("VSFD","#FEFEFE", "100%", "100px", "50%")
    console.log(Button.falar())
}