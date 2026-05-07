const arrayAleatorio = ['Lucas','Vovô','João','Ana','Gabriel','Fernando','Athos','Eduardo','Elisa','Isabella'];

while(true){
    let escolha = prompt();
    arrayAleatorio.forEach((item, index) => {
        if (escolha == index){
        alert(`${item} ${index}`)
        }
    })
}
