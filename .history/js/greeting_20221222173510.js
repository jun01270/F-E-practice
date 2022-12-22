const userNameBtn = document.querySelector("#userName-form submit");
const userName = document.querySelector("#userName-form input");
const loginForm = document.querySelector("#userName-form");
const firstH1 = document.getElementById("result");
const SavedUserName = localStorage.getItem("username");
const HIDDEN_CLASSNAME = "hidden";
const toStart = document.querySelector(".boom");

function loginResult(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName1 = userName.value;
  localStorage.setItem("username", userName1);
  paintUserName();
}

function paintUserName() {
  const userName1 = SavedUserName;
  firstH1.innerText = `Hello ${userName1}`;
  firstH1.classList.remove(HIDDEN_CLASSNAME);
}

if (SavedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginResult);
} else {
  paintUserName();
}

function deleteUserName() {
  localStorage.removeItem("username");
  location.reload;
}

toStart.addEventListener("click", deleteUserName);
console.log(toStart.className);
