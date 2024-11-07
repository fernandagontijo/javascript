//label = texto
function mostrarMensagem() {
    console.log('clicou no botao')
    const nomeDigitado = document.querySelector('#nome').value

    console.log(`olá ${nomeDigitado}`) //usar aspas

    const paragrafo = document.querySelector('#resultado')
    const mensagem = `Olá ${nomeDigitado}`
    paragrafo.innerHTML = mensagem //alterando o texto interno do html, que será ola e o nome da pessoa digitou, não ira aparecer no console do dev
    //aparecera apenas na pagina hmtl

    const notaAntiga = Number(document.querySelector('#nota').value) //esse valor sempre sera interpretado como texto string, por isso colocar o number
    const notaNova = notaAntiga + 1
    console.log(`Nota com 1 ponto extra: ${notaNova}`)


    const notaum = Number(document.querySelector('#nota2').value) //esse valor sempre sera interpretado como texto string, por isso colocar o number
    const notadois = Number(document.querySelector('#nota3').value)
    const notasoma = notaum + notadois
    const notamedia = notasoma / 2
    console.log(`Nota media: ${notamedia}`)


}