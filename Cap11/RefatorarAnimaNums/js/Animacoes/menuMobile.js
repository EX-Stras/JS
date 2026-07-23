import clickOutSide from './outside.js';

export default function menuMobile() {
  const div = document.querySelector('div[data-dropMobile]');

  function dropDown(event) {
    this.classList.add('drop');
    clickOutSide(event, () => {
      this.classList.remove('drop');
      this.removeAttribute('data-outside');
    }, this);
  }

  div.addEventListener('click', dropDown);
}
