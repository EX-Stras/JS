export default class ScrollSuave {
  constructor(seletor) {
    this.elementos = document.querySelectorAll(seletor);
    this.push = function scroll(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      const { offsetTop: top } = section;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    };
  }

  get elements() {
    return this.elementos;
  }

  set elements(seletor) {
    this.elementos = document.querySelectorAll(seletor);
  }

  addAnimation() {
    this.elementos.forEach((item) => {
      item.addEventListener('click', this.push);
    });
  }

  removeAnimation() {
    this.elementos.forEach((item) => {
      item.removeEventListener('click', this.push);
    });
  }
}
