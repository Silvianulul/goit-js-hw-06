const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formElements = loginForm.elements;

  const formData = {};

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    if (element.tagName === "INPUT") {
      if (element.value.trim() === "") {
        alert("All fields must be filled out");
        return;
      }

      formData[element.name] = element.value;
    }
  }

  console.log(formData);

  loginForm.reset();
});
