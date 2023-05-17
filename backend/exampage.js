import compare from "./results.js";
import { navbut } from "./info_bar.js";


var ques_no = 0;
var answers = [];
var options = [];
var img = document.querySelector(".image")
options.push(document.querySelector(".op1"));
options.push(document.querySelector(".op2"));
options.push(document.querySelector(".op3"));
options.push(document.querySelector(".op4"));
options.push(document.querySelector(".op5"));
options.push(document.querySelector("null"));
var unattempted = "red";
var attempted = "green";

async function print_question(){
    img.innerHTML = "<img src = " + localStorage.getItem("image") + " width = '100%' height = '100%'>";
    navbut[ques_no].style.backgroundColor = unattempted;
    if(ques_no==0) {
        document.querySelector(".nextquestion").style.display = "inline-block";
        document.querySelector(".prevquestion").style.display = "none";
        document.querySelector(".submit").style.display = "none";

    }
    else if(ques_no == 9){
        document.querySelector(".prevquestion").style.display = "inline-block"; 
        document.querySelector(".nextquestion").style.display = "none";
        document.querySelector(".submit").style.display = "inline-block";
    }
    else{
        document.querySelector(".submit").style.display = "none";
        document.querySelector(".nextquestion").style.display = "inline-block";
        document.querySelector(".prevquestion").style.display = "inline-block"; 
    }
    reset_color(5);
    let question_data = await fetch('./question_data/data'+ques_no+'.json')
    .then((response) => response.json());
    document.querySelector(".question").innerHTML = "Q" + (ques_no + 1) +". " +  question_data.question;
    for(var i =0; i< 5 ;i++){ 
        var current_question = document.querySelector(".op"+(i+1)); 
        current_question.innerHTML = 
        question_data.label[i] +". " +
        question_data.options[i] + "<br>";
    } 
    reset_color(answers[ques_no]) ;
    compare();
}

var press_sta = document.querySelector(".nextquestion");
var press_pre = document.querySelector(".prevquestion");

print_question(0);

press_sta.addEventListener("click", ()=>{
    ques_no++;
    if(ques_no >= 10){
        ques_no = 9;
        return;
    }
    print_question(ques_no);
    
})

press_pre.addEventListener("click", ()=>{
    ques_no--;
    if(ques_no < 0){
        ques_no = 0;
        return;
    }
    print_question(ques_no);  
})



async function reset_color(option){
    for(var i = 0 ; i<5 ;i++){
        if(options[option] == options[i])
            continue;
        options[i].style.backgroundColor = "white"; 
    }
    if(options[option] != options[5]){
        options[option].style.backgroundColor = "#ADD8E6" ;
        navbut[ques_no].style.backgroundColor = attempted;
        console.log(navbut[option].innerHTML + "this it it");
    }     
    console.log(answers);

}

options[0].addEventListener("click", ()=>{
    reset_color(0);
    answers[ques_no] = 0;
})
options[1].addEventListener("click", ()=>{
    reset_color(1);
    answers[ques_no] = 1;

})
options[2].addEventListener("click", ()=>{
    reset_color(2);
    answers[ques_no] = 2;

})
options[3].addEventListener("click", ()=>{
    reset_color(3);
    answers[ques_no] = 3;

})
options[4].addEventListener("click", ()=>{
    reset_color(4);
    answers[ques_no] = 4;

})

navbut.forEach(i => {   
    i.addEventListener("click", function() {
        ques_no = i.innerHTML-1;
        console.log(ques_no);
        print_question();
    })
})

// clear selection

const clear = document.querySelector(".clearSelection");

clear.addEventListener("click", ()=>{
    answers[ques_no] = null;
    navbut[ques_no].style.backgroundColor = unattempted;
    reset_color(6);
});


export default answers;
export {print_question, ques_no};