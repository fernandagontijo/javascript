// Crie uma função chamada operacoesMatematicas que recebe dois números e uma função de callback como argumentos. A função deve
 //aplicar a função de callback aos dois números e retornar o resultado

function operacoesMatematicas(num1, num2, callback) {
    return callback(num1, num2);
}

// Exemplos de funções de callback
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

// Exemplo de uso
let resultadoSoma = operacoesMatematicas(10, 5, somar);
console.log(`Soma: ${resultadoSoma}`); // Soma: 15

let resultadoSubtracao = operacoesMatematicas(10, 5, subtrair);
console.log(`Subtração: ${resultadoSubtracao}`); // Subtração: 5

let resultadoMultiplicacao = operacoesMatematicas(10, 5, multiplicar);
console.log(`Multiplicação: ${resultadoMultiplicacao}`); // Multiplicação: 50

let resultadoDivisao = operacoesMatematicas(10, 5, dividir);
console.log(`Divisão: ${resultadoDivisao}`); // Divisão: 2
