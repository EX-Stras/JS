export default function initFuncionamento() {
  const p = document.querySelector('p[data-horario]');
  const agora = new Date();

  const horas = p.dataset.horario.split(',');

  const dias = p.dataset.semana.split(',');

  if (+horas[0] <= agora.getHours() && +horas[1] > agora.getHours()) {
    if (+dias[0] <= agora.getDay() && +dias[1] > agora.getDay()) {
      p.classList.add('aberto');
    }
  }
}
