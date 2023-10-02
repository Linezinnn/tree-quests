import { calcularAlturaDaPagina } from "../index/js/utils.js"
import { exportBtn, exportContainer, closeExportBtn } from "./elements.js"

exportBtn.addEventListener('click', () => {
    exportContainer.style.height = 'initial'
    exportContainer.classList.remove("hidden")
    calcularAlturaDaPagina()
})
closeExportBtn.addEventListener('click', () => {
    exportContainer.classList.add("hidden")
})
