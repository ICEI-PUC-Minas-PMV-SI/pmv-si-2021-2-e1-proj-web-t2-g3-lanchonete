const btnLoginADM = document.getElementById('btn-entrar-adm')
btnLoginADM.addEventListener('click', autenticarADM)

function autenticarADM(event) {
  event.preventDefault()

  const cpfADM = document.getElementById('input-cpf-adm').value
  const senhaADM = document.getElementById('input-senha-adm').value

  if (cpfADM == '00000000000' && senhaADM == '12345678') {
    window.location.href = 'Páginas-Admin/Html/Perfil-admin.html'

    console.log('oi')
  } else {
    alert('Acesso negado!')
  }
}
