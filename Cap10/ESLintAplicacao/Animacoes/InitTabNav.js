export default function initTabNav() {
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
}
