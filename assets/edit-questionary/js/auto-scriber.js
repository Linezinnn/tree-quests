import { correctAnswer, refreshOptions } from "../../create-questionary/js/input-answers.js"
import { newQuestion } from "../../create-questionary/js/new-answer.js"

const questionaryBD = JSON.parse(localStorage.getItem('questionaryBD'))
const questionaryId = localStorage.getItem('@edit-questionary-id') 

const questionary = questionaryBD[questionaryId]

scribeValue(questionary[0], document.querySelector('#name-question'))
scribeValue(questionary[1], document.querySelector('#menssage-question'))
scribeValue(questionary[2], document.querySelector('#desc-question'))

scribeValue(questionary[3], document.querySelector('#p-color-question'))
scribeValue(questionary[4], document.querySelector('#s-color-question'))
scribeValue(questionary[5], document.querySelector('#t-color-question'))

scribeValue(questionary[6], document.querySelector('#theme-question'))
scribeValue(questionary[7], document.querySelector('#letter-question'))
scribeValue(questionary[8], document.querySelector('#category-question'))
scribeValue(questionary[9], document.querySelector('#time-question'))
scribeValue(questionary[10], document.querySelector('#view-question'))

scribeValue(questionary[12], document.querySelector('#b-letter-question'))
scribeValue(questionary[13], document.querySelector('#t-letter-question'))

scribeQuestions(questionary[11])

try {
    scribeValue(questionary[15], document.querySelector('#bg-image-question'))
}catch{
    const labelInputBgImage = document.querySelector(".bg-image")
    labelInputBgImage.textContent = "Não foi possível carregar a imagem"
}

function scribeQuestions(questions){
    questions.forEach((question, index) => {
        
        const existQuestionBoxWithId = document.querySelector("#answerQuestion" + (index + 1))

        if(!existQuestionBoxWithId){
            newQuestion()
        }
        
        console.log(question)

        scribeValue(question[0], document.querySelector(`#text-question${index + 1}`))
        scribeValue(question[1], document.querySelector(`#type-question${index + 1}`))

        refreshOptions(index + 1)
        

        scribeValue(question[2], document.querySelector(`#pts-question${index + 1}`))
        
        const answers = document.querySelectorAll(`input[name='answers-question${index + 1}']`)
        
        answers.forEach(radio => {

            if(radio.value == question[3]){
                radio.checked = true

                const answer = Number(question[3])
                correctAnswer(answer, index + 1)
            }
        })

        scribeValue(question[4], document.querySelector(`#answer1-${index + 1}`))
        scribeValue(question[5], document.querySelector(`#answer2-${index + 1}`))
        scribeValue(question[6], document.querySelector(`#answer3-${index + 1}`))
        scribeValue(question[7], document.querySelector(`#answer4-${index + 1}`))
        scribeValue(question[8], document.querySelector(`#answer5-${index + 1}`))
    })
}



function scribeValue(value, input){
    input.value = value
}