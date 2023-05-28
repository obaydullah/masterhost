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

// multistep form
const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active-form");
});

if (currentStep < 0) {
  currentStep = 0;
  showCurrentStep();
}

multiStepForm.addEventListener("click", (e) => {
  let incrementor;
  if (e.target.matches("[data-next]")) {
    incrementor = 1;
  } else if (e.target.matches("[data-previous]")) {
    incrementor = -1;
  }

  if (incrementor == null) return;

  currentStep += incrementor;
  showCurrentStep();
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active-form", index === currentStep);
  });
}
