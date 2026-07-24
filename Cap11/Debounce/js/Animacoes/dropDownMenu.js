import clickOutSide from './outside.js';

export default function dropDownMenu() {
  const aSobre = document.querySelector('a[href="sobre.html"]');
  const divDrop = document.querySelector('div[data-drop]');

  function initDropMenu(event) {
    if (event.target === aSobre) {
      event.preventDefault();
    }
    this.classList.add('drop');
    clickOutSide(event, () => {
      this.classList.remove('drop');
      this.removeAttribute('data-outside');
    }, this);
  }

  divDrop.addEventListener('click', initDropMenu);
}
