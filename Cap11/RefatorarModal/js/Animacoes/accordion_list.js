export default class AccordionList {
  constructor(selector, class1, class2) {
    this.elements = document.querySelectorAll(selector);
    this.class1 = class1; // animação do receptor
    this.class2 = class2; // animação do reagente
    this.next = this.elements[0].nextElementSibling; // variável de ajuda
  }

  show(element) {
    this.next = element.nextElementSibling;
    element.classList.toggle(this.class1 || element.dataset.anime);
    this.next.classList.toggle(this.class2 || this.next.dataset.anime);
  }

  init() {
    this.elements.forEach((element) => {
      element.addEventListener('click', () => {
        this.show(element);
      });
    });
    this.next = this.elements[0].nextElementSibling;
    this.elements[0].classList.add(this.class1 || this.elements[0].dataset.anime);
    this.next.classList.add(this.class2 || this.next.dataset.anime);

    return this;
  }
}
