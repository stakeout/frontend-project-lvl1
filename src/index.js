import readlineSync from 'readline-sync';

const attempsCount = 3;
const makeGameEngine = (gameCondition, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameCondition);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  for (let i = 0; i < attempsCount; i += 1) {
    const [question, correctAnswer] = game();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== `${correctAnswer}`) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default makeGameEngine;
