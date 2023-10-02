import { insertToDatabase } from "../../create-questionary/js/insert-to-database.js"
import { contentOutput } from "./get-questionary-file.js"
import { messageFailed, messageSucess } from "./messages/messages.js"
    
    const sendPromptButton = document.querySelector("#send-prompt")
    
    sendPromptButton.addEventListener('click', () => {
        const promptContent = contentOutput.value
    
        createQuestionaryByImport(promptContent)
    })
    
    function createQuestionaryByImport(promptContent){

        try {

            const prompt = JSON.parse(promptContent)
            
            insertToDatabase(
                prompt.name, 
                prompt.finalMessage, 
                prompt.description, 
                prompt.primaryColor, 
                prompt.secundaryColor,
                prompt.ternaryColor, 
                prompt.theme, 
                prompt.letter, 
                prompt.category, 
                prompt.time, 
                prompt.view, 
                prompt.allQuestions, 
                prompt.buttonLetterColor, 
                prompt.titleLetterColor, 
                prompt.ranking,
                prompt.bgImage
            )
            

            messageSucess()

            setTimeout(() => {
                window.location.reload()
            }, 4000);

        } catch (error) {
            messageFailed()
            throw new Error("Algo deu errado com a importação")
        }
    }



