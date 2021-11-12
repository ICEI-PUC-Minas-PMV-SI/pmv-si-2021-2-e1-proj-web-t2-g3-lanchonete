var menuBar = document.querySelector('#menu-mobile a.icon-menu')

menuBar.addEventListener('click', showMenu)

function showMenu() {
  let menuMobile = document.querySelector('#menu-mobile ul')
  if (menuMobile.classList.contains('show-menu')) {
    menuMobile.classList.remove('show-menu')
  } else {
    menuMobile.classList.add('show-menu')
  }
}
