document.addEventListener("click", function (e) {
  if (e.target.matches("[data-toggle-passicon]")) {
    var passField = e.target.closest(".pass-field");
    if (passField === null) {
      console.error("Parent container element not found");
      return;
    }

    var passwordInput = passField.querySelector("#pass-input");
    var visibilityOnIcon = passField.querySelector(".toggle-icon.eye-open");
    var visibilityOffIcon = passField.querySelector(".toggle-icon.eye-close");

    if (!passwordInput || !visibilityOnIcon || !visibilityOffIcon) {
      console.error("Required elements not found");
      return;
    }

    passField.classList.toggle("active");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }
});
