document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const sidebar = document.getElementById("sidebar");

  if (menuIcon && sidebar) {
    menuIcon.addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
    });
  }
});
