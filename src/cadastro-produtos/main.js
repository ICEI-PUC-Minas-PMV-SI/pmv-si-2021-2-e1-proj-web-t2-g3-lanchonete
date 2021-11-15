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
        produtos[i].categoria == 'Lanches' ||
        produtos[i].categoria == 'Lanches Fit' ||
        produtos[i].categoria == 'Bebidas' ||
        produtos[i].categoria == 'Sobremesas'
      ) {
        lista_produtos += `
              <tr>
                  <th>${produtos[i].categoria}</th>
                  <th>${produtos[i].id}</th>
                  <td>${produtos[i].titulo}</td>
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
        $('#produto-nome').val(data.titulo)
        $('#produto-descricao').val(data.descricao)
        $('#produto-imagem').val(data.imagem)
        $('#produto-preco').val(parseFloat(data.preco).toFixed(2))
        $('#produto-quantidade').val(data.quantidade)
      })
  }
}

//=================================================================================================
