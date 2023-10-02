

function validationName(){

    var pageQuestions = document.querySelector('.questions-content')
    var userName = document.querySelector('#userName').value
    var errorMessage = document.querySelector('.errorMessage')
    var pageStart = document.querySelector('.start-questionary')

    if(userName !== ''){

        var fullQuestionary = window.fullQuestionary

        pageStart.style.display = 'none'
        pageQuestions.style.display = 'flex'
        errorMessage.style.display = 'none'
        startTime(parseInt(fullQuestionary[9]))

    }else{

        errorMessage.style.display = 'inline-block'

    }

}

var counterOrderQuestions = 1

function validationAnswer(){

    var groupRadios = document.getElementsByName('radios')
    var errorMessage2 = document.querySelector('.errorMessage2')

    groupRadios.forEach((element) => {
        
        if(element.checked == true){

            nextPrevious(element.value)
        
        }else{

            errorMessage2.style.display = 'inline-block'

        }

    })

}

var timeoutID;

function nextPrevious(value){

    clearTimeout(timeoutID)

    var pageQuestions = document.querySelector('.questions-content')
    var pageFinal = document.querySelector('.final-questionary')
    var errorMessage2 = document.querySelector('.errorMessage2')

    errorMessage2.style.display = 'none'

    var fullQuestionary = window.fullQuestionary
    var numQuestions = fullQuestionary[11]
    var id = window.id

    if(numQuestions.length !== counterOrderQuestions){

        verifyAnswer(value, numQuestions[counterOrderQuestions - 1][2], numQuestions[counterOrderQuestions - 1][3], counterOrderQuestions, fullQuestionary[10])
        removeQuestion()
        displayQuestions()
        startTime(parseInt(fullQuestionary[9]))
        
        

    }else{

        verifyAnswer(value, numQuestions[counterOrderQuestions - 1][2], numQuestions[counterOrderQuestions - 1][3], counterOrderQuestions, fullQuestionary[10])
        calcRanking(id)

        pageQuestions.style.display = 'none'
        pageFinal.style.display = 'flex'

    }

    counterOrderQuestions++

}

