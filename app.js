
 // Un ID IL DOIT AVOIR == #
 let changeColor = document.querySelector('#btn') // Button change
 //pour le class ILD OIT AVOIR = .
 let pop = document.querySelector('.pop') // Notre POP




changeColor.addEventListener('click', () => {
    document.querySelector('.pop').style.padding = '0'
})




  // NOUS TRAVAILLONS AVEC LE MENU en responsive bien sur 
  let menu = document.querySelector('.header__list')
  let openMenu = document.querySelector('.header__open__menu') // For open
  let closeMenu = document.querySelector('.header__closed__menu') //For closed

  openMenu.addEventListener('click', () => {
     document.querySelector('.header__list').style.display = 'flex'
  })

  closeMenu.addEventListener('click', () => {
    document.querySelector('.header__list').style.display = 'none'
  })
    

