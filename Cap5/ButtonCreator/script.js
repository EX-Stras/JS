const form = document.forms[0]
const css = document.querySelector('.css')
const button = document.querySelector('button.btn')

form.addEventListener('change', HandleChange)

function HandleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    
    handleStyle[name](value)
    showCss();
}

const handleStyle = {
    element: button,
    texto(value){
        this.element.innerText = value;
    },
    backgroundColor(value){
        this.element.style.backgroundColor = value;
    },
    color(value){
        this.element.style.color = value;
    },
    height(value){
        this.element.style.height = value + 'px';
    },
    width(value){
        this.element.style.width = value + 'px';
    },
    border(value){
        this.element.style.border = value
    },
    borderRadius(value){
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value){
        this.element.style.fontFamily = value
    },
    fontSize(value){
        this.element.style.fontSize = value + 'rem';
    },
}


function showCss(){
    css.innerHTML = '<span>' + button.style.cssText.split('; ').join(';</span><span>')
}
