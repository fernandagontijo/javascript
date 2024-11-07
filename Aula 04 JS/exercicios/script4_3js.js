//Crie um programa que pergunte se a pessoa quer continuar no programa. Caso ela digite sim, pergunte novamente.
//s → Sim
//n → Não

let desejaContinuar = prompt('Deseja continuar? ')

while( desejaContinuar === "sim") {
    desejaContinuar = prompt('Ok. Deseja Continuar? ')
}