export default class ScrollSuave {
  constructor(selector1) {
    this.selector1 = document.querySelectorAll(selector1);
  }

  push(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const { offsetTop: top } = section;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });

    return this;
  }

  init() {
    if (this.selector1.length) {
      this.selector1.forEach((item) => item.addEventListener('click', this.push));
    }
    return this;
  }
}
