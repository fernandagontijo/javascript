// Atividade 03
// Crie um elemento através do JavaScript, adicione um texto a ele e insira ele no documento.

// Seleciona um elemento existente no documento usando querySelector
let elementoPai = document.querySelector('#meuElementoPai'); // substitua '#meuElementoPai' pelo seletor desejado

// Cria um novo elemento <p>
let novoParagrafo = document.createElement('p');

// Adiciona texto ao novo elemento
novoParagrafo.textContent = 'Este parágrafo foi adicionado com JavaScript!';

// Insere o novo elemento como filho do elemento selecionado
elementoPai.appendChild(novoParagrafo);
