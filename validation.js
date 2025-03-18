function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function isEmailValid() {
    const email = document.getElementById('email').value;
    return email && validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById('password').value;
    return password.length > 0;
}

function toggleEmailErrors() {
    const email = document.getElementById('email').value;
    document.getElementById('email-required-error').style.display = email ? "none" : "block";
    document.getElementById('email-invalid-error').style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = document.getElementById('password').value;
    document.getElementById('password-required-error').style.display = password ? "none" : "block";
}

function toggleButtonDisable() {
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !passwordValid;
}

function onChangeEmail() {
    toggleButtonDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonDisable();
    togglePasswordErrors();
}
