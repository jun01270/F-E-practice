const title = document.querySelector(".first h1");

title.innerText = "하하하하하하하하하하하하";
console.dir(title);

let titleColor = title.style.color;
titleColor = "Red";
console.log(titleColor);

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
