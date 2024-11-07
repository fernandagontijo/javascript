const numeroSecreto = 3
const numeroUsuario = Number(prompt('Digite um numero de 1 a 10: '))  //prompt abre uma janela com a msg

while (numeroUsuario !== numeroSecreto) { //condição = numero do usario diferente do numero secreto
numeroUsuario = Number(prompt('Digite um numero de 1 a 10: '))

}
alert('voce acertou o numero 3!')