#!/usr/bin/env node
import gameEngine from '..';
import getRandomNumber from '../getRandomNumber';

const gameCondition = 'What is the result of the expression?';
const game = () => {
  const operations = ['+', '-', '*'];
  const operator = operations[getRandomNumber(0, 2)];
  const leftOperand = getRandomNumber(1, 25);
  const rightOperand = getRandomNumber(1, 25);
  const question = `${leftOperand} ${operator} ${rightOperand}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = leftOperand + rightOperand;
      break;
    case '-':
      correctAnswer = leftOperand - rightOperand;
      break;
    default:
      correctAnswer = leftOperand * rightOperand;
      break;
  }
  return [question, correctAnswer];
};

export default () => gameEngine(gameCondition, game);
