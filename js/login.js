document.addEventListener("DOMContentLoaded", e => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    //switch to signup page
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    //switch to login page
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });
});