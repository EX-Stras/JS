export default function animacaoScroll() {
  const sections = document.querySelectorAll('[data-js=js-scroll]');

  function animacao() {
    sections.forEach((item) => {
      const distancia = item.getBoundingClientRect().top;
      if (distancia < 0) {
        item.classList.add('passou');
      } else if (distancia >= 0 && item.classList.contains('passou')) {
        item.classList.add('voltou');
        setTimeout(() => {
          item.classList.remove('passou');
          item.classList.remove('voltou');
        }, 1000);
      }
    });
  }
  window.addEventListener('scroll', animacao);
}
