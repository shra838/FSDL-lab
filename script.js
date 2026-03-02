// ============================================================
//  Experiment 3 — Form Validation using JavaScript
//  File: script.js
// ============================================================

// Wait for the full page to load before running any JS
document.addEventListener("DOMContentLoaded", function () {

  // Get the form element by its ID
  var form = document.getElementById("registrationForm");

  // When the Submit button is clicked, this function runs
  form.addEventListener("submit", function (event) {

    // Stop the browser from refreshing/redirecting the page
    event.preventDefault();

    // Run each validation function and store the result (true/false)
    var isNameValid     = validateName();
    var isEmailValid    = validateEmail();
    var isPasswordValid = validatePassword();
    var isMobileValid   = validateMobile();

    // Only show success if ALL four validations passed
    if (isNameValid && isEmailValid && isPasswordValid && isMobileValid) {

      document.getElementById("success-banner").style.display = "block";

      // Auto-reset the form after 3 seconds
      setTimeout(function () {
        form.reset();
        document.getElementById("success-banner").style.display = "none";
        clearAllBorders();
      }, 3000);
    }
  });

});


// -----------------------------------------------------------
// VALIDATE NAME — must not be empty
// -----------------------------------------------------------
function validateName() {
  var input = document.getElementById("name");
  var error = document.getElementById("nameError");
  var value = input.value.trim(); // trim() removes leading/trailing spaces

  if (value === "") {
    showError(input, error);
    return false;
  } else {
    showSuccess(input, error);
    return true;
  }
}


// -----------------------------------------------------------
// VALIDATE EMAIL — must match proper email format
// -----------------------------------------------------------
function validateEmail() {
  var input = document.getElementById("email");
  var error = document.getElementById("emailError");
  var value = input.value.trim();

  // Regex pattern: something @ something . something
  // ^ means start, $ means end, so the whole string must match
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value === "" || !pattern.test(value)) {
    showError(input, error);
    return false;
  } else {
    showSuccess(input, error);
    return true;
  }
}


// -----------------------------------------------------------
// VALIDATE PASSWORD — must be at least 6 characters
// -----------------------------------------------------------
function validatePassword() {
  var input = document.getElementById("password");
  var error = document.getElementById("passwordError");
  var value = input.value; // do NOT trim passwords

  if (value.length < 6) {
    showError(input, error);
    return false;
  } else {
    showSuccess(input, error);
    return true;
  }
}


// -----------------------------------------------------------
// VALIDATE MOBILE — must be exactly 10 digits
// -----------------------------------------------------------
function validateMobile() {
  var input = document.getElementById("mobile");
  var error = document.getElementById("mobileError");
  var value = input.value.trim();

  // Pattern: only digits (0-9), exactly 10 of them
  var pattern = /^[0-9]{10}$/;

  if (!pattern.test(value)) {
    showError(input, error);
    return false;
  } else {
    showSuccess(input, error);
    return true;
  }
}


// -----------------------------------------------------------
// HELPER: showError — red border + show error message
// -----------------------------------------------------------
function showError(inputEl, errorEl) {
  inputEl.classList.remove("success-border");
  inputEl.classList.add("error-border");
  errorEl.style.display = "block";
}


// -----------------------------------------------------------
// HELPER: showSuccess — green border + hide error message
// -----------------------------------------------------------
function showSuccess(inputEl, errorEl) {
  inputEl.classList.remove("error-border");
  inputEl.classList.add("success-border");
  errorEl.style.display = "none";
}


// -----------------------------------------------------------
// HELPER: clearAllBorders — removes all color borders on reset
// -----------------------------------------------------------
function clearAllBorders() {
  var inputs = document.querySelectorAll("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("error-border", "success-border");
  }
}
