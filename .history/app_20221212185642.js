const title = document.querySelector(".first h1");

title.innerText = "하하하하하하하하하하하하";
console.log(title);

titleColor = title.style.color;

function afterClick() {
  console.log("CLick!!!");
  if (titleColor === "red") {
    titleColor = "Yellow";
  } else {
    titleColor = "red";
  }
}

title.addEventListener("click", afterClick);
