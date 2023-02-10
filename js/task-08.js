const formEl = document.querySelector('.login-form');


formEl.addEventListener("submit", loginFormProcessor);

function loginFormProcessor(event) {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;
    

    if (email.value === "" || password.value === "") {
        alert("Please fill all fields");
        return;
    }
    const userProfile = {
        email: email.value,
        password: password.value
}
    console.log(userProfile);
    event.currentTarget.reset();
}