

const sign = document.getElementsByClassName('container')
const log = document.getElementsByClassName('wrapper')
sign[0].style.display = "none"
const register = document.getElementById("reg-form");
const login = document.getElementById("login-form");
register.addEventListener('submit', event => {
    event.preventDefault();
    regForm()
});
login.addEventListener('submit', event => {
    event.preventDefault();
    loginForm()
});


function signupage() {
    log[0].style.display = "none"
    sign[0].style.display = "block"
}

function loginpage() {
    log[0].style.display = "block"
    sign[0].style.display = "none"
}

function regForm() {
    const name = document.getElementById('reg-name').value;
    const password = document.getElementById('reg-password').value;
    const email = document.getElementById('reg-email').value;
    const phone = document.getElementById('reg-phone').value;
    const data = { name, email, password, phone }
    axios
        .post("/sign_up", data)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            document.querySelector('.err-message-reg').innerHTML = ""
            window.location.href = "./success.html";

        })
        .catch((error) => {
            console.log(error);
            const errorData = error.response;
            if (errorData.status === 409)
                document.querySelector('.err-message-reg').innerHTML = "User already exist"
            else
                document.querySelector('.err-message-reg').innerHTML = ""

        });
}

function loginForm() {
    const password = document.getElementById('log-password').value;
    const email = document.getElementById('log-email').value;
    const data = { email, password }
    axios
        .post("/sign_in", data)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            document.querySelector('.err-message-login').innerHTML = ""
            window.location.href = "./success.html";

        })
        .catch((error) => {
            console.log(error);
            const errorData = error.response;
            if (errorData.status === 409)
                document.querySelector('.err-message-login').innerHTML = "please enter valid email and password"
            else
                document.querySelector('.err-message-login').innerHTML = ""

        });
}