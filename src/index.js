import readlineSync from 'readline-sync';
import getRandomNumber from './getRandomNumber';

const sayYourName = (str) => {
  const userName = readlineSync.question(`${str} `);
  console.log(`Hi, ${userName}!`);
  return userName;
};

const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const userName = sayYourName('May I have your name? ');
  const attemps = 3;
  const isEvenCheck = (num) => num % 2 === 0;
  const gameRound = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEvenCheck(question) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct');
    return true;
  };
  for (let i = 0; i < attemps; i += 1) {
    if (!gameRound()) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default isEven;
