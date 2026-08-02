import Debounce from './debounce.js';

export default class AnimacaoScroll {
  constructor(selector1, class1) {
    this.selector1 = Array.from(document.querySelectorAll(selector1));
    this.class1 = class1;
    this.$ = []; // variável auxiliar

    this.handleScroll = Debounce(this.handleScroll.bind(this), 50);
  }

  add(item) {
    item.classList.add(this.class1 || item.dataset.anime);
  }

  getDistance() {
    this.$ = this.selector1.map((item) => {
      const y = item.offsetTop;
      return {
        item,
        y: Math.floor(y - window.innerHeight * 0.6),
      };
    });
  }

  handleScroll() {
    this.$.forEach((data) => {
      const distance = window.pageYOffset;
      if (data.y < distance) {
        this.add(data.item);
      }
    });
  }

  init() {
    if (this.selector1.length) {
      this.getDistance();
      window.addEventListener('scroll', this.handleScroll);
      this.add(this.selector1[0]);
    }
    return this;
  }
}
