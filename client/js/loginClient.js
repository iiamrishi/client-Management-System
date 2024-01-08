// Attach the function directly to the window object
window.loadClientLoginPage = function () {
  // Get the content container
  const indexContent = document.getElementById("content-container");

  // Toggle visibility
  indexContent.style.display = "none";

  // Load the CSS
  loadCSS("./css/loginClient.css");
};

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const togglePassword = document.getElementById("togglePassword");
  const emailLabel = document.querySelector('label[for="emailInput"]');
  const passwordLabel = document.querySelector('label[for="passwordInput"]');

  // Check if elements exist before adding event listeners
  if (
    emailInput &&
    passwordInput &&
    togglePassword &&
    emailLabel &&
    passwordLabel
  ) {
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
  }
});

function loadCSS(href) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;
  document.getElementsByTagName("head")[0].appendChild(link);
}
