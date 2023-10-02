import { calcularAlturaDaPagina } from "../../index/js/utils.js"
import { importBtn, importContainer, closeImportBtn} from "./elements.js"

importBtn.addEventListener('click', () => {
    importContainer.classList.remove("hidden")
    calcularAlturaDaPagina()
})
closeImportBtn.addEventListener('click', () => {
    importContainer.classList.add("hidden")
})
