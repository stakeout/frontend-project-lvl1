import readlineSync from 'readline-sync';

const attemps = 3;
const gameEngine = (gameCondition, gameFn) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameCondition);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  for (let i = 0; i < attemps; i += 1) {
    const results = gameFn();
    const userAnswer = readlineSync.question(`Question: ${results[0]}\nYour answer: `);
    if (userAnswer !== `${results[1]}`) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${results[1]}'`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct');
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default gameEngine;
