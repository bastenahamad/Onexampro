import compare from "./results.js";
import { navbut } from "./info_bar.js";

var ques_no = 0;
var answers = [];
var options = [];
options.push(document.querySelector(".op1"));
options.push(document.querySelector(".op2"));
options.push(document.querySelector(".op3"));
options.push(document.querySelector(".op4"));
options.push(document.querySelector(".op5"));
options.push(document.querySelector("null"));


async function print_question(){
    if(ques_no==0) {
        document.querySelector(".nextquestion").style.display = "inline-block";
        document.querySelector(".prevquestion").style.display = "none";
    }
    else if(ques_no == 9){
        document.querySelector(".prevquestion").style.display = "inline-block"; 
        document.querySelector(".nextquestion").style.display = "none";
    }
    else{
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
        navbut[ques_no].style.backgroundColor = "#ADD8E6";
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

export default answers;
export {print_question, ques_no};