export default class AccordionList {
  constructor(selector, animationFor1, animationFor2) {
    this.elements = document.querySelectorAll(selector);
    this.animationFor1 = animationFor1;
    this.animationFor2 = animationFor2;
  }

  show(element) {
    const proximo = element.nextElementSibling;
    element.classList.toggle(this.animationFor1 || element.dataset.anime);
    proximo.classList.toggle(this.animationFor2 || proximo.dataset.anime);
  }

  init() {
    this.elements.forEach((element) => {
      element.addEventListener('click', () => {
        this.show(element);
      });
    });
    const proximo0 = this.elements[0].nextElementSibling;
    this.elements[0].classList.add(this.animationFor1 || this.elements[0].dataset.anime);
    proximo0.classList.add(this.animationFor2 || proximo0.dataset.anime);

    return this.elements;
  }
}
