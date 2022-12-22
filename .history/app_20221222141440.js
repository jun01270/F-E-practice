const userNameBtn = document.querySelector("#userName-form submit");
const userName = document.querySelector("#userName-form text");

function clickUserName() {
  const userNameValue = userName.value;
  console.log(userName);
}

userNameBtn.addEventListener("click", clickUserName);
