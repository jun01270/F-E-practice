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
  userName.classList.add("HI");
}

loginForm.addEventListener("submit", onLoginSubmit);
form.addEventListener("click", clicked);
