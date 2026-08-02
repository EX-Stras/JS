import clickOutSide from './outside.js';

export default class DropDownMenu {
  constructor(selector1, class1) {
    this.selector1 = document.querySelectorAll(selector1); // menu
    this.class1 = class1;

    this.dropMenu = this.dropMenu.bind(this);
  }

  dropMenu(event, item) {
    event.preventDefault();
    item.classList.add(this.class1 || item.dataset.anime);
    clickOutSide(event, () => {
      item.classList.remove(this.class1 || item.dataset.anime);
      item.removeAttribute('data-outside');
    }, item);
  }

  init() {
    if (this.selector1.length) {
      this.selector1.forEach((item) => {
        item.addEventListener('click', (event) => this.dropMenu(event, item));
      });
    }
    return this;
  }
}
