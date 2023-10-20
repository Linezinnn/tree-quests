let counterQuestions = 1
localStorage.setItem('counterQuestions', counterQuestions)

export function newQuestion() {

    var counterQuestions = localStorage.getItem('counterQuestions')
    counterQuestions++

    const answerContainer = document.querySelector('.answer-content')
    const navAnswer = document.querySelector('.nav-answer')
    const answerContent = document.createElement("div")
    
    answerContent.id = 'answerQuestion' + counterQuestions
    answerContent.className = 'answer-values-content'
    


    answerContent.innerHTML = `
        <div class="reference-question">
            <h1 id="questionNumber-` + counterQuestions + `">Questão ` + counterQuestions + `</h1>
        </div>
        <input type="text" id="text-question` + counterQuestions + `" class="text-question" placeholder="Digite a pergunta">
        <select onchange="refreshOptions(` + counterQuestions + `)" id="type-question` + counterQuestions + `" class="type-question">
            <option value="vd">Verdadeiro ou falso</option>
            <option value="3">2 respostas</option>
            <option value="4">3 respostas</option>
            <option value="5">4 respostas</option>
            <option selected value="6">5 respostas</option>
        </select>
        <select id="pts-question` + counterQuestions + `" class="pts-question">
            <option value="1">1 ponto</option>
            <option value="2">2 pontos</option>
            <option value="3">3 pontos</option>
            <option value="4">4 pontos</option>
            <option value="5">5 pontos</option>
        </select>  
        <h1>Respostas</h1>
        <div class="boxes-answers">
            <div class="box-answer" id="box-answer1-` + counterQuestions + `">
                <input type="radio" onclick="correctAnswer(1, ` + counterQuestions +`)" value="1" name="answers-question` + counterQuestions + `" id="validation-answer1-` + counterQuestions + `">
                <input type="text" placeholder="Digite uma resposta" class="input-text1-` + counterQuestions + `" id="answer1-` + counterQuestions + `">
            </div>
            <div class="box-answer" id="box-answer2-` + counterQuestions + `">
                <input type="radio" onclick="correctAnswer(2, ` + counterQuestions +`)" value="2" name="answers-question` + counterQuestions + `" id="validation-answer2-` + counterQuestions + `">
                <input type="text" placeholder="Digite uma resposta" class="input-text2-` + counterQuestions + `" id="answer2-` + counterQuestions + `">
            </div>
            <div class="box-answer" id="box-answer3-` + counterQuestions + `">
                <input type="radio" onclick="correctAnswer(3, ` + counterQuestions +`)" value="3" name="answers-question` + counterQuestions + `" id="validation-answer3-` + counterQuestions + `">
                <input type="text" placeholder="Digite uma resposta" class="input-text3-` + counterQuestions + `" id="answer3-` + counterQuestions + `">
            </div>
            <div class="box-answer" id="box-answer4-` + counterQuestions + `">
                <input type="radio" onclick="correctAnswer(4, ` + counterQuestions +`)" value="4" name="answers-question` + counterQuestions + `" id="validation-answer4-` + counterQuestions + `">
                <input type="text" placeholder="Digite uma resposta" class="input-text4-` + counterQuestions + `" id="answer4-` + counterQuestions + `">
            </div>
            <div class="box-answer" id="box-answer5-` + counterQuestions + `">
                <input type="radio" onclick="correctAnswer(5, ` + counterQuestions +`)" value="5" name="answers-question` + counterQuestions + `" id="validation-answer5-` + counterQuestions + `">
                <input type="text" placeholder="Digite uma resposta" class="input-text5-` + counterQuestions + `" id="answer5-` + counterQuestions + `">
            </div>
        </div>`

    

    answerContainer.insertBefore(answerContent, navAnswer)
    window.counterQuestions = counterQuestions

    localStorage.setItem('counterQuestions', counterQuestions)
    
    var lastQuestionBox = document.querySelector('#answerQuestion' + (counterQuestions - 1) + ' div:nth-child(1)')

    if(lastQuestionBox.style.opacity == '0'){
        window.closeModal()
    }
}

window.newQuestion = newQuestion
window.counterQuestions = counterQuestions