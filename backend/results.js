import answers from "./exampage.js";


var score = 0;
var correct_answers = [];



async function get_question(ques_no){
    
    let question_data = await fetch('./question_data/data'+ques_no+'.json')
    .then((response) => response.json());

    correct_answers[ques_no] = question_data.answer;
    
}

function get_correct_answers(){
    for(var i=0; i<10; i++) {
        get_question(i);
    }
}

export default function compare(){

    score = 0;

    get_correct_answers();

    for(var i=0; i<10; i++) {
        var temp = 0;
        if(correct_answers[i]=='A'){
            temp = 0;
        }
        if(correct_answers[i]=='B'){
            temp = 1;
        }
        if(correct_answers[i]=='C'){
            temp = 2;
        }
        if(correct_answers[i]=='D'){
            temp = 3;
        }
        if(correct_answers[i]=='E'){
            temp = 4;
        }
        if(temp == answers[i]) {
            score++;
        }
        
    }
    console.log(score);
}

const showResult = document.querySelector(".submit");

showResult.addEventListener('click', ()=>{
    window.open("../feedback.html","_self");
})


