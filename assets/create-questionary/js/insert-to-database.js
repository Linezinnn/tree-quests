export function insertToDatabase(name, message, description, pcolor, scolor, tcolor, theme, letter, category, time, view, allQuestions, bLetter, tLetter, ranking, bgImage){
    var questionary = [name, message, description, pcolor, scolor, tcolor, theme, letter, category, time, view, allQuestions, bLetter, tLetter, ranking, bgImage]

    var questionaryBD = JSON.parse(localStorage.getItem('questionaryBD'))
    questionaryBD.push(questionary)
    localStorage.setItem('questionaryBD', JSON.stringify(questionaryBD))

    window.questionaryBD = questionaryBD

    console.log(questionaryBD)
}