export default class TabNav {
  constructor(selector1, selector2, class1, class2) {
    this.selector1 = document.querySelectorAll(selector1); // recebe o click
    this.selector2 = document.querySelectorAll(selector2); // reage ao click
    this.class1 = class1; // classe de desativação
    this.class2 = class2; // classe de animação
    this.$ = ''; // variável auxiliar
  }

  show(index) {
    this.selector2.forEach((content) => {
      this.$ = content.classList;
      this.$.remove(this.class2 || content.dataset.anime);
      this.$.add(this.class1 || 'desativo');
    });
    this.$ = this.selector2[index];
    this.$.classList.add(this.class2 || this.$.dataset.anime);
    this.$.classList.remove(this.class1 || 'desativo');
  }

  init() {
    if (this.selector1.length && this.selector2.length) {
      this.selector1.forEach((element, index) => {
        element.addEventListener('click', () => this.show(index));
      });

      this.show(0);
    }

    return this;
  }
}

/*
  const imagens = document.querySelectorAll('[data-js=js-tabmenu] img');
  const textos = document.querySelectorAll('[data-js=js-tabcontent] section.desativo');
  textos[0].classList.add(textos[0].dataset.anime);
  textos[0].classList.remove('desativo');

  function ativarTAB(index) {
    textos.forEach((item) => {
      item.classList.remove(item.dataset.anime);
      item.classList.add('desativo');
    });
    textos[index].classList.add(textos[index].dataset.anime);
    textos[index].classList.remove('desativo');
  }

  imagens.forEach((item, index) => {
    item.addEventListener('click', () => {
      ativarTAB(index);
    });
  });
*/
