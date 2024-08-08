import makeGame from '../index.js';

// Сбор данных для игры

export const runGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const isEven = (num) => num % 2 === 0;
  const round = 3;
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < round; i++) {
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    questions.push(question);
    correctAnswers.push(correctAnswer);
  }
  makeGame(questions, correctAnswers, 'Answer "yes" if the number is even, otherwise answer "no".');
};
