const userNameBtn = document.querySelector("#userName-form submit");
const userName = document.querySelector("#userName-form text");
const loginForm = document.querySelector("#userName-form ");
const firstH1 = document.getElementById("result");

function loginResult(e) {
  e.preventDefault;
  userName.classList.add("hidden");
  console.log(userName.value);
}

loginForm.addEventListener("submit", loginResult);

console.log(firstH1.value);
