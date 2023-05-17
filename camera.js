
const webCamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const store = document.querySelector(".sillywaytostore");
const webcam = new Webcam(webCamElement,'user',canvasElement);
webcam.start();
var user_photo = "image";
console.log(user_photo);
async function Capture(){
    user_photo =  webcam.snap();
    console.log(user_photo); 
    store.innerHTML = user_photo;
    console.log("success");  
    localStorage.setItem('image', user_photo); 
}


