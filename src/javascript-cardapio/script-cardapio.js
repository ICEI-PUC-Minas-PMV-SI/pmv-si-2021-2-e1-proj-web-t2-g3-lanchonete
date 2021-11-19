// PEGAR ARQUIVO JSON
const urlCardapioJSON = `http://localhost:3000/cardapio`

var produtos = []

fetch(urlCardapioJSON)
  .then(response => response.json())
  .then(listaProdutos => {
    inserirProdutos(listaProdutos)
    for (element of listaProdutos) {
      produtos.push(element)
    }
  })

// INSERIR PRODUTOS COM JAVASCRIPT

function inserirProdutos(produtos) {
  // console.log(produtos)

  var listaProdutosLanches = ''
  var listaProdutosLanchesFit = ''
  var listaProdutosBebidas = ''
  var listaProdutosSobremesas = ''
  var listaProdutosPromocoes = ''

  for (i = 0; i < produtos.length; i++) {
    // ADICIONAR LANCHES

    if (produtos[i].categoria.toUpperCase() == 'LANCHES') {
      let produto = `
      <div class="box-produto">
        <div class="image">
          <img src="${produtos[i].imagem}" alt="${produtos[i].nome}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${produtos[i].nome}</h3>
            <p class="descricao-produto">${produtos[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${produtos[i].preco}</p>
          </div>
        </div>
        <div>
          <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${produtos[i].nome}', '${produtos[i].preco}')" />
        </div>
      </div>
      `
      listaProdutosLanches += produto
    }

    // ADICIONAR LANCHES FIT

    if (produtos[i].categoria.toUpperCase() == 'LANCHES FIT') {
      let produto = `
      <div class="box-produto">
        <div class="image">
          <img src="${produtos[i].imagem}" alt="${produtos[i].nome}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${produtos[i].nome}</h3>
            <p class="descricao-produto">${produtos[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${produtos[i].preco}</p>
          </div>
        </div>
        <div>
          <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${produtos[i].nome}', '${produtos[i].preco}')" />
        </div>
      </div>
      `
      listaProdutosLanchesFit += produto
    }

    // ADICIONAR BEBIDAS

    if (produtos[i].categoria.toUpperCase() == 'BEBIDAS') {
      let produto = `
      <div class="box-produto">
        <div class="image-vertical">
          <img src="${produtos[i].imagem}" alt="${produtos[i].nome}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${produtos[i].nome}</h3>
            <p class="descricao-produto">${produtos[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${produtos[i].preco}</p>
          </div>
        </div>
        <div>
          <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${produtos[i].nome}', '${produtos[i].preco}')" />
        </div>
      </div>
      `
      listaProdutosBebidas += produto
    }

    // ADICIONAR SOBREMESAS

    if (produtos[i].categoria.toUpperCase() == 'SOBREMESAS') {
      let produto = `
      <div class="box-produto">
        <div class="image-vertical">
          <img src="${produtos[i].imagem}" alt="${produtos[i].nome}"/>
        </div>
        <div class="produto">
          <div>
            <h3 class="nome-produto">${produtos[i].nome}</h3>
            <p class="descricao-produto">${produtos[i].descricao}</p>
          </div>
          <div class="precos">
            <p class="preco-novo-produto">R$ ${produtos[i].preco}</p>
          </div>
        </div>
        <div>
          <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${produtos[i].nome}', '${produtos[i].preco}')" />
        </div>
      </div>
      `
      listaProdutosSobremesas += produto
    }

    // ADICIONAR PROMOÇÕES

    if (produtos[i].categoria.toUpperCase() == 'PROMOÇÕES') {
      let produto = `
      <div class="box-produto">
      <div class="image">
        <img src="${produtos[i].imagem}" alt="${produtos[i].nome}"/>
      </div>
      <div class="produto">
        <div>
          <h3 class="nome-produto">${produtos[i].nome}</h3>
          <p class="descricao-produto">${produtos[i].descricao}
          </p>
        </div>
        <div class="precos">
          <div class="caixa-preco-antigo">
            <img src="../midia/cardapio/icons/line-icon.png" alt="Ícone linha" class="line-icon"/>
            <p class="preco-antigo-produto">R$ ${produtos[i].precoAntigo}</p>
          </div>
          <p class="preco-novo-produto">R$ ${produtos[i].precoNovo}</p>
        </div>
      </div>
        <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${produtos[i].nome}', '${produtos[i].precoNovo}')" />
    </div>
      `
      listaProdutosPromocoes += produto
    }
  }

  document.getElementById('produtosLanches').innerHTML = listaProdutosLanches
  document.getElementById('produtosLanchesFit').innerHTML =
    listaProdutosLanchesFit
  document.getElementById('produtosBebidas').innerHTML = listaProdutosBebidas
  document.getElementById('produtosSobremesas').innerHTML =
    listaProdutosSobremesas
  document.getElementById('produtosPromocoes').innerHTML =
    listaProdutosPromocoes
  // Adiciona os produtos no HTML em suas respectivas categorias (lanches, lanches fit, bebidas ou sobremesas)
}

// ==========================================================================================================================

// Código para selecionar produtos e salvar os produtos selecionados no localStorage, além de exibir a quantidade de produtos selecionados

let numeroCarrinho = document.getElementById('numero-carrinho')
let numeroCarrinhoMobile = document.getElementById('numero-carrinho-mobile')
let qtdProdutosSelecionados = localStorage.getItem('numero_display_carrinho')

if (qtdProdutosSelecionados) {
  // Se o localStorage conter o item numero_display_carrinho, pega-se o que está armazenado nele (a quantidade de produtos selecionados) e coloca lá em cima do carrinho

  numeroCarrinho.innerHTML = qtdProdutosSelecionados
  exibirNumeroCarrinho()
}

function exibirNumeroCarrinho() {
  numeroCarrinho.style.display = 'block'
  numeroCarrinhoMobile.style.display = 'block'
}

function selecionarProduto(nome, preco) {
  if (localStorage.getItem('db_produtosSelecionados')) {
    // Se o localStorage conter o item db_produtosSelecionados, armazena-se o conteúdo dele (transformado para objeto) na variável array_produtosSelecionados

    let array_produtosSelecionados = JSON.parse(
      localStorage.getItem('db_produtosSelecionados')
    )

    qtdProdutosSelecionados = array_produtosSelecionados.length + 1
    // qtdProdutosSelecionados recebe o número de produtos armazenados no localStorage

    numeroCarrinho.innerHTML = qtdProdutosSelecionados
    numeroCarrinhoMobile.innerHTML = qtdProdutosSelecionados
    exibirNumeroCarrinho()
    // Exibe o número de produtos do array lá no carrinho

    localStorage.setItem('numero_display_carrinho', qtdProdutosSelecionados)
    // Armazena no local storage o numero que está lá no carrinho

    let produtoSelecionado = {
      nomeProduto: nome,
      precoProduto: preco
    }
    // Objeto para armazenar o nome e preço do produto selecionado pelo cliente

    array_produtosSelecionados.push(produtoSelecionado)
    // Adiciona o novo produto selecionado no array de produtos selecionados

    localStorage.setItem(
      'db_produtosSelecionados',
      JSON.stringify(array_produtosSelecionados)
    )
    // Atualiza-se o localStorage do db_produtosSelecionados contendo o novo produto selecionado
    // "JSON.stringify" porque o localStorage só aceita string, e esse método transforma objeto em string JSON

    // !!!!!!! IMPORTANTE !!!!!!!
    // Na primeira vez que o cliente acessar a página e for adicionar um produto não vai ter db_produtosSelecionados no localStorage, portanto, vai executar o código abaixo (do "else"). Já na segunda vez que o cliente for adicionar outro produto vai executar o código acima, pois já terá um db_produtosSelecionados. Isso tudo foi pensado para que, caso o cliente der um refresh na página, não irá iniciar um array vazio de produtos, ou seja, ele não irá perder os produtos selecionados, pois os mesmos foram armazenados no db_produtosSelecionados

    //
  } else {
    let array_produtosSelecionados = []
    // Caso o localStorage não contenha o item db_produtosSelecionados, ou seja, caso o cliente não tenha selecionado nada ainda, inicia-se um array vazio para armazenar os produtos

    let produtoSelecionado = {
      nomeProduto: nome,
      precoProduto: preco
    }
    // Objeto para armazenar o nome e preço do produto selecionado pelo cliente

    array_produtosSelecionados.push(produtoSelecionado)
    // Adiciona o objeto do produto selecionado no array

    localStorage.setItem(
      'db_produtosSelecionados',
      JSON.stringify(array_produtosSelecionados)
    )
    // Adiciona no localStorage o db_produtosSelecionados que contém o array com os produtos selecionados pelo cliente

    qtdProdutosSelecionados = 1
    // Como é o primeiro item selecionado, a quantidade é 1

    numeroCarrinho.innerHTML = qtdProdutosSelecionados
    numeroCarrinhoMobile.innerHTML = qtdProdutosSelecionados
    exibirNumeroCarrinho()
    // Exibe o número 1 lá no carrinho

    localStorage.setItem('numero_display_carrinho', qtdProdutosSelecionados)
    // Armazena no local storage o numero que está lá no carrinho
  }
}

function limparCarrinho() {
  localStorage.removeItem('db_produtosSelecionados')
  localStorage.removeItem('numero_display_carrinho')

  numeroCarrinho.innerHTML = 0
  numeroCarrinhoMobile.innerHTML = 0

  exibirNumeroCarrinho()
}

// ========================================================================================================

// Código para filtrar e mostrar os produtos quando o usuário pesquisar algum produto

let btnPesquisarProduto = document.getElementById('btn-pesquisar-produto')
btnPesquisarProduto.addEventListener('click', filtrarProdutos)

function filtrarProdutos() {
  document.getElementById('result').innerHTML = ''

  let resultado = []
  let listaProdutosFiltrados = []

  let filtrar = document.getElementById('input-pesquisar-produto').value

  for (element of produtos) {
    if (
      element.nome.toUpperCase().includes(filtrar.toUpperCase()) &&
      filtrar != ''
    ) {
      resultado.push(element)
    }
  }

  for (result of resultado) {
    // console.log(result)

    let categoria = result.categoria.toUpperCase()

    if (categoria == 'LANCHES' || categoria == 'LANCHES FIT') {
      let produto = `
        <div class="box-produto">
          <div class="image">
            <img src="${result.imagem}" alt="${result.nome}"/>
          </div>
          <div class="produto">
            <div>
              <h3 class="nome-produto">${result.nome}</h3>
              <p class="descricao-produto">${result.descricao}</p>
            </div>
            <div class="precos">
              <p class="preco-novo-produto">R$ ${result.preco}</p>
            </div>
          </div>
          <div>
            <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${result.nome}', '${result.preco}')" />
          </div>
        </div>
        `
      listaProdutosFiltrados.push(produto)
    }

    if (categoria == 'BEBIDAS' || categoria == 'SOBREMESAS') {
      let produto = `
        <div class="box-produto">
          <div class="image-vertical">
            <img src="${result.imagem}" alt="${result.nome}"/>
          </div>
          <div class="produto">
            <div>
              <h3 class="nome-produto">${result.nome}</h3>
              <p class="descricao-produto">${result.descricao}</p>
            </div>
            <div class="precos">
              <p class="preco-novo-produto">R$ ${result.preco}</p>
            </div>
          </div>
          <div>
            <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${result.nome}', '${result.preco}')" />
          </div>
        </div>
        `
      listaProdutosFiltrados.push(produto)
    }

    if (categoria == 'PROMOÇÕES') {
      let produto = `
      <div class="box-produto">
      <div class="image">
        <img src="${result.imagem}" alt="${result.nome}"/>
      </div>
      <div class="produto">
        <div>
          <h3 class="nome-produto">${result.nome}</h3>
          <p class="descricao-produto">${result.descricao}
          </p>
        </div>
        <div class="precos">
          <div class="caixa-preco-antigo">
            <img src="../midia/cardapio/icons/line-icon.png" alt="Ícone linha" class="line-icon"/>
            <p class="preco-antigo-produto">R$ ${result.precoAntigo}</p>
          </div>
          <p class="preco-novo-produto">R$ ${result.precoNovo}</p>
        </div>
      </div>
        <img src="../midia/cardapio/icons/plus-icon.png" alt="Ícone adicionar" class="plus-icon" onclick="selecionarProduto('${result.nome}', '${result.precoNovo}')" />
    </div>
      `
      listaProdutosFiltrados.push(produto)
    }
  }

  for (produto of listaProdutosFiltrados) {
    document.getElementById('result').innerHTML += produto
  }
}
