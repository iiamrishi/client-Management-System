document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const togglePassword = document.getElementById("togglePassword");
  const emailLabel = document.querySelector('label[for="emailInput"]');
  const passwordLabel = document.querySelector('label[for="passwordInput"]');
  let passwordVisible = false;

  // Toggle password visibility on click
  togglePassword?.addEventListener("click", function () {
    passwordVisible = !passwordVisible;

    const type = passwordVisible ? "text" : "password";
    passwordInput?.setAttribute("type", type);

    // Toggle between "visibility" and "visibility_off" icons
    togglePassword.textContent = passwordVisible
      ? "visibility_off"
      : "visibility";
  });

  // Function to handle input and label display
  function handleInputAndLabel(input, label) {
    label.style.display = input.value.length > 0 ? "none" : "block";
  }

  // Hide the labels when there is any input in the respective fields
  emailInput?.addEventListener("input", function () {
    handleInputAndLabel(emailInput, emailLabel);
  });

  passwordInput?.addEventListener("input", function () {
    handleInputAndLabel(passwordInput, passwordLabel);

    // Show the eye icon when typing a password
    togglePassword &&
      (togglePassword.style.display =
        passwordInput.value.length > 0 ? "block" : "none");
  });

  // Hide the eye icon initially
  togglePassword && (togglePassword.style.display = "none");
});
