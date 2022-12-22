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

function asd() {
  console.log(whatColors);
}

function afterClick() {
  console.log("CLick!!!");
  console.log(title);
  if (title.style.color === "red") {
    title.style.color = whatColors;
  }
}

title.addEventListener("click", afterClick);

const button1 = document.querySelector(".first button");
console.log(button1);

button1.addEventListener("click", asd);
