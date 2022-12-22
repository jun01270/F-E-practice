const userNameBtn = document.querySelector("#userName-form submit");
const userName = document.querySelector("#userName-form input");
const loginForm = document.querySelector("#userName-form");
const firstH1 = document.getElementById("result");
const SavedUserName = localStorage.getItem("username");

function loginResult(e) {
  e.preventDefault();
  loginForm.classList.add("hidden");
  const userName1 = userName.value;
  localStorage.setItem("username", userName1);
  paintUserName(userName);
}

loginForm.addEventListener("submit", loginResult);

function paintUserName(userName) {
  firstH1.innerText = `Hello ${userName}`;
  firstH1.classList.remove("hidden");
}

if (SavedUserName === null) {
  loginForm.classList.remove("hidden");
} else {
  paintUserName(userName);
}
