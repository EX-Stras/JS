export default function animaNums() {
  const H2s = document.querySelectorAll('div.numeros h2');
  function adicionar(p, total, incremento, intervalo) {
    const campoDeTexto = p;
    campoDeTexto.innerText = `${+campoDeTexto.innerText + incremento}`;
    if (+campoDeTexto.innerText > total) {
      campoDeTexto.innerText = `${total}`;
      clearInterval(intervalo);
    }
  }
  function alterar(dados) {
    H2s.forEach((item) => {
      const incremento = Math.floor(dados[item.innerText.toLowerCase()] / 100);
      const total = dados[item.innerText.toLowerCase()];
      const interval = setInterval(() => {
        adicionar(item.nextElementSibling, total, incremento, interval);
      }, 25);
    });
  }
  async function buscar() {
    try {
      const response = await fetch('./../json/dados.json');
      const dados = await response.json();
      alterar(dados);
    } catch (error) {
      console.log(Error(error));
    }
  }
  function iniciar() {
    const mapa = document.querySelector('div.numeros').getBoundingClientRect();
    if (mapa.y <= 500) {
      buscar();
      window.removeEventListener('scroll', iniciar);
    }
  }

  window.addEventListener('scroll', iniciar);
}
