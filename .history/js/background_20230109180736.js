const images = ["flower.jpg", "street.jpg", "tree.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
console.log(bgImage.id + 1);

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
