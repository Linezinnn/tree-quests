const btnClear = document.querySelector('#btn-clear')

btnClear.addEventListener('click', () => {
    
    const questionaryBD = "[]"
    localStorage.setItem('questionaryBD', questionaryBD)

    window.location.reload()

})