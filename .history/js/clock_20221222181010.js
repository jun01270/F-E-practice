const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  let Hours = string(date.getHours()).padStart(2, "0");
  let Minutes = string(date.getMinutes()).padStart(2, "0");
  let Seconds = string(date.getSeconds()).padStart(2, "0");
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  clock.innerText = `${Hours}:${Minutes}:${Seconds})`;
}

getClock();
setInterval(getClock, 1000);
