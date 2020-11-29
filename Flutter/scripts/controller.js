function validEmail(email) {
    let error = 0;
    var length = email.length;
    if (length < 5 || !(email.includes('@') && email.includes('.'))) {
        error++;
        document.getElementById('errors').innerHTML = "<em style='color:red'>Please enter valid email</em>";
    }
    return error;
}

function validPass(pass) {
    let error = 0;
    let length = pass.length;
    let digits = /0-9/;
    let sLetters = /a-z/;
    let BLetters = /A-Z/;
    if (pass.length < 6) {
        document.getElementById('errors').innerHTML += "<em style='color:red'>Password length should be at leats 6 symbols</em>"
    }
    if (!pass.match(/[0-9]/g)) {
        document.getElementById('errors').innerHTML += "<em style='color:red'>Password should contain at least one digit</em>"
    }
    if (!pass.match(/[A-Z]/g)) {
        document.getElementById('errors').innerHTML += "<em style='color:red'>Password should contain at least one capital letter</em>"
    }
    if (!pass.match(/[!@#$%^&]/g)) {
        document.getElementById('errors').innerHTML += "<em style='color:red'>Password should contain at least one special character</em>"
    }
    return error;
}

function validateLogin(event) {
    event.preventDefault();
    let error = 0;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    error += validEmail(email);
    error += validPass(pass);
    if (error > 0) {
        return false;
    } else {
        window.auth.login(email, pass, (isSuccessfull, errorCode, errorMessage) => {
            if (!isSuccessfull) {
                alert(errorMessage);
            } else {
                window.location.href = window.location.origin + window.location.pathname + "/../posts.html";
            }
        });
        return true;

    }
}

function validateRegister(event) {
    event.preventDefault();
    let error = 0;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    error += validEmail(email);
    error += validPass(pass);
    if (error > 0) {
        return false;
    } else {
        window.auth.login(email, pass, (isSuccessfull, errorCode, errorMessage) => {
            if (!isSuccessfull) {
                alert(errorMessage);
            } else {
                window.location.href = window.location.origin + window.location.pathname + "/../posts.html";
            }
        });
        return true;

    }
}

//document.getElementById("login-form").addEventListener("submit", validateLogin);
//document.getElementById("register-form").addEventListener("submit", validateRegister);

//window.auth.register("document.getElementById("id").value, pass, username, callback")