import { listQuestionaries } from "../put-questionarys.js"

let inputSearch = document.querySelector('#input-search')

inputSearch.addEventListener('input', () => {
    removeAllQuestionariesBoxes()

    let filter = inputSearch.value

    listQuestionaries(filter.toLowerCase())
})

function removeAllQuestionariesBoxes(){
    let questionaryBox = document.querySelectorAll('.box-question')
    questionaryBox.forEach((box) => {
        box.remove()
    })
}