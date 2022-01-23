

const sign = document.getElementsByClassName('container')
const log = document.getElementsByClassName('wrapper')
sign[0].style.display = "none"
const register = document.getElementById("reg-form");
register.addEventListener('submit', event => {
    event.preventDefault();
    regForm()
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
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        });
}