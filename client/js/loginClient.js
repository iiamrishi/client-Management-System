window.loadClientLoginPage = function () {
  // Check if the client page is already loaded
  if (isClientPageLoaded) {
    console.log("Client page is already loaded.");
    return;
  }

  // Set the flag to true before making the fetch request
  isClientPageLoaded = true;

  // Get the content container
  const indexContent = document.getElementById("content-container");

  // Check if indexContent is defined
  if (!indexContent) {
    console.error("Error: Element with ID 'content-container' not found.");
    return;
  }

  // Load the client login page content using fetch
  fetch("/client/loginClient.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch loginClient.html (${response.status} ${response.statusText})`
        );
      }
      return response.text();
    })
    .then((data) => {
      // Set the inner HTML of content-container to the fetched content
      indexContent.innerHTML = data;

      // Rest of your code for handling visibility
      let passwordVisible = false;
      const togglePassword = document.getElementById("togglePassword");
      const passwordInput = document.getElementById("passwordInput");

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

      // Rest of your code...
    })
    .catch((error) => {
      console.error("Error fetching loginClient.html:", error);
    });
};
