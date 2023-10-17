function deleteQuestionary(buttonDeleteOfModalMore){

    const modalMore = buttonDeleteOfModalMore.parentNode.id
    const questionaryId = modalMore.replace('modal-more-', '')

    const questionaryDB = JSON.parse(localStorage.getItem('questionaryBD'))

    if(!questionaryDB){
        throw new Error("Database not found to delete item")
    }
    
    questionaryDB.splice(questionaryId, 1)

    console.log(questionaryDB) 

    localStorage.setItem('questionaryBD', JSON.stringify(questionaryDB))
    
    window.location.reload()


}