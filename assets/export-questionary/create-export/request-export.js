import { listOfQuestionaries } from "../questionaries-controll.js"
import { downloadPrompt } from "./download-prompt.js"
import { makePrompt } from "./make-prompt.js"
import { messageFailed, messageSucess } from "./messages/messages.js"

export function getButton(){
    const requestExportBtn = document.querySelectorAll(".request-export")

    requestExportBtn.forEach((element) => {
        element.addEventListener('click', (event) => {
            const questionaryId = element.dataset.idrequest
            const questionary = listOfQuestionaries[questionaryId]
            
            const prompt = makePrompt(questionary)

            try {
                
                const downloadFile = downloadPrompt(prompt, questionaryId)
                messageSucess()

            } catch (error) {

                messageFailed()
                throw new Error("Houve um erro ao requisitar o download do arquivo: " + error)

            }

        })
    })
}