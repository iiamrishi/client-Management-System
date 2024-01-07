document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const togglePassword = document.getElementById("togglePassword");
  const emailLabel = document.querySelector('label[for="emailInput"]');
  const passwordLabel = document.querySelector('label[for="passwordInput"]');
  let passwordVisible = false;

  // Toggle password visibility on click
  togglePassword.addEventListener("click", function () {
    passwordVisible = !passwordVisible;

    const type = passwordVisible ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Toggle between "visibility" and "visibility_off" icons
    togglePassword.textContent = passwordVisible
      ? "visibility_off"
      : "visibility";
  });

  // Hide the labels when there is any input in the respective fields
  emailInput.addEventListener("input", function () {
    emailLabel.style.display = emailInput.value.length > 0 ? "none" : "block";
  });

  passwordInput.addEventListener("input", function () {
    passwordLabel.style.display =
      passwordInput.value.length > 0 ? "none" : "block";
  });

  // Hide the eye icon initially
  togglePassword.style.display = "none";

  // Show the eye icon when typing a password
  passwordInput.addEventListener("input", function () {
    togglePassword.style.display =
      passwordInput.value.length > 0 ? "block" : "none";
  });
});
