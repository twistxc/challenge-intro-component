const form = document.querySelector('#signup-form');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#emailAddress');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateForm();
});

function validateForm() {
    if (firstNameInput.value.trim() == '') {
        setError(firstNameInput);
    } else removeError(firstNameInput);

    if (lastNameInput.value.trim() == '') {
        setError(lastNameInput);
    } else removeError(lastNameInput);

    if (isEmailValid(emailInput.value)) {
        removeError(emailInput);
    } else setError(emailInput);

    if (passwordInput.value.trim() == '') {
        setError(passwordInput);
    } else removeError(passwordInput);
};

function setError(element) {
    let parent = element.parentElement;
    parent.classList.add('error');
};

function removeError(element) {
    let parent = element.parentElement;
    parent.classList.remove('error');
};

function isEmailValid(email) {
    let reg = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;
    return reg.test(email);
}