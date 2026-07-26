export default class Funcionamento {
  constructor(selector1, class1) {
    this.selector1 = document.querySelectorAll(selector1);
    this.class1 = class1;
  }

  test(item) {
    const now = new Date();
    const hours = item.dataset.horario.split(',').map(Number);
    const days = item.dataset.semana.split(',').map(Number);

    const dayNow = now.getDay();
    let hourNow = now.getUTCHours() - 3;
    hourNow = hourNow < 0 ? 24 + hourNow : now.getUTCHours();

    const HoursOpen = hours[0] <= hourNow && hours[1] > hourNow;
    const DaysOpen = days[0] <= dayNow && days[1] > dayNow;

    if (HoursOpen && DaysOpen) {
      item.classList.add(this.class1 || item.dataset.anime);
    }
  }

  init() {
    if (this.selector1.length) {
      this.selector1.forEach((item) => this.test(item));
    }
    return this;
  }
}
