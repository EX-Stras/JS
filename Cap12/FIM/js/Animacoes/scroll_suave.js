export default class ScrollSuave {
  constructor(selector1) {
    this.selector1 = document.querySelectorAll(selector1);
  }

  static getDistance(item) {
    const href = item.getAttribute('href');
    const section = document.querySelector(href);
    item.dataset.top = section.offsetTop;
  }

  static push(event) {
    event.preventDefault();
    window.scrollTo({
      top: event.currentTarget.dataset.top,
      behavior: 'smooth',
    });
  }

  init() {
    if (this.selector1.length) {
      this.selector1.forEach((item) => {
        this.constructor.getDistance(item);
        item.addEventListener('click', this.constructor.push);
      });
    }
    return this;
  }
}
