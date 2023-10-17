import { calcularAlturaDaPagina } from "./utils.js"

var counterQuestionaries = 0

listQuestionaries()

export function listQuestionaries(filter){

    var questionaryBD = JSON.parse(localStorage.getItem('questionaryBD'))

    var questionaries = questionaryBD.length

    for(let i = 0; questionaries >= i; i++){
        const questionary = questionaryBD[i]
        console.log(questionaryBD)
        if(!questionary){
            return
        }

        let name = questionary[0].toLowerCase()
        let category = questionary[8].toLowerCase()
        let color = questionary[3]
        let bgImage = questionary[15]
        
        let filterName = name.includes(filter)
        let filterCategory = category.includes(filter)

        name = questionary[0]
        category = questionary[8]
        
        if (filter === "" || filter === undefined) {
            putQuestionary(category, name, color, bgImage, i);
        } else if (filterCategory || filterName) {
            putQuestionary(category, name, color, bgImage, i);
        }
        
        calcularAlturaDaPagina()
    }

} 

function putQuestionary(category, name, color, bgImage, questionaryId){

    const boxQuestionary = document.createElement("div")
    const questionsContent = document.querySelector('.boxes-content')

    boxQuestionary.className = 'box-question'
    boxQuestionary.innerHTML = `
        <div class="container-question">
            <img src="${bgImage}">
            <div class="content">
                <h3>` + name + `</h3>
                <div class="tags">
                    <span>` + category + `</span>
                    <div class="primary-color" style="background-color: ${color}"></div>
                    <button class="edit-questionary-btn" data-questionaryId="${questionaryId}">            
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `

    orderQuestionary(questionsContent, boxQuestionary)
    
    boxQuestionary.onclick = () => {
        openQuestionary(boxQuestionary.id)
    }    


}

function orderQuestionary(container, box) {

    console.log(counterQuestionaries)
    counterQuestionaries++
    box.id = 'box-question' + counterQuestionaries

    container.insertBefore(box, document.querySelector('#box-question' + (counterQuestionaries - 1)))

}

