import { contentExport } from "../elements.js"

export function createQuestionaryLayout(questionary, id){

    const box = document.createElement("ul")
    box.id = `questionary${id}`
    box.classList = "item-list"

    const name = questionary[0]
    const category = questionary[8]

    box.innerHTML = `

        <li>${id}</li>
        <li>${name}</li>
        <li>${category}</li>
        <li><button data-idRequest="${id}" class="request-export">Exportar</button></li>

    `
    
    contentExport.appendChild(box)
}