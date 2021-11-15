URL = 'http://localhost:3000/cardapio'
//=================================================================================================

// GET - Recupera todos os produtos e adiciona na tabela

const produtoList = document.getElementById('produto-list')

fetch(URL)
  .then(res => res.json())
  .then(produtos => {
    var arrayLanches = produtos[0].lanches
    var arrayLanchesFit = produtos[1].lanchesFit
    var arrayBebidas = produtos[2].bebidas
    var arraySobremesas = produtos[3].sobremesas
    var arrayPromocoes = produtos[4].promocoes

    let lista_produtos = ''

    // ADICIONAR LANCHES
    for (let i = 0; i < arrayLanches.length; i++) {
      lista_produtos = `
            <tr>
                <th>${arrayLanches[i].categoria}</th>
                <th>${arrayLanches[i].id}</th>
                <td>${arrayLanches[i].titulo}</td>
                <td>${arrayLanches[i].imagem}</td>
                <td>${arrayLanches[i].descricao}</td>
                <td>R$${parseFloat(arrayLanches[i].preco).toFixed(2)}</td>
                <td>${arrayLanches[i].quantidade}</td>
                <td>
                    <a onclick="getProduto(${arrayLanches[i].id});" 
                    class="btn btn-warning btn-sm" 
                    data-toggle="modal" data-target="#produto-modal">
                    <i class="fa fa-edit"></i>  Editar
                    </a>

                    <a onclick="$('#id-prod').text(${
                      arrayLanches[i].id
                    });" class="btn btn-danger btn-sm" 
                    data-toggle="modal" data-target="#modal-delete">
                    <i class="fa fa-trash"></i> Remover
                    </a>
                </td>
            </tr>
            `
      produtoList.innerHTML += lista_produtos
    }

    // ADICIONAR LANCHES FIT
    for (let i = 0; i < arrayLanchesFit.length; i++) {
      lista_produtos = `
            <tr>
                <th>${arrayLanchesFit[i].categoria}</th>
                <th>${arrayLanchesFit[i].id}</th>
                <td>${arrayLanchesFit[i].titulo}</td>
                <td>${arrayLanchesFit[i].imagem}</td>
                <td>${arrayLanchesFit[i].descricao}</td>
                <td>R$${parseFloat(arrayLanchesFit[i].preco).toFixed(2)}</td>
                <td>${arrayLanchesFit[i].quantidade}</td>
                <td>
                    <a onclick="getProduto(${arrayLanchesFit[i].id});" 
                    class="btn btn-warning btn-sm" 
                    data-toggle="modal" data-target="#produto-modal">
                    <i class="fa fa-edit"></i>  Editar
                    </a>

                    <a onclick="$('#id-prod').text(${
                      arrayLanchesFit[i].id
                    });" class="btn btn-danger btn-sm" 
                    data-toggle="modal" data-target="#modal-delete">
                    <i class="fa fa-trash"></i> Remover
                    </a>
                </td>
            </tr>
            `
      produtoList.innerHTML += lista_produtos
    }

    // ADICIONAR BEBIDAS
    for (let i = 0; i < arrayBebidas.length; i++) {
      lista_produtos = `
            <tr>
                <th>${arrayBebidas[i].categoria}</th>
                <th>${arrayBebidas[i].id}</th>
                <td>${arrayBebidas[i].titulo}</td>
                <td>${arrayBebidas[i].imagem}</td>
                <td>${arrayBebidas[i].descricao}</td>
                <td>R$${parseFloat(arrayBebidas[i].preco).toFixed(2)}</td>
                <td>${arrayBebidas[i].quantidade}</td>
                <td>
                    <a onclick="getProduto(${arrayBebidas[i].id});" 
                    class="btn btn-warning btn-sm" 
                    data-toggle="modal" data-target="#produto-modal">
                    <i class="fa fa-edit"></i>  Editar
                    </a>

                    <a onclick="$('#id-prod').text(${
                      arrayBebidas[i].id
                    });" class="btn btn-danger btn-sm" 
                    data-toggle="modal" data-target="#modal-delete">
                    <i class="fa fa-trash"></i> Remover
                    </a>
                </td>
            </tr>
            `
      produtoList.innerHTML += lista_produtos
    }

    // ADICIONAR SOBREMESAS
    for (let i = 0; i < arrayLanches.length; i++) {
      lista_produtos = `
            <tr>
                <th>${arraySobremesas[i].categoria}</th>
                <th>${arraySobremesas[i].id}</th>
                <td>${arraySobremesas[i].titulo}</td>
                <td>${arraySobremesas[i].imagem}</td>
                <td>${arraySobremesas[i].descricao}</td>
                <td>R$${parseFloat(arraySobremesas[i].preco).toFixed(2)}</td>
                <td>${arraySobremesas[i].quantidade}</td>
                <td>
                    <a onclick="getProduto(${arraySobremesas[i].id});" 
                    class="btn btn-warning btn-sm" 
                    data-toggle="modal" data-target="#produto-modal">
                    <i class="fa fa-edit"></i>  Editar
                    </a>

                    <a onclick="$('#id-prod').text(${
                      arraySobremesas[i].id
                    });" class="btn btn-danger btn-sm" 
                    data-toggle="modal" data-target="#modal-delete">
                    <i class="fa fa-trash"></i> Remover
                    </a>
                </td>
            </tr>
            `
      produtoList.innerHTML += lista_produtos
    }

    // ADICIONAR PROMOÇÕES
    // for (let i = 0; i < arrayPromocoes.length; i++) {
    //   lista_produtos = `
    //         <tr>
    //             <th>${arrayPromocoes[i].categoria}</th>
    //             <th>${arrayPromocoes[i].id}</th>
    //             <td>${arrayPromocoes[i].titulo}</td>
    //             <td>${arrayPromocoes[i].imagem}</td>
    //             <td>${arrayPromocoes[i].descricao}</td>
    //             <td>R$${parseFloat(arrayPromocoes[i].preco).toFixed(2)}</td>
    //             <td>${arrayPromocoes[i].quantidade}</td>
    //             <td>
    //                 <a onclick="getProduto(${arrayPromocoes[i].id});"
    //                 class="btn btn-warning btn-sm"
    //                 data-toggle="modal" data-target="#produto-modal">
    //                 <i class="fa fa-edit"></i>  Editar
    //                 </a>

    //                 <a onclick="$('#id-prod').text(${
    //                   arrayPromocoes[i].id
    //                 });" class="btn btn-danger btn-sm"
    //                 data-toggle="modal" data-target="#modal-delete">
    //                 <i class="fa fa-trash"></i> Remover
    //                 </a>
    //             </td>
    //         </tr>
    //         </tr>
    //         `
    //   produtoList.innerHTML += lista_produtos
    // }
  })
//=================================================================================================
