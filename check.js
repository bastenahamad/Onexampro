var but = document.querySelector(".Stest");
var rad_but = document.querySelector(".btn");
function dothis(){
    console.log("here");
    if(!rad_but.checked) {
        window.alert("Check box not ticked");
    }
    else{
        window.open("./backend/questionpage.html","_self");
    }
}

