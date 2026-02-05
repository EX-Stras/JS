console.log('OPERADOR TERNÁRIO:')
var teste = {
    idade: 15,
    nome: 'Lucas',
    mais18: (this.idade >= 18),
    tamanho: undefined,
    voceElegal: undefined,
    };

teste.tamanho = (teste.nome.length <= 6) ? 'Seu nome é pequeno' : 'Seu nome é grande';
teste.voceElegal = (teste.mais18 === false && teste.tamanho === 'Seu nome é pequeno');

console.log(teste)

console.log(`Tem 18 anos? R:${teste.mais18} / Seu nome é grande ou pequeno?  R:${teste.tamanho} / Você é legal? R:${teste.voceElegal}`)

console.log('//////////////////////////////////')
console.log('EXERCÍCIO:')
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
    scroll += 500;
    console.log(scroll)
// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = false;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa)

console.log(darCredito)