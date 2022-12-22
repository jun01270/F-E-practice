const title = document.querySelector(".first h1");

title.innerText = "하하하하하하하하하하하하";
console.log(title);

title.style.color = "blue";

function afterClick() {
  console.log("CLick!!!");
}

title.addEventListener("click");
