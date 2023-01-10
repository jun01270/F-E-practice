const API_KEY = "fbf7375beaa21a73574692bdaef4a2e7";

function onGeoSuc(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("Your position is", lat, lon);
}
const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit={limit}&appid=${API_KEY}`;
function onGeoErr() {
  alert("위치를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoSuc, onGeoErr);
