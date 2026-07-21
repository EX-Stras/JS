export default class AccordionList {
  constructor(selector, animationFor1, animationFor2) {
    this.elements = document.querySelectorAll(selector);
    this.show = function mostrar() {
      this.classList.toggle(animationFor1);
      this.nextElementSibling.classList.toggle(animationFor2);
    };
  }

  init() {
    this.elements.forEach((element) => {
      element.addEventListener('click', this.show);
    });
    return this.elements;
  }

  remove() {
    this.elements.forEach((element) => {
      element.removeEventListener('click', this.show);
    });
    return this.elements;
  }
}
