const chalk = require('chalk');
var readlineSync=require('readline-sync');
const styleOne = chalk.green;
const styleTwo = chalk.bold.red;
const styleThree = chalk.keyword('yellow');
const styleFour = chalk.blue.underline.bold

var userName = readlineSync.question(styleOne("Welcome,Please enter your name? "));

console.log(chalk.underline(styleTwo("Hello "+ userName+ " let's begin Quiz about IPL 2020")));

console.log(styleFour("Welcome to the Quiz,"+userName.toUpperCase()+"\nType a for Option A\nType b for Option B\nType c for Option C\nType d for Answer D\n"));

var hiscore =
[
  {
    name:"Ankit",
    score:4
  },
  {
    name:"aman",
    score:4
  }
]
var questionOne =
{
  question:"Which Tean won IPL 2020?\n a Mumbai Indians\n b Delhi Capitals\n c Rajasthan Royals\n d Chennai SuperKings\n",
  answer:"a"
}
var questionTwo =
{
  question:"Who won the orange Cap?\n a Virat kohli\n b Shikhar Dhawan\n c KL Rahul\n d David Warner\n",
  answer:"c"
}
var questionThree =
{
  question:"Who won the purple cap?\n a Japrit Bumrah\n b Kagiso Rabada\n c Trent Boult\n d Yuzevender Chahal\n",
  answer:"b"
}
var questionFour =
{
  question:"Who has hit the most sixes in IPL 2020? \n a Sanju Samson  \n b Nicholas Pooran  \n c Hardik Pandya  \n d Ishaan Kishan\n",
  answer:"d"
}
var questionFive =
{
  question:"Who was the MVP of IPL 2020 \n a Jofra Archer  \n b Virat Kohli  \n c Jasprit Bumrah  \n d Rohit Sharma\n",
  answer:"a"
}
var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive];
var score=0;
var counter=0;
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if (userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log("Correct Answer");
    score=score+1;
    console.log("Current Score "+score);
  }
  else
  {
    console.log("Incorrect Answer");
    score=score-1;
    console.log("Current Score "+score);
  }
}
for(var j=0;j<hiscore.length;j++)
{
  if(hiscore[j].score<score)
  {
    counter=counter+1;
  }
}
console.log(styleOne('Final score is '+score));
if(counter>0)
{
  console.log("you beaten high score");
}
console.log(styleTwo('-------'));