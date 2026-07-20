export default function animacaoScroll() {
  const titles = document.querySelectorAll('[data-title]');

  function HandleScroll() {
    titles.forEach((title) => {
      const mapa = title.getBoundingClientRect();
      if (mapa.y < 500) {
        title.classList.add('reveal');
        title.nextElementSibling.classList.add('reveal');
      }
    });
  }

  HandleScroll();
  window.addEventListener('scroll', HandleScroll);
}
