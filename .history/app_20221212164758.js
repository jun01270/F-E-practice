const age = parseInt(prompt("How old are you"));

// console.log(typeof age, typeof parseInt(age));

if (isNaN(age)) {
  alert("숫자 입력해라");
} else if (age < 18) {
  console.log("tooooooooooo young");
} else {
  console.log("그만 마시새우");
}
