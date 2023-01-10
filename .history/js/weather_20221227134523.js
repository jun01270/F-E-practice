function onGeoSuc(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(position);
}
function onGeoErr() {
  alert("위치를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoSuc, onGeoErr);
