//aula 11 fetch=buscar

async function carregarDadosGato(params) {
    const url = 'https://api.thecatapi.com/v1/images/search'
    const resposta = await fetch(url)
    const informacoesGato = await resposta.json()
    console.log(informacoesGato)

    const div = document.querySelector('#dados-gato')

    div.innerHTML = ''
    informacoesGato.forEach(dadosGato => {
        
        const estruturaHtmlGato = ` 
        <p>Altura: ${dadosGato.height}</p>
        <p>Largura: ${dadosGato.width}</p>
        <img src="${dadosGato.url}" alt="">
        `
        div.innerHTML += estruturaHtmlGato
    })
}

carregarDadosGato()