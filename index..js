function validateFields() {
    
    toggleEmailErrors();
    toggleButtonDisable();


}

function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);

}

function toggleEmailErrors(){
    const email = document.getElementById('email').value;
    if(email){
        document.getElementById('email-require-error').style.display = "block";

    }else{
        document.getElementById('email-require-error').style.display = "none";

    }
    

}

function toggleButtonDisable(){
    const emailValid = isEmailValid();
    document.getElementById('recover-passeord-button').disabled = !emailValid;

    const password = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !isPasswordValid;

}

function isPasswordValid() {
    const password = document.getElementById(password).value;
    if (!password) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}