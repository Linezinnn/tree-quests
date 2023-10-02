const questionaryBD = JSON.parse(localStorage.getItem('questionaryBD'))
const withoutQuestionariesMessage = document.querySelector('.boxes-content .without-questionaries')

if(questionaryBD.length != 0){
    withoutQuestionariesMessage.style = "display: none;"
}else{
    withoutQuestionariesMessage.classList.remove("hidden")
}
