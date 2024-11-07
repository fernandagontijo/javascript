//faça um programa que verifica a idade de uma pessoa
//A)Criança: até 11 anos
//B)Adolescente: de 12 a 17 anos
//C)Adulto: de 18 a 59 anos
//D)Idoso: maiores de 60 anos


function compararIdade() {
    const idade = Number(document.querySelector('#idade').value)
    if(idade <= 11){
        console.log('Criança')
    }
    else if (idade >11 && idade <=17) {
        console.log('Adolescente')
    }
    else if (idade >=18 && idade <=59) {
        console.log('Adulto')
    }
    else  {
        console.log('Idoso')
    }
}

