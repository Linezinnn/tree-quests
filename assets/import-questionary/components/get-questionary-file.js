let fileInput = document.querySelector('#upload-file')
export let contentOutput = document.querySelector('#content')

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0]
    const reader = new FileReader

    reader.onload = (event) => {
        const content = event.target.result
        contentOutput.textContent = content
    }

    reader.readAsText(file)

})
