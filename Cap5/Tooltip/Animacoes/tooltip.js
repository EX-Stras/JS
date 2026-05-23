export default function initToolTip(){
    
}

function onMouseOver(event){
    const tooltipbox = criarTooltipBox(this);
}

function criarTooltipBox(element){
    const tooltipBox = document.createElement('div')
    tooltipBox.classList.add('tooltip')
    const text = element.getAttribute('aria-label')
    tooltipBox.innerText = text;
    console.log(tooltipBox)
    document.body.appendChild(tooltipBox)
}

const tooltips = document.querySelectorAll('[data-tooltip]')
tooltips.forEach(item => {
    item.addEventListener('mouseover', onMouseOver)
})