document.addEventListener('DOMContentLoaded', function() {

    displayQuestions()

})

var orderQuestions = 0

function removeQuestion(){

    var beforeQuestion = document.querySelector('#containerQuestion' + (orderQuestions));
    beforeQuestion.remove();
    console.log('removido')

}

function displayQuestions(){

    var fullQuestionary = window.fullQuestionary
    var question = fullQuestionary[11][orderQuestions]

  orderQuestions++  

    var section = document.querySelector('#questionary-container')
    var finalQuestionary = document.querySelector('.final-questionary')
    var containerQuestion = document.createElement("div")
    containerQuestion.className = 'questions-content'
    containerQuestion.id = 'containerQuestion' + orderQuestions

    console.log(fullQuestionary[11][1])

    if(orderQuestions !== 1){
        containerQuestion.style.display = 'flex'
    }

    containerQuestion.innerHTML = `

        <div class="timeOverBox">
            <h1>Tempo Esgotado!</h1>
            <div></div>
        </div>
        <div class="question">
            <div class="timer"></div>
            <div class="question-info">
                <h3>Q` + orderQuestions + `</h3>
                <p>` + question[0] + `</p>
            </div>
            <button onclick="validationAnswer()">Próximo</button>
        </div>
        <div class="answers">
            <p class="errorMessage2">É necessário escolher uma das opções de resposta para prosseguir.</p>

        </div>

    `
    
    section.insertBefore(containerQuestion ,finalQuestionary)
    

    var counterAnswers = question[1]

    if(counterAnswers == 'vd'){
        counterAnswers = 2
    }else{
        counterAnswers -= 1
    }

    for(let i = 1; i <= counterAnswers; i++){

        var answer = document.createElement("div")
        answer.className = 'radio'
        answer.innerHTML = `

            <p>` + question[3 + i] + `</p>
            <input id="option` + i + `" name="radios" type="radio" value="` + i + `">
            <label for="option` + i + `"></label>

        `

        console.log('respotas: ' + i)

        var answersContent = document.querySelector('.answers')
        answersContent.appendChild(answer)

    }

    console.log('questão: ' + containerQuestion)

    window.displayQuestions = displayQuestions
    window.removeQuestion = removeQuestion

}