export function makePrompt(questionary){

    try {
        
        let questionaryObject = questionary[11];
        let allQuestions = [];
    
        for (let key in questionaryObject) {
            if (questionaryObject.hasOwnProperty(key)) {
                allQuestions.push(questionaryObject[key]);
            }
        }
    
        console.log(questionary[14])
    
        let allQuestionsTrated = allQuestions.map(question => [
            question.questionName || question[0],
            question.typeQuestion || question[1],
            question.points || question[2],
            question.correctAnswer || question[3],
            question.answer1 || question[4],
            question.answer2 || question[5],
            question.answer3 || question[6],
            question.answer4 || question[7],
            question.answer5 || question[8]
          ])
    
        const prompt = `
        {
            "name": "${questionary[0]}", 
            "finalMessage": "${questionary[1]}",
            "description": "${questionary[2]}",
                "primaryColor": "${questionary[3]}",
                "secundaryColor": "${questionary[4]}",
                "ternaryColor": "${questionary[5]}",
                "theme": "${questionary[6]}",
                "letter": "${questionary[7]}",
                "category": "${questionary[8]}",
                "time": "${questionary[9]}",    
                "view": "${questionary[10]}",
                
                "allQuestions": ${JSON.stringify(allQuestionsTrated)},
                
                "buttonLetterColor": "${questionary[12]}",
                "titleLetterColor": "${questionary[13]}",
                "ranking": ${JSON.stringify(questionary[14])},
                "bgImage": "${questionary[15]}"
            }
        `
        return prompt

    } catch (error) {
        
        alert("Um erro fatal ocorreu: " + error)
        throw new Error("Falha na extração de dados para a exportação")

    }


}
