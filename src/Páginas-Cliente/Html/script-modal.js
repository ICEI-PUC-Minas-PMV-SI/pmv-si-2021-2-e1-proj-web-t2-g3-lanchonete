function modalAcessarComo() {
  let modal = document.getElementById('modal-acessar-como')
  modal.style.display = 'block'

  // DESFOCAR FUNDO QUANDO ABRE OS MODAIS
  let filterBlur = document.getElementsByClassName('filter-blur')
  for (elemento of filterBlur) {
    // console.log(elemento)
    elemento.style.filter = 'blur(3px) brightness(75%)'
  }
}

function fecharAcessarComo() {
  let modal = document.getElementById('modal-acessar-como')
  modal.style.display = 'none'

  // TIRAR DESFOQUE DO FUNDO QUANDO FECHAR OS MODAIS
  let filterBlur = document.getElementsByClassName('filter-blur')
  for (elemento of filterBlur) {
    // console.log(elemento)
    elemento.style.filter = 'none'
  }
}

function modalLoginAdm() {
  let modal = document.getElementById('modal-login-adm')
  modal.style.display = 'block'
}

function fecharLoginAdm() {
  let modal = document.getElementById('modal-login-adm')
  modal.style.display = 'none'
}

function modalRecuperarSenhaAdm() {
  let modal = document.getElementById('modal-recuperar-senha-adm')
  modal.style.display = 'block'

  let modal2 = document.getElementById('modal-login-adm')
  modal2.style.display = 'none'
}

function fecharRecuperarSenhaAdm() {
  let modal = document.getElementById('modal-recuperar-senha-adm')
  modal.style.display = 'none'

  let modal2 = document.getElementById('modal-login-adm')
  modal2.style.display = 'block'
}

function modalLoginCliente() {
  let modal = document.getElementById('modal-login-cliente')
  modal.style.display = 'block'
}

function fecharLoginCliente() {
  let modal = document.getElementById('modal-login-cliente')
  modal.style.display = 'none'
}

function modalRecuperarSenhaCliente() {
  let modal = document.getElementById('modal-recuperar-senha-cliente')
  modal.style.display = 'block'

  let modal2 = document.getElementById('modal-login-cliente')
  modal2.style.display = 'none'
}

function fecharRecuperarSenhaCliente() {
  let modal = document.getElementById('modal-recuperar-senha-cliente')
  modal.style.display = 'none'

  let modal2 = document.getElementById('modal-login-cliente')
  modal2.style.display = 'block'
}
