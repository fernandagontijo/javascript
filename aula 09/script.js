//Atividade 01
 //Crie uma caixa de entrada de texto e um botão. Quando o botão é clicado,
 //criar uma lista não ordenada (<ul>) e adicionar cada palavra digitada na
 //caixa de entrada como um novo item da lista (<li>)

function adicionarItem() {
    const itemDigitado = document.querySelector('#item').value
    const lista = document.querySelector('#lista')
    lista.innerHTML += `<li>${itemDigitado}</li>`

}