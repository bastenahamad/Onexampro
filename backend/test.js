const docu = require('./app.js');
const fs = require("fs");


docu.then((function(res) {
    for(var i =0;i<10;i++){
        fs.unlink("./question_data/data"+i+".json",function(error){
            if(error) console.error('Error Occured:', error);
            console.log('File deleted!');
        });
    }    
    for(var i =0;i<10;i++){
        var temp = res[i];
        var options = (temp.choices);
        var stringoptions = options;
        
        stringoptions = stringoptions.replace(/ /gm,"");
        stringoptions = stringoptions.replace("\\n", "");
        stringoptions = stringoptions.replace(/(\n|array)/gm , "");
        stringoptions = stringoptions.replace(/,dtype=object|,\ndtype=object/gm, "");
        stringoptions = stringoptions.replace(/,dtype=object|,\ndtype=object|\(|\)/gm, "");
        stringoptions = stringoptions.replace(/\'/gm, "\"");

        
        //console.log(stringoptions);

        options = JSON.parse((stringoptions));
        
        console.log(temp.question);
        console.log(options);
        console.log(options.label);
        console.log(options.text);
        console.log(temp.answerKey); 

        var question = temp.question;
        var optionLabel = options.label;
        var optionsList = options.text;
        var answer = temp.answerKey;

        const result = {
            "question" : question,
            "label" : optionLabel,
            "options" : optionsList,
            "answer" : answer
        }
        fs.writeFile("./question_data/data"+i+".json", JSON.stringify(result), (error) => {
            if (error) {
            console.error(error);
            throw error;
            }
            console.log("data.json written correctly");
        });
    }
    
  }));
  

  