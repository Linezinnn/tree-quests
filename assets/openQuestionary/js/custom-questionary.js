document.addEventListener('DOMContentLoaded', function() {

    openPage()

})

function openPage() {

    var requestParams = new URLSearchParams(window.location.search)
    var id = requestParams.get('questionaryID')

    var questionaryBD = JSON.parse(localStorage.getItem('questionaryBD'))
    var questionary = questionaryBD[id]

    console.log(questionary)

    insertValues(questionary)

    
window.fullQuestionary = questionary
window.id = id

}


function insertValues(questionary){

    const section = document.createElement("section")
    section.id = 'questionary-container'

    section.innerHTML = `

        <div class="start-questionary">
            <a href="../../index.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg></a>
            <h5>Categoria ` + questionary[8] + ` - ` + questionary[11].length + ` questões</h5>
            <h1>` + questionary[0] + `</h1>
            <p>` + questionary[2] + `</p>
            <input type="text" id="userName" placeholder="Digite um nome de exibição">
            <p class="errorMessage">É necessário escolher um nome de usuário para prosseguir.</p>
            <button onclick="validationName()">Iniciar</button>
        </div>
        <div class="final-questionary">
            <div class="final-content">
                <div class="leaderboard">
                    <h3>Jogadores</h3>                 
                    <h4>Total de usuários: N jogadores</h4>
                </div>
                <div class="results-box">
                    <h3>Resultados</h3>
                    <p>Respostas desativadas.</p>
                    <h4>Pontuação final: N pontos</h4>
                </div>
                <div class="message-box">
                    <p>` + questionary[1] + `</p>
                </div>
            </div>
            <button onclick="window.location.href = '../../index.html'">Finalizar</button>
        </div>

    `

    var pageContainer = document.querySelector('body')

    pageContainer.appendChild(section)

    document.documentElement.style.setProperty("--pcolor", questionary[3])
    document.documentElement.style.setProperty("--scolor", questionary[4])
    document.documentElement.style.setProperty("--tcolor", questionary[5])
    document.documentElement.style.setProperty("--theme", questionary[6])
    document.documentElement.style.setProperty("--letter-color", questionary[7])
    document.documentElement.style.setProperty("--b-letter-color", questionary[12])
    document.documentElement.style.setProperty("--t-letter-color", questionary[13])

}




