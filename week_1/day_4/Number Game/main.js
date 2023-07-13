let guessedNumber = document.getElementById('guessedNumber');
let randomNumber = Math.floor(Math.random() * 10) + 1;


function checkGuess(){

let guess = guessedNumber.value;

if(guess == randomNumber){
    alert('Correct! A new Number has been generated for you');
    randomNumber = Math.floor(Math.random() * 10) + 1;
    resetBox();
}
else
{
    alert('Incorrect! Guess again');
    resetBox();
}
}



function resetBox() {
    guessedNumber.value = '';
  }
