// Atividade 03
 //Crie uma função chamada converterTemperatura que recebe uma temperatura em graus Celsius e uma função de callback para conversão
 //como argumentos. A função deve aplicar a função de callback àtemperatura e retornar o resultado

function converterTemperatura(celsius, callback) { //crio a varialvel celsius e callback. Eu coloquei a variável callback na função converterTemperatura porque isso permite que a função receba outra função como argumento. Esse conceito é conhecido como função de callback.
    return callback(celsius); //return retorna o valor 
}

// Funções de callback para converter Celsius em Fahrenheit e Kelvin
function paraFahrenheit(celsius) {
    return (celsius * 9/5) + 32; //return retorna o valor do resultado do calculo da conversao
}

function paraKelvin(celsius) {
    return celsius + 273.15;
}

// Exemplo de uso
let tempCelsius = 25; //aqui define o valor da variavel criada temperatura em celsius

let tempFahrenheit = converterTemperatura(tempCelsius, paraFahrenheit);
console.log(`Temperatura em Fahrenheit: ${tempFahrenheit}°F`); // 77°F

let tempKelvin = converterTemperatura(tempCelsius, paraKelvin);
console.log(`Temperatura em Kelvin: ${tempKelvin}K`); // 298.15K
