const bgImageLabel = document.querySelector('.bg-image')
const fileInput = document.querySelector('#bg-image-question')

fileInput.addEventListener('change', () => {

    const fileInput = document.querySelector('#bg-image-question');
    const file = fileInput.files[0]

    if(!file){
        changeLabelImageFailed()
        return
    }

    changeLabelImageSucess(file.name)
})

function changeLabelImageSucess(name){
    bgImageLabel.style = `
        background: rgb(103, 230, 103);
        color: white;
        border: none;
    `
    bgImageLabel.textContent = `Imagem anexada (${name})`
}

function changeLabelImageFailed(){
    bgImageLabel.style = `
        background: rgb(230, 103, 103);
        color: white;
        border: none;
    `
    bgImageLabel.textContent = "Arquivo não selecionado"
}

