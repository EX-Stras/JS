export default function animaNums(){
    const numeros = document.querySelector('div.numeros')
    const Ps = numeros.querySelectorAll('p')
    const H2s = numeros.querySelectorAll('h2')
    let num = [], incremento = [], intervalos = [];

    window.addEventListener('scroll', handleScroll)

    function handleScroll(event){
        if(numeros.getBoundingClientRect().top < 620){
            puxar()
        }
    }

    async function puxar() {
        window.removeEventListener('scroll', handleScroll)
        const response = await fetch("https://ex-stras.github.io/JS/Cap6/AnimaNums/json/dados.json")
        const dados = await response.json()
        
        H2s.forEach((item, index) => {
            num[index] = +dados[index][item.innerText.toLowerCase()]
            incremento[index] = Math.floor(num[index] * 0.01)

            intervalos[index] = setInterval(function(){
                escalar(incremento[index], Ps[index], intervalos[index], num[index])
            }, 30)
        }
    )}

    function escalar(incremento, paragrafo, intervalo, num){
        let total = +paragrafo.innerText
        total += incremento
        paragrafo.innerText = `${total}`

        if(total > num){
            clearInterval(intervalo)
            paragrafo.innerText = `${num}`
        }
    }
}