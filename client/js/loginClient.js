document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const togglePassword = document.getElementById("togglePassword");

  // Toggle password visibility on click
  togglePassword.addEventListener("click", function () {
    // Toggle logic to show/hide password
  });

  // Function to handle input events
  function handleInputEvent(inputElement) {
    const icon = inputElement.nextElementSibling;

    // Show or hide the eye icon based on input value
    icon.style.display = inputElement.value.length > 0 ? "block" : "none";
  }

  // Add input event listeners
  emailInput.addEventListener("input", function () {
    handleInputEvent(emailInput);
  });

  passwordInput.addEventListener("input", function () {
    handleInputEvent(passwordInput);
  });

  // Hide the eye icon initially
  togglePassword.style.display = "none";
});
