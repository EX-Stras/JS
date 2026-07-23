export default class AccordionList {
  constructor(selector1, class1, class2) {
    this.selector1 = document.querySelectorAll(selector1);
    this.class1 = class1; // animação do receptor
    this.class2 = class2; // animação do reagente
    this.$ = ''; // variável auxiliar
  }

  show(element) {
    this.$ = element.nextElementSibling;
    element.classList.toggle(this.class1 || element.dataset.anime);
    this.$.classList.toggle(this.class2 || this.$.dataset.anime);
  }

  init() {
    if (this.selector1.length) {
      this.selector1.forEach((element) => {
        element.addEventListener('click', () => this.show(element));
      });
      this.$ = this.selector1[0].nextElementSibling;
      this.selector1[0].classList.add(this.class1 || this.selector1[0].dataset.anime);
      this.$.classList.add(this.class2 || this.$.dataset.anime);
    }

    return this;
  }
}
