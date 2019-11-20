#!/usr/bin/env node
import makeGameEngine from '..';
import getRandomNumber from '../getRandomNumber';

const gameCondition = 'What number is missing in the progression?';
const createGame = () => {
  const mask = '..';
  const progressionStartDigit = 5;
  const progressionLength = 10;
  const maskedIndex = getRandomNumber(0, progressionLength - 1);
  const progressionStep = getRandomNumber(2, 4);
  const makeProgression = (startIndex, length, step) => {
    const result = [];
    let size = length;
    for (let i = startIndex; size > 0; i += step) {
      result.push(i);
      size -= 1;
    }
    return result;
  };
  const progression = makeProgression(progressionStartDigit, progressionLength, progressionStep);
  const progressionWithMaskedDigit = progression.map((item, idx) => (idx === maskedIndex
    ? mask : item));
  const question = `${progressionWithMaskedDigit}`;
  const correctAnswer = progression[maskedIndex];

  return [question, correctAnswer];
};

export default () => makeGameEngine(gameCondition, createGame);
