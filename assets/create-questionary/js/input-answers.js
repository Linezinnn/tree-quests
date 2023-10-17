document.addEventListener('DOMContentLoaded', function() {

    var counterQuestions = window.counterQuestions
    refreshOptions()

for(let i = 5; i >= 1; i--){

    var answerBox = document.querySelector('#box-answer' + i + '-1')
    var answerRadio = document.querySelector('#validation-answer' + i + '-1')
    var answerText = document.querySelector('.input-text' + i + '-1')
    var answerText1 = document.querySelector('.input-text1-1')
    var answerText2 = document.querySelector('.input-text2-1')

    answerBox.style.opacity = "1"
    answerBox.style.userSelect = "auto"
    answerBox.style.cursor = "default"
                
        answerRadio.style.pointerEvents = "all"
    answerText.style.pointerEvents = "all"

    answerText1.style.pointerEvents = "all"
    answerText1.value = ''

    answerText2.style.pointerEvents = "all"
    answerText2.value = ''
}
         
})

var lastType = ''

function refreshOptions(question){

    var answersGroup = document.getElementsByName('answers-question' + question)

    answersGroup.forEach(element => {
        if(element.checked === true){
            element.checked = false
        }
    });

    if(lastType == 'vd'){
        var answerText1 = document.querySelector('.input-text1-' + question)
        var answerText2 = document.querySelector('.input-text2-' + question)
        answerText1.value = ''
        answerText2.value = ''
    }

    for(let i = 1; question >= i; i++){

            var type = document.querySelector('#type-question' + question).value

            for(let i = 5; i >= 1; i--){

                var answerBox = document.querySelector('#box-answer' + i + '-' + question)
                var answerRadio = document.querySelector('#validation-answer' + i + '-' + question)
                var answerText = document.querySelector('.input-text' + i + '-' + question)
                var answerText1 = document.querySelector('.input-text1-' + question)
                var answerText2 = document.querySelector('.input-text2-' + question)

                answerBox.style.opacity = "1"
                answerBox.style.userSelect = "auto"
                answerBox.style.cursor = "default"
                answerBox.style.background = "rgba(226, 41, 41, 0.808)"
                
                answerRadio.style.pointerEvents = "all"
                answerText.style.pointerEvents = "all"  

                answerText1.style.pointerEvents = "all"

                answerText2.style.pointerEvents = "all"
            }

            if(type == 'vd'){
                
                type = 3

                for(let i = 5; i >= type; i--){

                    var answerBox = document.querySelector('#box-answer' + i + '-' + question)
                    var answerRadio = document.querySelector('#validation-answer' + i + '-' + question)
                    var answerText = document.querySelector('.input-text' + i + '-' + question)

                    answerBox.style.opacity = "0.5"
                    answerBox.style.userSelect = "none"
                    answerBox.style.cursor = "not-allowed"
                    answerText.value = ''
                    
                    answerRadio.style.pointerEvents = "none"
                    answerText.style.pointerEvents = "none"

                }
                
                var answerText1 = document.querySelector('.input-text1-' + question)
                var answerText2 = document.querySelector('.input-text2-' + question)

                answerText1.style.pointerEvents = "none"
                answerText1.value = 'Verdadeiro'

                answerText2.style.pointerEvents = "none"
                answerText2.value = 'Falso'

                lastType = 'vd'

            }else{
                for(let i = 5; i >= type; i--){ 

                    var answerBox = document.querySelector('#box-answer' + i + '-' + question)
                    var answerRadio = document.querySelector('#validation-answer' + i + '-' + question)
                    var answerText = document.querySelector('.input-text' + i + '-' + question)

                    answerBox.style.opacity = "0.5"
                    answerBox.style.userSelect = "none"
                    answerBox.style.cursor = "not-allowed"
                    answerText.value = ''
                    
                    answerRadio.style.pointerEvents = "none"
                    answerText.style.pointerEvents = "none"

                }

                lastType = 'num'

            }


        }

}

export function correctAnswer(id, question) {

    for(let i = 1; i <= 5; i++){

        if(i == id){
            var contentAnswer = document.querySelector("#box-answer" + id + "-" + question)
            contentAnswer.style.background = "rgba(27, 214, 27, 0.637)"
        }else{
            var contentAnswer = document.querySelector("#box-answer" + i + "-" + question)
            contentAnswer.style.background = "rgba(226, 41, 41, 0.808)"
        }

    }

}