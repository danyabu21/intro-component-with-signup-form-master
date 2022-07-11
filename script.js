const formElement = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const btnSubmit = document.querySelector(".btn-submit");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  {
    const regName = /^[a-z ,.'-]+$/i;
    if (firstNameValue === "") {
      errorValidation(firstName, "First Name cannot be empty");
    } else if (!regName.test(firstNameValue)) {
      errorValidation(
        firstName,
        "First Name cannot contains special character"
      );
    } else {
      sucessValidation(firstName);
    }
    if (lastNameValue === "") {
      errorValidation(lastName, "Last Name cannot be empty");
    } else if (!regName.test(lastNameValue)) {
      errorValidation(lastName, "Last Name cannot contains special character");
    } else {
      sucessValidation(lastName);
    }
    if (emailValue === "") {
      errorValidation(email, "Email cannot be empty");
    } else if (emailValue.includes("@") && emailValue.endsWith(".com")) {
      sucessValidation(email);
    } else {
      errorValidation(email, "example@email.com");
    }
    if (passwordValue === "") {
      errorValidation(password, "Password cannot be empty");
    } else if (passwordValue.length < 8) {
      errorValidation(password, "password must be at least 8 characters");
    } else {
      sucessValidation(password);
    }
  }
}

function errorValidation(input, message) {
  const formControl = input.parentElement;
  const msgError = formControl.querySelector(".msg-error");

  msgError.innerText = message;

  formControl.classList.add("error");
}

function sucessValidation(input) {
  const formControl = input.parentElement;

  formControl.classList.remove("error");
}
