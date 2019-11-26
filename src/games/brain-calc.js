#!/usr/bin/env node
import engine from '..';
import getRandomNumber from '../getRandomNumber';

const gameCondition = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const createGame = () => {
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const leftOperand = getRandomNumber(1, 25);
  const rightOperand = getRandomNumber(1, 25);
  const question = `${leftOperand} ${operation} ${rightOperand}`;
  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = leftOperand + rightOperand;
      break;
    case '-':
      correctAnswer = leftOperand - rightOperand;
      break;
    case '*':
      correctAnswer = leftOperand * rightOperand;
      break;
    default:
      return false;
  }
  return [question, correctAnswer];
};

export default () => engine(gameCondition, createGame);
