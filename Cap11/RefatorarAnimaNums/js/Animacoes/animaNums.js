export default class AnimaNums {
  constructor(selector1, selector2, json1) {
    this.selector1 = document.querySelectorAll(selector1);
    this.selector2 = document.querySelector(selector2); // pai do elemento
    this.json1 = json1; // link para os dados

    this.handleScroll = this.handleScroll.bind(this);
  }

  static push(element, increase, total, interval) {
    element.innerText = `${+element.innerText + increase}`;
    if (+element.innerText > total) {
      element.innerText = `${total}`;
      clearInterval(interval);
    }
  }

  handleScroll() {
    const { y } = this.selector2.getBoundingClientRect();
    if (y < 350) {
      this.selector1.forEach((item) => {
        const increase = Math.floor(this.json1[item.dataset.anime] / 100);
        const total = this.json1[item.dataset.anime];
        const interval = setInterval(() => {
          this.constructor.push(item, increase, total, interval);
        }, 25);
      });
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  async init() {
    if (this.selector1 && this.selector2) {
      try {
        const response = await fetch(this.json1);
        const json = await response.json();
        [this.json1] = json;

        window.addEventListener('scroll', this.handleScroll);
      } catch (error) {
        console.log(Error(error));
      }
    }

    return this;
  }
}
