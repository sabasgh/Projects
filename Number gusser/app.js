/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Define the game values:

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// then define the UI elements:

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


//Assign UI min and max:

    minNum.textContent = min;
    maxNum.textContent = max;

//play again event listener:
    game.addEventListener('mousedown', function(e){
        if(e.target.className === 'play-again'){
            window.location.reload();
            //if we used clicl for this function it would be keeping on reloading!
        }
    });
//listen for guess:

    guessBtn.addEventListener('click' , function(){

        let guess = parseInt(guessInput.value);

 //validate?? 

        if(isNaN(guess) || guess < min || guess > max)
        {
            setMessage(`please enter a number between ${min} and ${max}` , 'red');
        }  
//check if won:

          if (guess === winningNum){ 
//call gameOver and say won:
                gameOver(true, `${winningNum} is correct, YOU WIN!`);
            } else {
//wrong number 
                guessesLeft -= 1;

                         if (guessesLeft === 0){
                        gameOver(false, `Game Over , you lost. the correct number is ${winningNum}`);
                         } else {
                //Game continues - answer wrong:

//change border color:

                guessInput.style.borderColor = 'red';

//clear input:
                guessInput.value = '';

// tell user its the wrong number:

                setMessage(`${guess} is not correct , ${guessesLeft} guesses left`, 'red');
            } }


    });

    //Now define the function U mentioned:

//GameOver:

    function gameOver (won, msg){

        let color;
        won === true ? color = 'green' : color = 'red';

    //Disable input:
        guessInput.disable = true;
    //change border color:
        guessInput.style.borderColor = color;
    //change text color:
        message.style.color = color;
        setMessage(msg);

// play again?

        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again';
        // then you should go up and add event listener cause it needs reloading
    }

//getRandomNum:
        function getRandomNum(min, max){
            return Math.floor(Math.random()*(max-min+1)+min);

        }

//setMessage :

        function setMessage(msg, color){
            
            message.style.color = color;
            message.textContent = msg;

        }