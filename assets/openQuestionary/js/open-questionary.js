function openQuestionary(id){

    id = id.replace('box-question', '')
    id = Number(id) - 1

    window.location.href = `assets/openQuestionary/questionary.html?questionaryID=${id}`

}




