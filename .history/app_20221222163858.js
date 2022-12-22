const userNameBtn = document.querySelector("#userName-form submit");
const userName = document.querySelector("#userName-form input");
const loginForm = document.querySelector("#userName-form ");
const firstH1 = document.getElementById("result");

function loginResult(e) {
  e.preventDefault();
  loginForm.classList.add("hidden");
  const userName1 = userName.value;
  localStorage.setItem("username", userName1);
  console.log(userName1);
  firstH1.classList.remove("hidden");
  firstH1.innerText = `Hello ${userName1}`;
}

loginForm.addEventListener("submit", loginResult);
