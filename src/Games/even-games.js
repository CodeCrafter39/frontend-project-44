import makeGame from '../index.js';
import getRandomInt from './utils.js';

const isEven = (num) => num % 2 === 0;

const getData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const runGame = () => {
  makeGame(getData, instruction);
};
export default runGame;
