export default class AnimacaoScroll {
  constructor(selector1, class1) {
    this.selector1 = Array.from(document.querySelectorAll(selector1));
    this.class1 = class1;
    this.$ = []; // variável auxiliar

    this.handleScroll = this.handleScroll.bind(this);
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
    console.log(this.$);
  }

  handleScroll() {
    this.$.forEach((data) => {
      console.log(window.pageYOffset);
      const distance = window.pageYOffset;
      if (data.y < distance) {
        this.add(data.item);
      }
    });
  }

  init() {
    this.getDistance();
    window.addEventListener('scroll', this.handleScroll);
    this.add(this.selector1[0]);
  }
}
