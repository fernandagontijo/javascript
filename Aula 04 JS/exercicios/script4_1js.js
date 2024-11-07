//Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e 
//continue pedindo até que o usuário informe um valor válido.


let numero = Number(prompt('Digite um número entre 1 a 10: '))



while (numero >= 0 || numero < 10 || isNaN(numero)) { //O isNaN() é uma função em JavaScript que verifica se um valor não é um número. O nome dela vem de "is Not-a-Number" (é um não-número).
    
    numero = Number(prompt('Valor Válido: ' + numero))

    while (numero < 0 || numero > 10 || isNaN(numero)) { //condição = se numero maior que 10, pede novamente pra digitar o numero
        numero = Number(prompt('Valor inválido. Digite um numero de 1 a 10: '))
        
        }


   // alert("Nota válida: " + numero); //O alert() é uma função do JavaScript que exibe uma caixa de diálogo no navegador com uma mensagem para o usuário.
    

}; 
   