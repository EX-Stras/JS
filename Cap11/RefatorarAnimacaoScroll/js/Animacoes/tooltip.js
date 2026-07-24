export default class ToolTip {
  constructor(selector1, class1, conteudo1) {
    this.selector1 = document.querySelectorAll(selector1); // zona de surgimento
    this.class1 = class1; // estilo
    this.conteudo = conteudo1;
    this.$ = ''; // variavel auxiliar

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseLeave({ currentTarget: $2 }) {
    this.$.remove();
    $2.removeEventListener('mouseleave', this.onMouseLeave);
    $2.removeEventListener('mousemove', this.onMouseMove);

    return this;
  }

  onMouseMove(event) {
    this.$.setAttribute('style', `top: ${event.pageY + 20}px; left: ${event.pageX + 20}px;`);

    return this;
  }

  criarTooltipBox(item) {
    this.$ = document.createElement('div');
    this.$.classList.add(this.class1 || item.dataset.anime);
    this.$.innerText = this.conteudo || item.getAttribute('aria-label');
    document.body.appendChild(this.$);

    return this;
  }

  onMouseOver({ currentTarget: $2 }) {
    this.criarTooltipBox($2);

    $2.addEventListener('mouseleave', this.onMouseLeave);
    $2.addEventListener('mousemove', this.onMouseMove);
  }

  init() {
    if (this.selector1.length) {
      this.selector1.forEach((event) => {
        event.addEventListener('mouseover', this.onMouseOver);
      });
    }

    return this;
  }
}
