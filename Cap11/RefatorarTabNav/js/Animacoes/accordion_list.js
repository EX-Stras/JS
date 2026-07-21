export default class AccordionList {
  constructor(selector, animationFor1, animationFor2) {
    this.elements = document.querySelectorAll(selector);
    this.animationFor1 = animationFor1;
    this.animationFor2 = animationFor2;
  }

  show(element) {
    element.classList.toggle(this.animationFor1);
    element.nextElementSibling.classList.toggle(this.animationFor2);
  }

  init() {
    this.elements.forEach((element) => {
      element.addEventListener('click', () => {
        this.show(element);
      });
    });
    this.elements[0].classList.add(this.animationFor1);
    this.elements[0].nextElementSibling.classList.add(this.animationFor2);
    return this.elements;
  }
}
