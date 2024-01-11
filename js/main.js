const menu = document.querySelector('.header-bar')
const nav = document.querySelector('.header-nav')
const buttons = document.querySelector('.header-buttons')

menu.addEventListener('click', () => {
    nav.classList.toggle('active')
    buttons.classList.toggle('active')
})

