
const webCamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');

const webcam = new Webcam(webCamElement,'user',canvasElement);
webcam.start();
const user_photo = "image";
console.log(user_photo);
async function Capture(){
    user_photo =  webcam.snap();
    console.log(user_photo);
    image.innerHTML = "<img src =" + user_photo + ">"
    webcam.stop();
}



