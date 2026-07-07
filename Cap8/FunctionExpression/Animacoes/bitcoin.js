export default function initBitcoin(){
    const span = document.querySelector('span[data-bitcoin]')

    async function buscar(){
        try {
            const response = await fetch("https://blockchain.info/ticker")
            const dados = await response.json()

            const total = (1000 / dados.BRL.buy).toFixed(4)
            span.innerText = total
        } catch(error){
            console.log(Error(error))
            span.parentElement.remove()
        }
    }

    buscar()
}