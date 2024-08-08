import makeGame from '../index.js';

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const round = 3;
  const questions = [];
  const correctAnswers = [];

  // Функция для нахождения НОД
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  // Функция для генерации случайного числа в заданном диапазоне
  function getRandomInt(newmin, newmax) {
    min = Math.ceil(newmin);
    max = Math.floor(newmax);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Основной цикл игры
  for (let i = 0; i < round; i += 1) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);

    questions.push(`${num1} ${num2}`);
    correctAnswers.push(gcd(num1, num2).toString());
  }

  makeGame(questions, correctAnswers, 'Find the greatest common divisor of given numbers.');
};
export default gcdGame;
