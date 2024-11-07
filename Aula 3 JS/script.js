function compararIdade() {
    const idade = Number(document.querySelector('#idade').value)
    if(idade > 3){
        console.log('Carro velho')
    }
    else {
        console.log('Carro novo')
    }
}

