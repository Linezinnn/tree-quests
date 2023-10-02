export function downloadPrompt(prompt, questionaryId){

    const linkHidden = document.createElement("a")

    linkHidden.href = "data:text/plain;charset=utf-8," + encodeURIComponent(prompt)
    linkHidden.download = `questionary-prompt${questionaryId}`

    linkHidden.click()

    linkHidden.remove()
}