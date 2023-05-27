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

//working with custom select dropdown
let selectOption = document.querySelectorAll(".select__option");
let selectOptions = document.querySelector(".select__options");
console.log(selectOptions.scrollHeight);
let selectCountry = document.querySelector("#country-select");
let selectContainer = document.querySelector(".select__container");

function showSelectElem() {
  selectContainer.classList.toggle("select__active");
  selectOptions.classList.toggle("active__options");
}

selectOption.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.textContent !== "Select Country:") {
      selectOption.forEach((opt) => {
        if (opt === option) {
          opt.style.background = "#4b5563";
          opt.style.color = "#fff";
        } else {
          opt.style.background = "";
          opt.style.color = "#4b5563";
        }
      });

      selectCountry.value = option.textContent;
    }
  });
});

document.addEventListener("click", (event) => {
  const isOutsideContainer = !selectContainer.contains(event.target);
  const isOutsideOptions = !selectOptions.contains(event.target);

  if (isOutsideContainer && isOutsideOptions) {
    selectOptions.classList.remove("active__options");
    selectContainer.classList.remove("select__active");
  }
});
