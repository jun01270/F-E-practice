const userNameBtn = document.querySelector("#userName-form submit");
const userName = document.querySelector("#userName-form text");
const loginForm = document.querySelector("#userName-form ");

function onLoginSubmit() {
  const userNameValue = userName.value;
  console.log(userNameValue);
}

function clicked(e) {
  e.preventDefault();
  console.log(e);
}

loginForm.addEventListener("submit", onLoginSubmit);
