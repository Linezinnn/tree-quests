function editQuestionary(button){

    const modalId = button.parentNode.id
    const questionaryId = modalId.replace('modal-more-', '')

    localStorage.setItem('@edit-questionary-id', questionaryId)

    window.location.href = 'assets/edit-questionary/edit.html'

}