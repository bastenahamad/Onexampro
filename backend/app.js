

const {MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = 'examination';
var questionarray = [];

async function main() {
  
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('questions');
  
  for(var i = 0; i<10 ;i++){  
    var randomnumber = Math.random()*1000;
    Math.floor(randomnumber);
    const ques = await collection.find().limit(-1).skip(randomnumber).next()  
    questionarray.push(ques);
  }  
  //console.log(questionarray);
  //questionarray = JSON.stringify(questionarray);
  return questionarray;
}

module.exports = main();

