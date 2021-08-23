//LevelZero - A CLI app that can quiz your friends on how well they know you

var readlineSync = require("readline-sync");
var userName = readlineSync.question("Enter your name:");
console.log("Hi "+userName+" Do you know Akhilesh?");

var point = 0;

function play(question, answer)
{
    
    var userVariable = readlineSync.question(question);

    if(userVariable == answer)
    {
      point++;
      console.log("Correct Answer!");
      
    }
    else
    {
      console.log("Wrong Answer!");
    }

    console.log("Current score:"+point);
    console.log("------------------");

    if(point == 5)
    {
      console.log("Congrats! You know Akhilesh really well!!");
    }
}

//onjects are in key-value pairs
var questions = [{question:"Where does Akhilesh live?",answer:"kochi"}, {question:"What's his favourite sport?",answer:"football"}, {question:"Where does he work?",answer:"infosys"}, {question:"What's his favourite colour?", answer:"orange"}, {question:"Does he go to gym?", answer:"no"}];

for(var i=0; i<questions.length; i++)
{
  var current = questions[i];
  play(current.question, current.answer);
}