import { insertToDatabase } from "./insert-to-database.js"
import { requestBgImage } from "./request-bg-image.js"

var questionaryBD = JSON.parse(localStorage.getItem('questionaryBD')) || []
var allQuestions = []
var ranking = []

localStorage.setItem('questionaryBD', JSON.stringify(questionaryBD))

document.addEventListener('DOMContentLoaded', function() {

async function requestValues(){
    var name = document.querySelector('#name-question').value
    var message = document.querySelector('#menssage-question').value
    var description = document.querySelector('#desc-question').value

    var pcolor = document.querySelector('#p-color-question').value
    var scolor = document.querySelector('#s-color-question').value
    var tcolor = document.querySelector('#t-color-question').value

    var theme = document.querySelector('#theme-question').value
    var letter = document.querySelector('#letter-question').value
    var bLetter = document.querySelector('#b-letter-question').value
    var tLetter = document.querySelector('#t-letter-question').value

    var category = document.querySelector('#category-question').value
    var time = document.querySelector('#time-question').value
    var view = document.querySelector('#view-question').value

    const bgImage = await requestBgImage()

    requestAnswers()

    insertToDatabase(name, message, description, pcolor, scolor, tcolor, theme, letter, category, time, view, allQuestions, bLetter, tLetter, ranking, bgImage)
    
}


function requestAnswers(){

    var counterQuestions = window.counterQuestions

    for(let i = 1; counterQuestions >= i; i++){

        var answer = document.querySelector('#text-question' + i).value
        var type = document.querySelector('#type-question' + i).value
        var pts = document.querySelector('#pts-question' + i).value

        var cAnswer = document.querySelector("input[name='answers-question" + i + "']:checked").value 
        
        var aw1 = document.querySelector('#answer1-' + i).value
        var aw2 = document.querySelector('#answer2-' + i).value
        var aw3 = document.querySelector('#answer3-' + i).value
        var aw4 = document.querySelector('#answer4-' + i).value
        var aw5 = document.querySelector('#answer5-' + i).value
        
        let question = [answer, type, pts, cAnswer,aw1, aw2, aw3, aw4, aw5]
        allQuestions.push(question)
    }

}

window.requestValues = requestValues
window.questionaryBD = questionaryBD

})








