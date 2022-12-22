const title = document.querySelector(".first h1");
const button1 = document.querySelector(".first button");
const button2 = document.getElementsByClassName("lucky");
const lucktext = document.querySelector("#usersluck h4");
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

const luck = [
  "운이 좋은 날입니다",
  "운이 안 좋은 날입니다",
  "당장 복권을 사세요",
  "차 조심하세요",
];

whatColors = colors[Math.floor(Math.random() * 7)];
dayluck = luck[Math.floor(Math.random() * 3)];

function afterClick() {
  console.log("CLick!!!");
  console.log(colors[Math.floor(Math.random() * 7)]);
  if (title.style.color === "red") {
    title.style.color = colors[Math.floor(Math.random() * 7)];
  } else {
    title.style.color = colors[Math.floor(Math.random() * 7)];
  }
}

function asd() {
  lucktext.innerHTML = "당신은 오늘" + dayluck;
}

title.addEventListener("click", afterClick);

console.log("버튼 1 : " + button1);
console.log("버튼 2: " + button2);
console.log(lucktext);
console.log(title);

button1.addEventListener("click", afterClick);
button2.addEventListener("click", asd);
