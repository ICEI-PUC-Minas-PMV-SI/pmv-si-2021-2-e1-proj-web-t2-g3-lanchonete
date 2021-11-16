const btnLoginADM = document.getElementById('btn-entrar-adm')
btnLoginADM.addEventListener('click', autenticarADM)

function autenticarADM() {
  const cpfADM = document.getElementById('input-cpf-adm').value
  const senhaADM = document.getElementById('input-senha-adm').value

  if (cpfADM == '02135598623' && senhaADM == '12345678') {
    alert('Login feito com sucesso!')
  } else {
    alert('Acesso negado!')
  }
}
