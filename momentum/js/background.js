const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
//style 추가  하는법  
bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);