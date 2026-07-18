export default function scrollSuave() {
  const linkSinternos = document.querySelectorAll('header a[href^="#"]');

  function scroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const distancia = section.offsetTop;
    window.scrollTo({
      top: distancia,
      behavior: 'smooth',
    });
  }

  linkSinternos.forEach((item) => {
    item.addEventListener('click', scroll);
  });
}
