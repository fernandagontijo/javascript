const livros = [
   {
    "titulo": "Dom Quixote",
    "autor": "Miguel de Cervantes",
    "anoPublicacao": 1605,
    "linkCapa": "https://www.lpm.com.br/livros/imagens/dom_quixote_hq_9788525425669_hd.jpg"

   } ,

   {
    "titulo": "o segredo da mente milionária",
    "autor": "T. Harv Eker",
    "anoPublicacao": 2003,
    "linkCapa": "https://www.lpm.com.br/livros/imagens/dom_quixote_hq_9788525425669_hd.jpg"
   },

   {
    "titulo": "O Livro De Enoque",
    "autor": "Miguel",
    "anoPublicacao": 1905,
    "linkCapa": "https://m.media-amazon.com/images/I/510GTwnG3lL._SY466_.jpg"
   }
]

const divBiblioteca = document.querySelector('#biblioteca') 
divBiblioteca.innerHTML = ''

livros.forEach(livro => {
    const estruturaHtml = `
    <h2>${livro.titulo}</h2>
    <ul>
        <li>Autor: ${livro.autor}</li>
        <li>Ano de Publicação: ${livro.anoPublicacao}</li>
        <li>
            <img src="${livro.linkCapa}" alt="">
        </li>
    </ul>
    <hr>`
    divBiblioteca.innerHTML += estruturaHtml
})

