document.addEventListener('DOMContentLoaded', function() {

    loadViewColors()

})

function loadViewColors(){

    document.documentElement.style.setProperty("--pcolor", document.querySelector('#p-color-question').value)
    document.documentElement.style.setProperty("--scolor", document.querySelector('#s-color-question').value)
    document.documentElement.style.setProperty("--tcolor", document.querySelector('#t-color-question').value)
    document.documentElement.style.setProperty("--theme", document.querySelector('#theme-question').value)
    document.documentElement.style.setProperty("--letter", document.querySelector('#letter-question').value)
    document.documentElement.style.setProperty("--bletter", document.querySelector('#b-letter-question').value)
    document.documentElement.style.setProperty("--tletter", document.querySelector('#t-letter-question').value)
}