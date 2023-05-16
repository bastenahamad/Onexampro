

 var navbut = [];

for(var i=0; i<10; i++) {
    navbut[i] = document.createElement("BUTTON");
    navbut[i].innerHTML = i+1;
    document.querySelector(".questionlist").appendChild(navbut[i]);
}

export {navbut};