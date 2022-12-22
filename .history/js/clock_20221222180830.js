const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  let Hours = padStart(string(padStart(date.getHours(), "0")));
  let Minutes = padStart(string(padStart(date.getMinutes(), "0")));
  let Seconds = padStart(string(padStart(date.getSeconds(), "0")));
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  clock.innerText = `${Hours}:${Minutes}:${Seconds})`;
}

getClock();
setInterval(getClock, 1000);
