const readlineSync = require('readline-sync');
const chalk = require('chalk');

let currentUser;
let score = 0;
let highScores = 
  {
    name:'KD',
    score: 4
  }
;
const questions = [
  {
    question:'What food do The Avengers all go eat after their battle for New York in the first Avengers movie.',
    options:{a:'Shawarma',b:'Gyros',c:'Pho'},
    answer:'a',
  },{
    question:'What is the fictional country whose capital city is used as a weapon against humanity in Avengers: Age of Ultron?',
    options:{a:'Genovia',b:'Hogsmede',c:'Sokovia'},
    answer:'c'
  },{
    question:'Who is the wealthiest character in the Marvel Universe?',
    options:{a:'Nick Furry',b:'Black Panther',c:'Tony Stark'},
    answer:'b'
  },{
    question:'Nick Fury lost his eye to what type of creature?',
    options:{a:'A Flerken',b:'An Abilisk',c:'A Demigorgon'},
    answer:'a'
  },{
    question:'Who is the doctor that is Thor’s love interest and, in the comics, eventually picks up Mjolnir and is worthy enough to be the new Thor?',
    options:{a:'Pepper Potts',b:'Jane Foster',c:'Natasha Romanova'},
    answer:'b'
  }
]

const userName = readlineSync.question('Hey, marvel geek.. Welcome to the MARVELOUS quiz \n Please enter your name ');

const userAgreement = readlineSync.question(`Welcome ${userName}. Are you ready to play MARVELOUS quiz? (y/n) `);

function instructions(){
  console.log(`\n Each question carries ${chalk.bold.blue(1)} point \n ${chalk.bold.green('Please submit your answers with appropriate option a/b/c')}`);
}

if(userAgreement.toUpperCase() === 'Y'){
  instructions();
  
  function getUserAnswer(question,options){
    console.log(`\n ${question}`);
    for(const option in options){
      console.log(`${option} : ${options[option]}`);
    }
    const userAnswer = readlineSync.question('Enter your option ')
    return userAnswer;
  }

  function play(question,options,answer){
    const userAnswer = getUserAnswer(question,options);
    if((userAnswer.toUpperCase() === answer.toUpperCase())){
      score++;
      console.log(`Your answer is ${chalk.bold.green('correct')}`);
    }else{
      console.log(`Sorry!! Your answer is ${chalk.bold.red('incorrect')}`);
      console.log(`The correct answer is option ${chalk.green(answer)}`);
    }
      console.log(`Your current score is ${chalk.bold.magenta(score)}`);
      console.log(chalk.bold.blue("=".repeat(60)));
  }

  for(let i=0;i<questions.length;i++){
    const currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.options,currentQuestion.answer);
  }

  console.log(`Your Final Score is ${score}.\n Thanks for taking the quiz`);

  currentUser = {
    name:userName,
    score:score
  }

  if(currentUser.score > highScores.score){
    highScores = currentUser;
    console.log(`${chalk.bold.green('Congratulations!! You just beat the highScore, please send your email id..Thanks for taking the quiz.')}`);
  }else{
    console.log(`${chalk.bold.red('Sorry!! You were not able to beat the highScore...Try again..')}`)
  }
}
else{
  console.log('Do come back whenever you feel like');
}




