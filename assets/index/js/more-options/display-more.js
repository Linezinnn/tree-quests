import { modalMoreStates } from "./states.js"

const boxesContent = document.querySelector(".boxes-content")
const buttonMore = document.querySelectorAll(".edit-questionary-btn")

buttonMore.forEach(button => {
    
    button.addEventListener('click', (event) => {

        event.stopPropagation()
    
        const modalMoreExisting = document.querySelector(".modal-more")

        const buttonParentElement = button.parentNode

        if(modalMoreExisting == undefined){
    
            const questionaryId = button.dataset.questionaryid
            modalMoreStates.id = questionaryId
        
            createModalMore(modalMoreStates.id, buttonParentElement)
    
        }else{
            modalMoreExisting.remove()

            const questionaryId = button.dataset.questionaryid
            modalMoreStates.id = questionaryId

            createModalMore(modalMoreStates.id, buttonParentElement)
        }
    
    })

});

function createModalMore(id, buttonParentElement){

    const modal = document.createElement("ul")
    
    modal.id = `modal-more-${id}`
    modal.className = 'modal-more'
    
    modal.innerHTML = `
    
        <li onclick="closeModalMore(this); event.stopPropagation()" id="close-modal-more"><img class="close-list" src="./assets/svg/x (1).svg" alt="Fechar lista"></li>
        <li onclick="editQuestionary(this); event.stopPropagation()" ><button>Editar</button></li>
        <li onclick="deleteQuestionary(this); event.stopPropagation()"><button class="delete">Deletar</button></li>
    
    `
    
    buttonParentElement.append(modal)

}

