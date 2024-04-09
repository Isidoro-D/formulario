const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const passwordConfirmation = document.querySelector("#password-confirmation")

//adicionando um evento ao formulário do tipo submit
// lembre-se que como o evento é do tipo submit, iremos receber um evento (event) do próprio submit

form.addEventListener('submit', (event) => {
    //prevenindo o evento padrão que seria enviar o formulário para algum lugar
    event.preventDefault();

    checkInputUsername()
    checkInputEmail()
    checkInputPassword()
    checkInputPasswordConfirmation()
    passwordValidation()
    
    //alert("cadastrado com sucesso")
    checkForm()

})
//blur = representa a perda de foco do campo específico
email.addEventListener('blur', ()=>{
    checkInputEmail();
})
username.addEventListener('blur', ()=>{
    checkInputUsername();
})
password.addEventListener('blur', ()=>{
    checkInputPassword();
})
passwordConfirmation.addEventListener('blur', ()=>{
    checkInputPasswordConfirmation();
})

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Preencha um nome de usuário!")
    } else {
        const formItem = username.parentElement
        formItem.classList = 'form-content'
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Preencha um email válido!")
    } else {
        const formItem = email.parentElement
        formItem.classList = 'form-content'
    }
}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "Preencha com uma senha!")
    } else if (passwordValue.length < 8) {
        errorInput(password, "A senha deve conter no mínimo 8 caracteres!")
    } else {
        const formItem = password.parentElement
        formItem.classList = 'form-content'
    }
}

function checkInputPasswordConfirmation() {
    const passwordConfirmationValue = passwordConfirmation.value;

    if (passwordConfirmationValue === "") {
        errorInput(passwordConfirmation, "Preencha a confirmação da senha!")
    } else if (passwordConfirmationValue.length < 8) {
        errorInput(passwordConfirmation, "A senha deve conter no mínimo 8 caracteres!")
    } else {
        const formItem = passwordConfirmation.parentElement
        formItem.classList = 'form-content'     
    }
}

function passwordValidation() {
    const passwordConfirmationValue = passwordConfirmation.value;
    const passwordValue = password.value;

    if (passwordConfirmationValue != passwordValue) {
        errorInput(passwordConfirmation, "As senhas não conferem.")
    }else {
        const formItem = passwordConfirmation.parentElement
        formItem.classList = 'form-content'     
    }

}

function errorInput(input, message) {
    //parentElement = seleciona o pai direto de um elemento
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("span")

    //innerText = vai até o texto do elemento e altera para o conteúdo especicado
    textMessage.innerText = message;
    formItem.className = "form-content error"

}