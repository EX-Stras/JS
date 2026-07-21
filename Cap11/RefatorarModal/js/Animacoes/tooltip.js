export default function initToolTip() {
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    const text = element.getAttribute('aria-label');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseLeave = {
    tooltipbox: '',
    handleEvent() {
      this.tooltipbox.remove();
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipbox.setAttribute('style', `left:${event.pageX + 20}px; top:${event.pageY + 20}px`);
    },
  };

  function onMouseOver() {
    const tooltipbox = criarTooltipBox(this);

    onMouseMove.tooltipbox = tooltipbox;
    onMouseLeave.tooltipbox = tooltipbox;
    this.addEventListener('mouseleave', onMouseLeave);
    this.addEventListener('mousemove', onMouseMove);
  }

  const tooltips = document.querySelectorAll('[data-tooltip]');
  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
