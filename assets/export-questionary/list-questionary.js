import { createQuestionaryLayout } from "./insert-on-list/create-questionary-layout.js";
import { listOfQuestionaries } from "./questionaries-controll.js";
import { withoutQuestionaries } from "./elements.js"

export function listAllQuetionaries(){

    if(!listOfQuestionaries.length){
        withoutQuestionaries.classList.remove("hide")

    }else{
        withoutQuestionaries.classList.add("hide")

        for(let i = 0; i < listOfQuestionaries.length; i++){
            createQuestionaryLayout(listOfQuestionaries[i], i)
        }
    }
}