function onGeoSuc(position) {
  console.log(position);
}
function onGeoErr() {}
navigator.geolocation.getCurrentPosition(onGeoSuc, onGeoErr);
