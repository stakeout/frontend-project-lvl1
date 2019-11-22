#!/usr/bin/env node
import engine from '..';
import getRandomNumber from '../getRandomNumber';

const gameCondition = 'What number is missing in the progression?';
const mask = '..';
const progressionLength = 10;
const maskedIndex = getRandomNumber(0, progressionLength - 1);

const makeProgressionWithHiddenItem = (startIndex, step) => {
  const question = [];
  const correctAnswer = startIndex + step * maskedIndex;
  for (let i = 0; i < progressionLength; i += 1) {
    const element = startIndex + step * i;
    if (i === maskedIndex) {
      question.push(mask);
    } else {
      question.push(element);
    }
  }
  return [question, correctAnswer];
};

const createGame = () => {
  const progressionStartDigit = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(2, 4);
  return makeProgressionWithHiddenItem(progressionStartDigit, progressionStep);
};

export default () => engine(gameCondition, createGame);
