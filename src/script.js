"use strict";

const namesField = document.querySelectorAll(".name");
const firstNameField = document.querySelector(".first-name");
const lastNameField = document.querySelector(".last-name");
const emailAddressField = document.querySelector(".email-address");
const passwordField = document.querySelector(".password");
const nameError = document.querySelectorAll(".name-content");
const emailError = document.querySelector(".email-content");
const passError = document.querySelector(".password-content");
const submitBtn = document.querySelector(".submit-btn");
const borders = document.querySelectorAll(".border");
const errorImg = document.querySelectorAll(".err-img");
const emailErrorImg = document.querySelector(".email-errorImg");
const passErrorImg = document.querySelector(".password-errorImg");
const emailErrorBorder = document.querySelector(".border-email");
const passErrorBorder = document.querySelector(".border-password");

// ======================================for the names
const errorName = function () {
  const nameType = ["First Name", "Last Name"];

  for (let i = 0; i < nameError.length; i++) {
    let error;

    // if the names field is blank,
    if (!namesField[i].value) {
      error = `${nameType[i]} cannot be blank`;
    } else if (
      // if the names doesn't start with a capital letter;
      namesField[i].value[0] !== namesField[i].value[0].toUpperCase()
    ) {
      error = `${nameType[i]} must start with an uppercase`;
    }

    //    when the submit button is clicked and there happens to be an error
    nameError[i].classList.remove("hidden");
    nameError[i].textContent = error;
    borders[i].classList.add("border-red");
    errorImg[i].classList.remove("hidden");

    // what happens when you fill the right input after you recieve an input
    if (
      namesField[i].value &&
      namesField[i].value[0] === namesField[i].value[0].toUpperCase()
    ) {
      nameError[i].classList.add("hidden");
      borders[i].classList.remove("border-red");
      errorImg[i].classList.add("hidden");
    }
  }
};

// ===============================for email
const errorEmail = function () {
  let error;

  //   if the email section is blank
  if (!emailAddressField.value) error = "Email Address cannot be blank";

  emailError.classList.remove("hidden");
  emailError.textContent = error;
  emailErrorBorder.classList.add("border-red");
  emailErrorImg.classList.remove("hidden");

  //   if the email section is not blank
  if (emailAddressField.value) {
    let err;
    // if @ and . is not present in the input it can't be an email
    if (
      !emailAddressField.value.includes("@") &&
      !emailAddressField.value.includes(".")
    )
      err = "Looks like this is not an email!";
    else {
      // if @ and . is present in the input then i want no errorss
      emailError.classList.add("hidden");
      emailErrorBorder.classList.remove("border-red");
      emailErrorImg.classList.add("hidden");
    }

    emailError.textContent = err;
  }
};

//============================== for the password
const errorPassword = function () {
  let error;
  if (!passwordField.value) {
    error = `Password cannot be blank`;
  } else if (passwordField.value.length < 8) {
    error = "Password must be 8 or greater";
  } else if (
    passwordField.value.length > 8 &&
    passwordField.value[0] !== passwordField.value[0].toUpperCase()
  ) {
    error = "Password must start with a upper case";
  }

  passError.classList.remove("hidden");
  passErrorBorder.classList.add("border-red");
  passErrorImg.classList.remove("hidden");

  if (
    passwordField.value &&
    passwordField.value.length > 8 &&
    passwordField.value[0] === passwordField.value[0].toUpperCase()
  ) {
    passError.classList.add("hidden");
    passErrorBorder.classList.remove("border-red");
    passErrorImg.classList.add("hidden");
  }

  passError.textContent = error;
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  errorName();
  errorEmail();
  errorPassword();
});
