// Função para abrir o formulário
function abrirFormulario() {
    document.getElementById("modalCadastroProduto").style.display = "block";
  }
  
  // Função para fechar o formulário
  function fecharFormulario() {
    document.getElementById("modalCadastroProduto").style.display = "none";
  }
  
  // Fechar o modal se o usuário clicar fora da caixa de conteúdo
  window.onclick = function (evento) {
    if (evento.target == document.getElementById("modalCadastroProduto")) {
      fecharFormulario();
    }
  };
  

  async function carregarProdutos() {
    const url = 'https://6764753952b2a7619f5ca4d0.mockapi.io/api/produtos'  // URL da API
    const resposta = await fetch(url)  // Faz a requisição para a API
    const dadosProdutos = await resposta.json()  // Converte a resposta para JSON
    console.log(dadosProdutos)

    // Pega o local da página onde vamos mostrar os produtos
    const main = document.querySelector('#produtos-galeria')
    main.innerHTML = ''  // Limpa o conteúdo da seção antes de inserir novos produtos

    // Para cada produto, criamos um HTML dinâmico
    dadosProdutos.forEach(produto => {
        const estruturaHtmlProduto = `
            <section class="cartao-item">
                <img src="${produto.imagem}" alt="${produto.nome}" />
                <h3>${produto.nome}</h3>
                <p class="preco-item">R$ ${produto.preco}</p>
                <button class="botao-comprar">Comprar</button>
                <button class="botao-excluir" onclick="excluirProduto(${produto.id})">Excluir</button>
            </section>`

        // Adiciona o HTML gerado na seção
        main.innerHTML += estruturaHtmlProduto
    })

  }

  carregarProdutos()

  async function cadastrarProduto() {
    // Captura os dados dos campos do formulário
    const nomeProduto = document.getElementById('nomeProduto').value;
    const precoProduto = document.getElementById('precoProduto').value;
    const imagemProduto = document.getElementById('imagemProduto').value;

    console.log(nomeProduto)
    console.log(precoProduto)
    console.log(imagemProduto)

     // Cria o objeto com os dados do produto
     const produto = {
      nome: nomeProduto,
      preco: precoProduto,
      imagem: imagemProduto
  };

  // URL da API onde os dados serão enviados
  const url = 'https://6764753952b2a7619f5ca4d0.mockapi.io/api/produtos';

  // Envia os dados para a API usando fetch
  const resposta = await fetch(url, {
      method: 'POST',  // Usamos o método POST para enviar os dados
      headers: {
          'Content-Type': 'application/json'  // Dizemos que os dados estão em formato JSON
      },
      body: JSON.stringify(produto)  // Converte o objeto 'produto' em JSON
  });
  alert('Produto adicionado com sucesso!')
  carregarProdutos()

  // Fecha o formulário após a requisição
  fecharFormulario();
}

async function excluirProduto(id) {
 
  const url = `https://6764753952b2a7619f5ca4d0.mockapi.io/api/produtos/${id}`;  
  
  const resposta = await fetch(url, {
      method: 'DELETE'
  });

  // Passo 4: Verificamos se a resposta da API foi bem-sucedida
  if (resposta.status === 200) {
      // Passo 4.1: Exibe uma mensagem de sucesso
      alert('Produto excluído com sucesso!');

      // Passo 4.2: Chama a função carregarProdutos() para recarregar a lista de produtos
      carregarProdutos();  // Recarrega a lista de produtos após a exclusão
  } else {
      // Caso haja erro na exclusão, mostra uma mensagem de erro
      alert('Erro ao excluir o produto.');
  }
}