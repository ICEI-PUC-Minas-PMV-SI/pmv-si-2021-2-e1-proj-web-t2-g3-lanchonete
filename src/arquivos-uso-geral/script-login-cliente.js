const btnLoginCliente = document.getElementById('btn-entrar-cliente')
btnLoginCliente.addEventListener('click', processaFormLogin)

function processaFormLogin(event) {
  // Cancela a submissão do formulário para tratar sem fazer refresh da tela
  event.preventDefault()

  // Obtem os dados de login e senha a partir do formulário de login
  var email = document.getElementById('input-email-cliente').value
  var senha = document.getElementById('input-senha-cliente').value

  // Valida login e se estiver ok, redireciona para tela inicial da aplicação
  resultadoLogin = loginUser(email, senha)
  if (resultadoLogin) {
    trocarLogin()
    localStorage.setItem('db_trocarLogin', true)

    // window.location.href = 'meusdados/meusdados.html'
    window.location.href = '../../Páginas-Cliente/Html/cardapio.html'
  } else {
    // Se login falhou, avisa ao usuário
    alert('Usuário ou senha incorretos')
  }
}

// ========================================================================================

// Objeto para o banco de dados de usuários baseado em JSON
var db_usuarios = {}

// Objeto para o usuário corrente
var usuarioCorrente = {}

// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime() //Timestamp
  var d2 = (performance && performance.now && performance.now() * 1000) || 0 //Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0
      d = Math.floor(d / 16)
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0
      d2 = Math.floor(d2 / 16)
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

// Dados de usuários para serem utilizados como carga inicial
const dadosIniciais = {
  usuarios: [
    {
      id: generateUUID(),
      email: 'admin@gmail.com',
      confirmarEmail: 'admin@gmail.com',
      nome: 'Administrador do Sistema',
      senha: '12345678',
      cpf: 00000000000,
      telefone: 00000000000,
      nascimento: 02 - 02 - 1970,
      sexo: 'feminino',
      cep: 00000000,
      cidade: 'Belo Horizonte',
      rua: 'Qualquer',
      numero: 10,
      bairro: 'Qualquer',
      complemento: 'Qualquer',
      referencia: 'Qualquer'
    },
    {
      id: generateUUID(),
      email: 'user@gmail.com',
      confirmarEmail: 'user@gmail.com',
      nome: 'Usuario Comum',
      senha: '12345678',
      cpf: 00000000000,
      telefone: 00000000000,
      nascimento: 01 - 01 - 2000,
      sexo: 'masculino',
      cep: 00000000,
      cidade: 'Belo Horizonte',
      rua: 'Qualquer',
      numero: 01,
      bairro: 'Qualquer',
      complemento: 'Qualquer',
      referencia: 'Qualquer'
    }
  ]
}

// Troca o menu de "Login" para "Meu perfil"
function trocarLogin() {
  let trocarLogin = document.getElementById('trocar-login')
  let trocarLoginMobile = document.getElementById('trocar-login-mobile')

  trocarLogin.innerHTML = `
    <li id="meu-perfil">
      <a href="meusdados/meusdados.html">
        <i class="far fa-user"></i>
        <span>MEU PERFIL</span>
      </a>
    </li>
  
  `
  trocarLoginMobile.innerHTML = `
    <li id="meu-perfil">
      <a href="meusdados/meusdados.html">
        <i class="far fa-user"></i>
        <span>MEU PERFIL</span>
      </a>
    </li>
  `
}

// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp() {
  if (localStorage.getItem('db_trocarLogin')) {
    trocarLogin()
  }

  // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
  usuarioCorrenteJSON = localStorage.getItem('usuarioCorrente')
  if (usuarioCorrenteJSON) {
    usuarioCorrente = JSON.parse(usuarioCorrenteJSON)
  }

  // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
  // Obtem a string JSON com os dados de usuários a partir do localStorage
  var usuariosJSON = localStorage.getItem('db_usuarios')

  // Verifica se existem dados já armazenados no localStorage
  if (!usuariosJSON) {
    // Se NÃO há dados no localStorage

    // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
    // alert(
    //   'Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.'
    // )

    // Copia os dados iniciais para o banco de dados
    db_usuarios = dadosIniciais

    // Salva os dados iniciais no local Storage convertendo-os para string antes
    localStorage.setItem('db_usuarios', JSON.stringify(dadosIniciais))
  } else {
    // Se há dados no localStorage

    // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
    db_usuarios = JSON.parse(usuariosJSON)
  }
}

// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser(email, senha) {
  // Verifica todos os itens do banco de dados de usuarios
  // para localizar o usuário informado no formulario de login
  for (var i = 0; i < db_usuarios.usuarios.length; i++) {
    var usuario = db_usuarios.usuarios[i]

    // Se encontrou login, carrega usuário corrente e salva no Local Storage
    if (email == usuario.email && senha == usuario.senha) {
      usuarioCorrente.id = usuario.id
      usuarioCorrente.email = usuario.email
      usuarioCorrente.confirmarEmail = usuario.confirmarEmail
      usuarioCorrente.nome = usuario.nome
      usuarioCorrente.senha = usuario.senha
      usuarioCorrente.cpf = usuario.cpf
      usuarioCorrente.telefone = usuario.telefone
      usuarioCorrente.nascimento = usuario.nascimento
      usuarioCorrente.sexo = usuario.sexo
      usuarioCorrente.cep = usuario.cep
      usuarioCorrente.cidade = usuario.cidade
      usuarioCorrente.rua = usuario.rua
      usuarioCorrente.numero = usuario.numero
      usuarioCorrente.bairro = usuario.bairro
      usuarioCorrente.complemento = usuario.complemento
      usuarioCorrente.referencia = usuario.referencia

      // Salva os dados do usuário corrente no Local Storage, mas antes converte para string
      localStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente))

      // Retorna true para usuário encontrado
      return true
    }
  }

  // Se chegou até aqui é por que não encontrou o usuário e retorna falso
  return false
}

// Inicializa as estruturas utilizadas pelo LoginApp
initLoginApp()
