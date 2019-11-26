#!/usr/bin/env node
import engine from '..';
import getRandomNumber from '../getRandomNumber';

const gameCondition = 'What number is missing in the progression?';

const createGame = () => {
  const mask = '..';
  const progressionLength = 10;
  const question = [];
  const progressionStartDigit = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(2, 4);
  const maskedIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progressionStartDigit + progressionStep * maskedIndex;
  for (let i = 0; i < progressionLength; i += 1) {
    const element = progressionStartDigit + progressionStep * i;
    if (i === maskedIndex) {
      question.push(mask);
    } else {
      question.push(element);
    }
  }
  return [question, correctAnswer];
};

export default () => engine(gameCondition, createGame);
