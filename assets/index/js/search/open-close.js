const openSearch = document.querySelector('#open-search-mobile')
const closeSearch = document.querySelector('#close-search-mobile')
let inputSearch = document.querySelector('#input-search')
const logo = document.querySelector('#logo')
const menuListBox = document.querySelector('.list-menu')

openSearch.addEventListener('click', () => {

    openSearch.style = "display: none"
    logo.style = "display: none"
    menuListBox.style = "display: none"

    inputSearch.style = "display: block"
    closeSearch.style = "display: block"

})

closeSearch.addEventListener('click', () => {

    openSearch.style = "display: block"
    logo.style = "display: block"
    menuListBox.style = "display: block"

    inputSearch.style = "display: none"
    closeSearch.style = "display: none"

})