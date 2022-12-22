const title = document.querySelector(".first h1");

const dayluck = document.querySelector("#usersLuck");
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

function afterClick() {
  console.log("CLick!!!");
  console.log(colors[Math.floor(Math.random() * 7)]);
  if (title.style.color === "red") {
    title.style.color = colors[Math.floor(Math.random() * 7)];
  } else {
    title.style.color = colors[Math.floor(Math.random() * 7)];
  }
}
function luckTest() {
  dayluck.innerHTML = "당신은 오늘" + luck[Math.floor(Math.random() * 3)];
}

title.addEventListener("click", afterClick);

const button1 = document.querySelector(".first button");
const lucky = document.querySelector(".usersLuck ");
console.log(button1);

button1.addEventListener("click", afterClick);
lucky.addEventListener("click", luckTest);
