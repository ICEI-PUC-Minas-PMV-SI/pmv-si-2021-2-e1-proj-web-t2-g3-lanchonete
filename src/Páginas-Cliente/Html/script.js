function modalAcessarComo() {
  let modal = document.getElementById('modal-acessar-como')
  modal.style.display = 'block'
}

function fecharAcessarComo() {
  let modal = document.getElementById('modal-acessar-como')
  modal.style.display = 'none'
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
}

function fecharRecuperarSenhaAdm() {
  let modal = document.getElementById('modal-recuperar-senha-adm')
  modal.style.display = 'none'
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
