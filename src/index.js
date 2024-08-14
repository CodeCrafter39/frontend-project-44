import readlineSync from 'readline-sync';

const makeGame = (getData, instruction) => {
  console.log('Welcome to the Brain Game!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(instruction);

  for (let i = 0; i < 3; i += 1) {
    const [questions, correctAnswer] = getData();
    console.log(`Question: ${questions}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
export default makeGame;
