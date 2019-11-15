#!/usr/bin/env node
import gameEngine from '..';
import getRandomNumber from '../getRandomNumber';

const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
const game = () => {
  const isEvenCheck = (num) => num % 2 === 0;
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEvenCheck(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameEngine(gameCondition, game);