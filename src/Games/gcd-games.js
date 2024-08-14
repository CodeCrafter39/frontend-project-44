import makeGame from '../index.js';
import getRandomInt from './utils.js';

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

const getData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};
const instruction = 'Find the greatest common divisor of given numbers.';

const startGcdGame = () => makeGame(getData, instruction);

export default startGcdGame;
