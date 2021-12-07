function abrirModalLogin(modalID1) {
    let modal = document.getElementById(modalID1)
    modal.style.display = 'block'
  
    // DESFOCAR E ESCURECER FUNDO QUANDO ABRE O MODAL
    let filterBlur = document.getElementsByClassName('filter-blur')
    for (elemento of filterBlur) {
      // console.log(elemento)
      elemento.style.filter = 'blur(3px) brightness(75%)'
    }
  }
  
  function fecharModalLogin(modalID) {
    let modal = document.getElementById(modalID)
    modal.style.display = 'none'
  
    // TIRAR DESFOQUE DO FUNDO QUANDO FECHA O MODAL
    let filterBlur = document.getElementsByClassName('filter-blur')
    for (elemento of filterBlur) {
      // console.log(elemento)
      elemento.style.filter = 'none'
    }
  }
  
  function abrirModal(modalID1, modalID2) {
    let modal = document.getElementById(modalID1)
    modal.style.display = 'block'
  
    let modal2 = document.getElementById(modalID2)
    modal2.style.display = 'none'
  }
  
  function fecharModal(modalID, modalID2) {
    let modal = document.getElementById(modalID)
    modal.style.display = 'none'
  
    let modal2 = document.getElementById(modalID2)
    modal2.style.display = 'block'
  }
  