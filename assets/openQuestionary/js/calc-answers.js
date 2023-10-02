
var globalPontuation = 0
var globalQuestion = 0
var globalCorrects = 0

window.globalPontuation = globalPontuation

function verifyAnswer(answer, pts, cAnswer, question, view){
 
    var finalPontuation = document.querySelector('.results-box h4')
    var boxResult = document.querySelector('.results-box')
    

    globalQuestion++

    if(view == 'show'){
        document.querySelector('.results-box p').style.display = 'none'
        var questionInfo = document.createElement("p")
        questionInfo.innerHTML = `

         Questão ` + question + ` - ` + pts + ` pontos<span class="result" id="result` + question + `"></span>

        `
        boxResult.insertBefore(questionInfo, finalPontuation)
    }else{

        document.querySelector('.results-box p').style.display = 'inline-block'

    }
    
    if(answer == cAnswer){

        globalCorrects++

        globalPontuation += parseInt(pts)

        if(view == 'show'){
            var result = document.querySelector('#result' + question)
            result.style.background = "rgba(27, 214, 27, 0.637)"
        }
        
    }

    finalPontuation.innerText = `

        Pontuação final: ${globalPontuation} pontos (${((globalCorrects * 100)/globalQuestion).toFixed(2)}%)

    `

}