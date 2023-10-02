const importContainer = document.querySelector('.import-container')

const exportContainer = document.querySelector('.export-container')

export function calcularAlturaDaPagina() {
    const questionariesContent = document.querySelector('.questionaries-content')

    let windowHeight = questionariesContent.offsetHeight + 200;

    if(questionariesContent.offsetWidth < 680){
        windowHeight += 180
        exportContainer.style.minHeight = windowHeight + 'px'
    }

    if(exportContainer.offsetHeight < 700){
        exportContainer.style.minHeight = '100%'
    }

    const fullHeight = windowHeight + 'px'
    
    importContainer.style.height = fullHeight
    exportContainer.style.height = fullHeight
}
