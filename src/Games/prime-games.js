import makeGame from '../index.js';

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const round = 3;
  const questions = [];
  const correctAnswers = [];

  // Функция для проверки простое ли это число
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Основной цикл игры
  for (let i = 0; i < round; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    questions.push(`${number}`);
    correctAnswers.push(isPrime(number) ? 'yes' : 'no');
  }

  makeGame(questions, correctAnswers, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};
export default primeGame;
