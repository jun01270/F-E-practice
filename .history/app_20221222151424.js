const userNameBtn = document.querySelector("#userName-form submit");
const userName = document.querySelector("#userName-form text");
const loginForm = document.querySelector("#userName-form ");
const form = document.querySelector("a");

function onLoginSubmit() {
  const userNameValue = userName.value;
  console.log(userNameValue);
}

function clicked(e) {
  e.preventDefault();
  console.log(e);
  console.log("바보");
}

loginForm.addEventListener("submit", onLoginSubmit);
form.addEventListener("click", clicked);
