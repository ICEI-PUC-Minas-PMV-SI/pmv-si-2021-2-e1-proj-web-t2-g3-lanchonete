URL = 'http://localhost:3000/cardapio'
//=================================================================================================

// GET - Recupera todos os produtos e adiciona na tabela

const produtoList = document.getElementById('produto-list')

fetch(URL)
  .then(res => res.json())
  .then(produtos => {
    let lista_produtos = ''

    for (let i = 0; i < produtos.length; i++) {
      if (
        produtos[i].categoria.toUpperCase() == 'LANCHES' ||
        produtos[i].categoria.toUpperCase() == 'LANCHES FIT' ||
        produtos[i].categoria.toUpperCase() == 'BEBIDAS' ||
        produtos[i].categoria.toUpperCase() == 'SOBREMESAS'
      ) {
        lista_produtos += `
              <tr>
                  <th>${produtos[i].categoria}</th>
                  <th>${produtos[i].id}</th>
                  <td>${produtos[i].nome}</td>
                  <td>${produtos[i].descricao}</td>
                  <td>${produtos[i].imagem}</td>
                  <td>R$${parseFloat(produtos[i].preco).toFixed(2)}</td>
                  <td>${parseInt(produtos[i].quantidade)}</td>
                  <td>
                      <a onclick="getProduto(${produtos[i].id});" 
                      class="btn btn-warning btn-sm" 
                      data-toggle="modal" data-target="#produto-modal">
                      <i class="fa fa-edit"></i>  Editar
                      </a>
  
                      <a onclick="$('#id-prod').text(${
                        produtos[i].id
                      });" class="btn btn-danger btn-sm" 
                      data-toggle="modal" data-target="#modal-delete">
                      <i class="fa fa-trash"></i> Remover
                      </a>
                  </td>
              </tr>
              `
        produtoList.innerHTML = lista_produtos
      }
    }
  })

//=================================================================================================

// DELETE - PROCEDIMENTO PARA EXCLUIR UM PRODUTO
const produtoDelete = document.getElementById('btn-delete')

produtoDelete.addEventListener('click', e => {
  let id = $('#id-prod').text()

  fetch(`${URL}/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(() => location.reload())
})
//=================================================================================================

// PROCEDIMENTO PARA RECUPERAR OS DADOS DE UM PRODUTO NA API
function getProduto(id) {
  if (id == 0) {
    $('#edit-prod-id').text('')
    $('#produto-id').prop('disabled', false)
    $('#produto-categoria').val('')
    $('#produto-id').val('')
    $('#produto-nome').val('')
    $('#produto-descricao').val('')
    $('#produto-imagem').val('')
    $('#produto-preco').val('')
    $('#produto-quantidade').val('')
  } else {
    $('#edit-prod-id').text(id)
    fetch(`${URL}/${id}`)
      .then(res => res.json())
      .then(data => {
        $('#produto-id').prop('disabled', true)
        $('#produto-categoria').val(data.categoria)
        $('#produto-id').val(data.id)
        $('#produto-nome').val(data.nome)
        $('#produto-descricao').val(data.descricao)
        $('#produto-imagem').val(data.imagem)
        $('#produto-preco').val(data.preco)
        $('#produto-quantidade').val(data.quantidade)
      })
  }
}

//=================================================================================================

// CREATE or UPDATE - PROCEDIMENTO PARA CRIAR OU EDITAR UM PRODUTO

const produtoForm = document.getElementById('produto-form')

produtoForm.addEventListener('submit', e => {
  // RECUPERA O ID DO PRODUTO
  let id = parseInt($('#edit-prod-id').text())

  // RECUPERA OS DADOS DO PRODUTO
  const produto = JSON.stringify({
    categoria: document.getElementById('produto-categoria').value,
    id: document.getElementById('produto-id').value,
    nome: document.getElementById('produto-nome').value,
    descricao: document.getElementById('produto-descricao').value,
    imagem: document.getElementById('produto-imagem').value,
    preco: document.getElementById('produto-preco').value,
    quantidade: document.getElementById('produto-quantidade').value
  })

  if (id >= 0) {
    fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: produto
    })
      .then(res => res.json())
      .then(() => location.reload())
  } else {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: produto
    })
      .then(res => res.json())
      .then(() => location.reload())
  }
})
//=================================================================================================
