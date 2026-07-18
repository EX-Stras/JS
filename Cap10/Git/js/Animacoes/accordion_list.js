export default function accordionList() {
  const perguntas = document.querySelectorAll('[data-js=js-accordion] h2');

  function mostrar() {
    this.classList.toggle('mudar');
    this.nextElementSibling.classList.toggle('show-right');
  }

  perguntas.forEach((item) => {
    item.addEventListener('click', mostrar);
  });
}
