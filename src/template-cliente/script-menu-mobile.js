var menuBar = document.querySelector('#menu-mobile a.icon-menu')

menuBar.addEventListener('click', showMenu)

function showMenu() {
  let menuMobile = document.querySelector('#menu-mobile ul')
  menuMobile.classList.toggle('show-menu')
}
