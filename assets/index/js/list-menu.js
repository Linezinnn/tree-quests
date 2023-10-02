const openMenuList = document.querySelector('#open-menu-list')
const menuList = document.getElementById('menu-list')
const closeMenuList = document.getElementById('close-list')

openMenuList.addEventListener('click', () => {
    menuList.classList.remove("hidden")
})

closeMenuList.addEventListener('click', () => closeMenu())

function closeMenu(){
    menuList.classList.add("hidden")
}
