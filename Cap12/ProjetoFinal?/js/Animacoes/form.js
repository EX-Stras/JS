export default function initForms() {
  const form = document.forms;
  const { email } = form.modal.elements;
  const { senha } = form.modal.elements;

  function HandleEvent() {
    if (!this.checkValidity()) {
      this.classList.remove('certo');
      this.classList.add('errado');
      console.log(this.getAttribute('name'));
      this.nextElementSibling.innerText = `*${this.validationMessage}`;
    } else {
      this.classList.add('certo');
      this.classList.remove('errado');
      this.nextElementSibling.innerText = '';
      console.log(this);
    }
  }

  email.addEventListener('keyup', HandleEvent);
  senha.addEventListener('keyup', HandleEvent);
}
