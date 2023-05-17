let logoArea = document.querySelector(".logo");
const tempLogo = "WhatDoYouKnow.com";
logoArea.innerHTML = tempLogo;


let text="";
let author="";
let quotehere = document.querySelector(".quote");
const getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[indx].text;

    //Store the author of the respective quote
    const auth=allQuotes[indx].author;

    text = quote;
    author = auth;
    if(auth==null)
    {
        author = "Anonymous";
    }
    
    

    //tweet the quote
    let randomquote = (text + "   <br>-" +author);
    console.log(randomquote);
    quotehere.innerHTML = randomquote;
}
getNewQuote();

function storeEmail(){
    const emailvalue = document.querySelector(".email").value;
    console.log(emailvalue);
    localStorage.setItem("email",emailvalue);
}

document.querySelector(".sub").addEventListener('click',sendMail());

function sendMail(){
    const emailadd = localStorage.getItem("email");
    const score = localStorage.getItem("score");
    console.log(emailadd + " " + score);
    emailjs.send("service_poqa9pk","template_3ldt9da",{
        from_name: "WhatDoYouKnow.results",
        to_name: emailadd,
        score: score,
    });
    
}
