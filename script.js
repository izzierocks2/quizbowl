let questionList = ['Who won the 2022 NBA championship?', 'What is the tallest mountain in the world?', 'What is the largest desert in the world?', 'Who won the 2018 NBA Championship?'];
let answerList = ['Golden State Warriors', 'Mount Everest', 'Antarctica', 'Golden State Warriors'];
let score = 0;
let questionIndex = 0;

const question = document.querySelector('.question-container');
const button = document.querySelector('.submit-button');
const input = document.querySelector('#input-field');
let scoreContainer = document.querySelector('.score-container');

question.textContent = questionList[questionIndex];

let submitFunction = () =>{
    button.addEventListener('click', () =>{
        if(input.value === answerList[questionIndex]){
            questionIndex += 1;
            score += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score: " + score;
        }else{
            score -= 1;
            scoreContainer.textContent = "Score: " + score;
        }
    
        endGame();
    });
}

let endGame = () =>{
    if(questionIndex > 2){
        scoreContainer.textContent = "Final Score: " + score;
        question.textContent = "Congratulations, play again!";
        input.style.display = "none";
        button.style.display = "none";
    }
}

submitFunction();






/*let isCorrect = true;
let answerList = ['1', '2', '3'];
const submitButton = document.querySelector('#submit-button');
const inputContainer = document.querySelector('.input-container');*/

/*submitButton.addEventListener('click', () => {
    if (isCorrect) {
        displayMessage = "Correct";

    } else {
        displayMessage = "Wrong, try again";
    }
    isCorrect = !isCorrect;
});*/

/*submitButton.addEventListener('click', () => {
    console.log("hello");
});*/