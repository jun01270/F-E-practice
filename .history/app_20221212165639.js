const age = parseInt(prompt("How old are you"));

// console.log(typeof age, typeof parseInt(age));

if (isNaN(age)) {
  alert("숫자 입력해라");
} else if (age < 18) {
  console.log("tooooooooooo young");
} else if (age >= 18 && age <= 50) {
  console.log("음주 가능");
} else if (age >= 51 && age >= 80) {
  console.log("그만 마시새우");
} else if (age < 0) {
  console.log("양의 정수를 입력하새우");
}
