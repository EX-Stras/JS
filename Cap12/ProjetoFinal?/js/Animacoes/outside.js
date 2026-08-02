export default function clickOutSide(x, callback, element) {
  const html = document.documentElement;
  function OutSide(event) {
    if (!element.contains(event.target)) {
      callback();
      html.removeEventListener('click', OutSide);
    }
  }
  if (!element.hasAttribute('data-outside')) {
    html.addEventListener('click', OutSide);
  }
  element.setAttribute('data-outside', '');
}
