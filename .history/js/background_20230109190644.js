const images = ["moon.jpg", "street.jpg", "orora.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const content = document.getElementById("wrapper");
bgImage.id = "background";

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// bgImage.appendChild(content);

console.log(content);
