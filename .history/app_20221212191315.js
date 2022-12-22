const title = document.querySelector(".first h1");

title.innerText = "하하하하";

title.style.color;

function afterClick() {
  console.log("CLick!!!");
  console.log(title);
  if (title.style.color === "red") {
    title.style.color = "Yellow";
  } else {
    title.style.color = "red";
  }
}

title.addEventListener("click", afterClick);
