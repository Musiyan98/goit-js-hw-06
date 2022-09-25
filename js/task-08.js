const formEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector("input[type='email']");
const inputPasswordEl = document.querySelector("input[type='password']");
const btnSubmitEl = document.querySelector("button[type='submit']");

formEl.addEventListener("submit", onProcessingForm);

function onProcessingForm(e) {
  e.preventDefault();
  if (inputEmailEl.value == 0 || inputPasswordEl.value == 0) {
    return alert(
      "Упс! здаєтсья заповнені не всі поля :-( переконайтеся що все заповнили, перед тим як продовжити"
    );
  }

  saveRegisterData(e);
  e.currentTarget.reset();
}

function saveRegisterData(form) {
  const formElemets = form.currentTarget.elements;
  const email = formElemets.email;
  const password = formElemets.password;
  const formData = {
    email: `${email.value}`,
    password: `${password.value}`,
  };
  console.log(formData);
}
