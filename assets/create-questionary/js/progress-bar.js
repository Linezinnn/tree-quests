
document.addEventListener('DOMContentLoaded', function() {
    
const identifyQuestion = document.querySelector('#identify-question')
const descQuestion = document.querySelector('#desc-question')
const finalCreate = document.querySelector('#final-create')

const nextBtn = document.querySelector('#next-btn')
const backBtn = document.querySelector('#back-btn')

const state2 = document.querySelector('.state2')
const state3 = document.querySelector('.state3')

    var counter = 0

nextBtn.addEventListener('click', () => {

    var counterQuestions = localStorage.getItem('counterQuestions')

    var name = document.querySelector('#name-question').value
    var message = document.querySelector('#menssage-question').value
    var description = document.querySelector('#desc-question').value

    let counterCheckeds = 0
    let counterAnswers = 0
    let answerError = false



    
    for(let i = 1; counterQuestions >= i; i++){

        var cAnswer = document.querySelector("input[name='answers-question" + i +"']:checked")
        var answer = document.querySelector('#text-question' + i).value

        if(cAnswer !== null){
            counterCheckeds++
        }
        if(answer !== ''){
            counterAnswers++
        }

        var type = document.querySelector('#type-question' + i).value
        
        if(type !== 'vd'){

            type--

            for(let a = 1; a <= type; a++){

                var inputText = document.querySelector('#answer' + a + '-' + i).value
                
                if(inputText == ''){
                    console.log(a)
                    answerError = true
                    break 
                }

            }

        }

    }

    switch (counter){
        case 0:
            let errorMessage = document.querySelector('.errorMessage')
            if(answerError == false && name !== '' && message !== '' && counterAnswers == counterQuestions && counterCheckeds == counterQuestions){
                pushStage(identifyQuestion, descQuestion)
                state2.style.backgroundColor = "rgba(27, 214, 27, 0.637)"
                errorMessage.style.display = "none"
                counter++
            }else{
                errorMessage.style.display = "inline-block"
            }
            break;
        case 1:
            let errorMessage2 = document.querySelector('.errorMessage2')
            if(description !== ''){
                pushStage(descQuestion, finalCreate)
                state2.style.backgroundColor = "rgba(27, 214, 27, 0.637)"
                state3.style.backgroundColor = "rgba(27, 214, 27, 0.637)"
                errorMessage2.style.display = "none"
                counter++
                console.log(counter)
                
            }else{
                errorMessage2.style.display = "inline-block"
            }
            
            break;
        case 2:
            window.location.href = '../../index.html'
            console.log(counter)
            requestValues()
            break;
    }
})
backBtn.addEventListener('click', () => {
    
    switch (counter){
        case 1:
            backStage(descQuestion, identifyQuestion)
            state2.style.backgroundColor = "rgba(238, 238, 238, 0.863)"
            counter--
            break;
        case 2:
            backStage(finalCreate, descQuestion)
            
            state3.style.backgroundColor = "rgba(238, 238, 238, 0.863)"
            counter--
            break;
    }
})

function pushStage(nowStage, nextStage){
    nowStage.style.display = "none"
    nextStage.style.display = "flex"
}
function backStage(nowStage, nextStage){
    nextStage.style.display = "flex"
    nowStage.style.display = "none"
}
const nameQuestion = document.getElementById('name-question');


});

