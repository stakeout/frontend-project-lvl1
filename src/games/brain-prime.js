#!/usr/bin/env node
import gameEngine from '..';
import getRandomNumber from '../getRandomNumber';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const game = () => {
  const question = getRandomNumber(1, 20);
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const sayPrimeOrNot = (num) => (isPrime(num) ? 'yes' : 'no');
  const correctAnswer = sayPrimeOrNot(question);
  return [question, correctAnswer];
};
export default () => gameEngine(gameCondition, game);
