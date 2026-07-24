export default class Bitcoin {
  constructor(selector1, value1, coin1) {
    this.selector1 = document.querySelector(selector1); // elemento que vai exibir
    this.value1 = +value1; // valor em bitcoin
    this.coin1 = coin1 || 'BRL';
  }

  async init() {
    if (this.selector1) {
      try {
        const response = await fetch('https://blockchain.info/ticker');
        const json = await response.json();

        const total = (this.value1 / json[this.coin1].buy).toFixed(4);
        this.selector1.innerText = total;
      } catch (error) {
        console.log(Error(error));
      }
    }
  }
}
