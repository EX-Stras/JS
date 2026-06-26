export default function initToolTip(){
    
    function onMouseOver(event){
        const tooltipbox = criarTooltipBox(this, event);

        onMouseMove.tooltipbox = tooltipbox;
        onMouseLeave.tooltipbox = tooltipbox;
        this.addEventListener('mouseleave', onMouseLeave)
        this.addEventListener('mousemove', onMouseMove)
    }

    function criarTooltipBox(element, event){
        const tooltipBox = document.createElement('div')
        tooltipBox.classList.add('tooltip')
        const text = element.getAttribute('aria-label')
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox)
        return tooltipBox;
    }

    const onMouseLeave = {
        tooltipbox: '',
        handleEvent(){
        this.tooltipbox.remove()
        }
    }

    const onMouseMove = {
        handleEvent(event){
            this.tooltipbox.setAttribute('style',`left:${event.pageX + 20}px; top:${event.pageY + 20}px`)
        }
    }

    const tooltips = document.querySelectorAll('[data-tooltip]')
    tooltips.forEach(item => {
        item.addEventListener('mouseover', onMouseOver)
    })

}

