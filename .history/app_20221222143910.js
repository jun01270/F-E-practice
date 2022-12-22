const userNameBtn = document.querySelector("#userName-form submit");
const userName = document.querySelector("#userName-form text");
const loginForm = document.querySelector("#userName-form");

function clickUserName() {
  const userNameValue = userName.value;
  console.log(userNameValue);
}

userNameBtn.addEventListener("click", clickUserName);
