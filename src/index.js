import readlineSync from 'readline-sync';

// Исполнение игры

const makeGame = (questions, correctAnswers, instruction) => {
    console.log('Welcome to the Brain Game!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(instruction);


    for(let i = 0; i < questions.length; i++) {
        console.log(`Question: ${questions[i]}`);
        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

// Вывод игры

    if (userAnswer === correctAnswers[i]) {
        console.log('Correct!');
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswers[i]}.`);
        console.log(`Let's try again, ${name}!`);
    return;
    }
    }

    console.log(`Congratulations, ${name}!`);
};
export default makeGame;