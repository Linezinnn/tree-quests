export const messageImportSuccess = document.querySelector('.import-success')
export const messageImportFailed = document.querySelector('.import-failed')

export function messageSucess(){
    addMessageToBody(messageImportSuccess)
}

export function messageFailed(){
    addMessageToBody(messageImportFailed)
}


function addMessageToBody(message){

    message.classList.remove("hidden")
    setTimeout(() => {
        message.classList.add("hidden")
    }, 3500)
}