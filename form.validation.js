const form = document.getElementById('form')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('Confirm-password')
const requiredInput = document.getElementsByClassName('required-input')
const errorLog = document.getElementById('error')


form.addEventListener('submit', (e) => {
    for(let i = 0; i < requiredInput.length; i++){

        let messages = []
    
        if(requiredInput[i].value === ""){

            messages.push(`Please fill in all fields`)
            for(let i = 0; i < messages.length; i++){
                errorLog.innerText = messages[i]
            }

            e.preventDefault()
        }

    }

    if(password.value !== confirmPassword.value){
        errorLog.innerText = "Your passwords do not match!"
        e.preventDefault()
    }
    
})
