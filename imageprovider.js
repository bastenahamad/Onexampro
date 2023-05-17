var image = "photo";
const location = document.querySelector(".sillywaytostore");
const image_area = document.querySelector(".image");

export default function giveimage(){
    image = location.innerHTML;
    console.log(image);
    console.log("ret");
    setTimeout(image_area.innerHTML = image, 1000);
}

export {image, displayImage};