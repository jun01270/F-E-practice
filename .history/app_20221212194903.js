const title = document.querySelector(".first h1");

title.innerText = "하하하하";

title.style.color;

const colors = [
  "Yellow",
  "Green",
  "Gray",
  "Red",
  "Pink",
  "Blue",
  "Black",
  "Brown",
];

whatColors = colors[Math.floor(Math.random() * 7)];

function afterClick() {
  console.log("CLick!!!");
  console.log(colors[Math.floor(Math.random() * 7)]);
  if (title.style.color === "red") {
    title.style.color = colors[Math.floor(Math.random() * 7)];
  } else {
    title.style.color = colors[Math.floor(Math.random() * 7)];
  }
}

title.addEventListener("click", afterClick);

const button1 = document.querySelector(".first button");
console.log(button1);

button1.addEventListener("click", afterClick);
