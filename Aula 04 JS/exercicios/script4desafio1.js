// DESAFIOS
//Crie um jogo em que o computador escolha um número aleatório entre 1 e 100. O jogador tenta adivinhar o número. O computador informa 
//se o número é maior ou menor que o escolhido. O jogo termina quando o jogador acerta o número.



//Para gerar um número aleatório, utilize a linha de código a seguir:
//Digite um número: 50
//O número é menor que 50.

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
numerodigitado = null

while (numerodigitado !== numeroAleatorio) {

    numerodigitado = Number(prompt('Digite um número entre 1 e 100: '));

 while (numerodigitado < numeroAleatorio) {
    alert('O número é maior que o digitado ' + numerodigitado)
    numerodigitado = Number(prompt('Digite novamente um número: '))


 }

 while (numerodigitado > numeroAleatorio) {
    alert('O número é menor que o digitado ' + numerodigitado)
    numerodigitado = Number(prompt('Digite novamente um número: '))


 }
 if (numerodigitado === numeroAleatorio) {
    alert('Parabéns, você acertou o número ' + numeroAleatorio)
    break
 }

}

alert("Fim do jogo. O número era " + numeroAleatorio);