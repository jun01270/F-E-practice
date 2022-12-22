const userNameBtn = document.querySelector("#userName-form submit");
const userName = document.querySelector("#userName-form input");
const loginForm = document.querySelector("#userName-form ");
const firstH1 = document.getElementById("result");

function loginResult(e) {
  e.preventDefault();
  loginForm.classList.add("hidden");
  const userName = userName.value;
  console.log(userName);
  firstH1.classList.remove("hidden");
  firstH1.innerText = `Hello ${userName}`;
}

loginForm.addEventListener("submit", loginResult);

console.log(firstH1.value);
