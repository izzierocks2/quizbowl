const submitButton = document.querySelector('.submit-button');
const inputBox = document.querySelector('.input-box');

let isCorrect = true;

submitButton.addEventListener('click', () => {
    if (isCorrect) {
        displayMessage = "Correct";

    } else {
        displayMessage = "Wrong, try again";
    }
    isCorrect = !isCorrect;
});

