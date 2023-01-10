const all = document.querySelector("div#all");
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  let Hours = String(date.getHours()).padStart(2, "0");
  let Minutes = String(date.getMinutes()).padStart(2, "0");
  let Seconds = String(date.getSeconds()).padStart(2, "0");
  // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  console.log(clock);
  clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
  console.log(all);
}

getClock();
setInterval(getClock, 1000);
