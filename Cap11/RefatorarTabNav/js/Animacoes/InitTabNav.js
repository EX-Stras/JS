export default class TabNav {
  constructor(selector1, selector2, desativacao, animation) {
    this.selector1 = document.querySelectorAll(selector1);
    this.selector2 = document.querySelectorAll(selector2);
    this.animation = animation;
    this.desativacao = desativacao;
  }

  show(index) {
    this.selector2.forEach((content) => {
      content.classList.remove(this.animation || content.dataset.anime);
      content.classList.add(this.desativacao || 'desativo');
    });
    this.selector2[index].classList.add(this.animation || this.selector2[index].dataset.anime);
    this.selector2[index].classList.remove(this.desativacao || 'desativo');
  }

  init() {
    this.selector1.forEach((element, index) => {
      element.addEventListener('click', () => {
        this.show(index);
      });
    });
    this.show(0);
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
