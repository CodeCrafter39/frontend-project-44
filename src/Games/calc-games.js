import makeGame from '../index.js';
import getRandomInt from './utils.js';

// Функция для генерации случайного математического выражения и его результата
const generateExpressionAndResult = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomInt(0, operations.length - 1)];
  const expression = `${num1} ${operation} ${num2}`;
  let result;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error('Unknown operation!');
  }

  return [expression, result.toString()];
};

// Основная функция игры
const startCalcGame = () => {
  const instruction = 'What is the result of the expression?';

  const getData = () => generateExpressionAndResult();

  makeGame(getData, instruction);
};

export default startCalcGame;
