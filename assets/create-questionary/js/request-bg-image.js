export function requestBgImage() {
    return new Promise((resolve, reject) => {
        const fileInput = document.querySelector('#bg-image-question');
        const file = fileInput.files[0]
        
        if(file === undefined){
            resolve("./assets/svg/img2.png")
            return
        }
        
        const reader = new FileReader()

        reader.onload = function (e) {
            const imageData = e.target.result

            resolve(imageData)
        }

        reader.onerror = function (error) {
            reject(error);
        }

        reader.readAsDataURL(file);

    })
}

