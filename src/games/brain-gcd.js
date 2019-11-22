#!/usr/bin/env node
import engine from '..';
import getRandomNumber from '../getRandomNumber';

const gameCondition = 'Find the greatest common divisor of given numbers.';
const getGreaterCommonDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};
const createGame = () => {
  const firstDigit = getRandomNumber(1, 25);
  const secondDigit = getRandomNumber(1, 25);
  const question = `${firstDigit} ${secondDigit}`;
  const correctAnswer = getGreaterCommonDivisor(firstDigit, secondDigit);

  return [question, correctAnswer];
};

export default () => engine(gameCondition, createGame);
