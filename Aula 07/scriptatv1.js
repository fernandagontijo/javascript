// Crie uma função que aceita um número e retorna uma função que, por sua vez, aceita outro número e retorna a soma dos dois
function somaPrimeiroNumero(primeiroNumero) {
    return function(segundoNumero) {
        return primeiroNumero + segundoNumero;
    };
}

// Exemplo de uso:
let somaComCinco = somaPrimeiroNumero(5); // Retorna uma função
console.log(somaComCinco(3)); // 5 + 3 = 8

let somaComDez = somaPrimeiroNumero(10); // Retorna outra função
console.log(somaComDez(7)); // 10 + 7 = 17
