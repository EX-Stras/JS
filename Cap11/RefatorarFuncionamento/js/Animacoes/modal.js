export default class ModalP {
  constructor(selector1, selector2, selector3, class1) {
    this.selector1 = document.querySelector(selector1); // modal
    this.selector2 = document.querySelector(selector2); // botão de abrir
    this.selector3 = document.querySelector(selector3); // botão de fechar
    this.class1 = class1;
  }

  outsideModal(event) {
    if (event.target === this.selector1) this.toggleModal(event);
  }

  toggleModal(event) {
    event.preventDefault();
    this.selector1.classList.toggle(this.class1 || this.selector1.dataset.anime);
  }

  init() {
    if (this.selector1 && this.selector2 && this.selector3) {
      this.selector1.addEventListener('click', (event) => this.outsideModal(event));
      this.selector2.addEventListener('click', (event) => this.toggleModal(event));
      this.selector3.addEventListener('click', (event) => this.toggleModal(event));
    }

    return this;
  }
}
