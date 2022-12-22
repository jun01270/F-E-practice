const userNameBtn = document.querySelector("#userName-form submit");
const userName = document.querySelector("#userName-form text");
const loginForm = document.querySelector("#userName-form ");
const form = document.querySelector("a");
const firstH1 = document.getElementById("result");

function onLoginSubmit() {
  const userNameValue = userName.value;
  console.log(userNameValue);
}

function loginResult(e) {
  e.preventDefault;
  userName.classList.add("hidden");
  console.log(userName.value);
}

function clicked(e) {
  e.preventDefault();
  console.log(e);
}

// loginForm.addEventListener("submit", onLoginSubmit);
loginForm.addEventListener("submit", loginResult);
form.addEventListener("click", clicked);

console.log(firstH1.value);
