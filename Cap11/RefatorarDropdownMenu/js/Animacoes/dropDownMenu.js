import clickOutSide from './outside.js';

export default class DropDownMenu {
  constructor(selector1, selector2, class1) {
    this.selector1 = document.querySelector(selector1);
    this.selector2 = document.querySelector(selector2);
    this.class1 = class1;

    this.dropMenu = this.dropMenu.bind(this);
  }

  dropMenu(event) {
    if (event.target === this.selector1) event.preventDefault();
    this.selector2.classList.add(this.class1 || this.selector2.dataset.anime);
    clickOutSide(event, () => {
      this.selector2.classList.remove(this.class1 || this.selector2.dataset.anime);
      this.selector2.removeAttribute('data-outside');
    }, this.selector2);
  }

  init() {
    if (this.selector1 && this.selector2) {
      this.selector2.addEventListener('click', this.dropMenu);
    }
  }
}
