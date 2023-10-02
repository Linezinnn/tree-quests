
document.addEventListener('DOMContentLoaded', function() {


        function removeAnswer() {

                var counterQuestions = localStorage.getItem('counterQuestions');
                counterQuestions = parseInt(counterQuestions);

                if(counterQuestions >= 2){
                        var questionBox = document.querySelector('#answerQuestion' + counterQuestions);
        
                        counterQuestions = counterQuestions - 1;
                        localStorage.setItem('counterQuestions', counterQuestions);
                        
                        if (questionBox) { 
                                questionBox.style.opacity = '0'
                                setTimeout(() => {
                                        
                                        questionBox.remove();
                                }, 350)
                                
                        }   
                }

        }

var confirmRemove = document.createElement("div")

        function openModal(){

                var counterQuestions = localStorage.getItem('counterQuestions');
                counterQuestions = parseInt(counterQuestions);

                var questionBox = document.querySelectorAll('#answerQuestion' + counterQuestions + ' > div:not(.remove-box), #answerQuestion' + counterQuestions + ' > *:not(.remove-box)')
                var allQuestionsBoxes = document.querySelectorAll('.answer-values-content > div:not(.remove-box), .answer-values-content > *:not(.remove-box)')

                allQuestionsBoxes.forEach(element => {
                        element.style.opacity = '1'
                        element.style.pointerEvents = 'all'
                })

                console.log(allQuestionsBoxes)

                questionBox.forEach(element => {
                        element.style.opacity = '0'
                        element.style.pointerEvents = 'none'
                })

                confirmRemove.className = 'remove-box'
                confirmRemove.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                        <p>Você confirma que deseja remover esta questão?</p>
                        <div>
                                <button onclick="window.removeAnswer()">Confirmar</button>
                                <button onclick="window.closeModal()">Cancelar</button>
                        </div>
                `

                var questionBox = document.querySelector('#answerQuestion' + counterQuestions);

                questionBox.appendChild(confirmRemove)

        }
        function closeModal(){
                
                var allQuestionsBoxes = document.querySelectorAll('.answer-values-content > div:not(.remove-box), .answer-values-content > *:not(.remove-box)')

                allQuestionsBoxes.forEach(element => {
                        element.style.opacity = '1'
                        element.style.pointerEvents = 'all'
                })
                

                confirmRemove.remove()
        }
      
        window.removeAnswer = removeAnswer;
        window.openModal = openModal;
        window.closeModal = closeModal;
      });