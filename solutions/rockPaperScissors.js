const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors'|| userInput === 'bomb') {
        return userInput
    } else {
        console.log('You must enter either Rock, Paper or Scissors to play') ;
    }
}

const getComputerChoice = ()  => {
    randomNumber = Math.floor(Math.random() * 3)
    
    switch (randomNumber){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb'){
        return 'User won!';
    }

    if (userChoice === computerChoice){
        return 'The game is a tie!';
    }

    if (userChoice === 'rock'){
        if (computerChoice === 'paper') {
            return 'Computer won!';
        } else {
            return 'User won!';
        }
    }

    if (userChoice === 'paper'){
        if (computerChoice === 'scissors') {
            return 'Computer won!';
        } else {
            return 'User won!';
        }
    }

    if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return 'Computer won!';
        } else {
            return 'User won!';
        }
    }

}

const playGame = ()=> {
   const userChoice = getUserChoice('paper');
   const computerChoice = getComputerChoice();

   console.log(userChoice);
   console.log(computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
}

playGame();

