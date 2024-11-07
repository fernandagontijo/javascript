//Crie um programa que exiba uma mensagem simples ("Olá, Mundo!") no console pelo menos uma vez e continue perguntando 
//se o usuário deseja ver a mensagem novamente. O loop deve parar quando o usuário optar por não ver mais a mensagem.


let exibirMensagem = "sim"; // Começa com "sim" para exibir a mensagem pelo menos uma vez

while (exibirMensagem === "sim") {
    console.log("Olá, Mundo!"); // Exibe a mensagem no console

    exibirMensagem = prompt("Você quer ver a mensagem novamente? (sim/não)"); // Pergunta ao usuário
}

console.log("Você saiu do programa.");