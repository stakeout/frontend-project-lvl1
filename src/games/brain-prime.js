#!/usr/bin/env node
import engine from '..';
import getRandomNumber from '../getRandomNumber';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const createGame = () => {
  const question = getRandomNumber(2, 20);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => engine(gameCondition, createGame);
