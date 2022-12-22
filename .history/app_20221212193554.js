const title = document.querySelector(".first h1");

// title.innerText = "하하하하";

let titleColor = title.style.color;
titleColor = "RED";

function afterClick() {
  console.log("CLick!!!");
  console.log(title);
  if (titleColor === "red") {
    titleColor = "Yellow";
  } else {
    titleColor = "red";
  }
}

title.addEventListener("click", afterClick);

const button1 = document.querySelector(".first button");
console.log(button1);

button1.addEventListener("click", afterClick);
