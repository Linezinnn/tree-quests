import { messageExportFailed, messageExportSucess } from "../../elements.js"

export function messageSucess(){
    addMessageToBody(messageExportSucess)
}

export function messageFailed(){
    addMessageToBody(messageExportFailed)
}


function addMessageToBody(message){

    message.classList.remove("hidden")
    setTimeout(() => {
        message.classList.add("hidden")
    }, 3500)
}