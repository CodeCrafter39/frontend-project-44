import makeGame from '../index.js';

// Сбор данных для игры

const calcGame = () => {
  console.log('What is the result of the expression?');
  const round = 3;
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < round; i += 1) {
    const { expression, result } = generateExpressionAndResult();
    questions.push(expression);
    correctAnswers.push(result.toString());
  }
  // Функция для генерации случайного числа в заданном диапазоне

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Функция для генерации случайного математического выражения и его результата

  function generateExpressionAndResult() {
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
    }
    return { expression, result };
  }

  makeGame(questions, correctAnswers, 'What is the result of the expression?');
};
export default calcGame;
