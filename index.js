const getUserChoice = (userInput)=>{
    userInput= userInput.toLowerCase();
    if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
       return userInput
    }else{
    console.log('Please enter Rock, Paper, or Scissors')
    }
  }
  
  const getComputerChoice = ()=>{
    let randomNumber=Math.floor(Math.random()*3);
   switch(randomNumber){
    case 0:
     return 'rock';
     break
    case 1:
      return 'paper'
      break;
    case 2:
      return 'scissors'
      break;
    default:
  }
  }
  const determineWinner = (userChoice,computerChoice)=>{
    if(userChoice===computerChoice){
      return 'Game Tied!';
      } 
      if (userChoice==='rock'){
        if(computerChoice==='paper'){
          return 'Computer wins!'
        }else{
          return 'User wins!'
        }
      }
  
      if(userChoice==='paper'){
        if(computerChoice==='scissors'){
          return 'User wins!'
        }else{
          return 'Computer Wins!'
        }
      }
  
      if(userChoice==='scissors'){
        if(computerChoice==='rock'){
          return 'Computer Wins!'
        }else{
          return 'User Wins!'
        }
      }
  }
  
  const playGame = ()=>{
    const userChoice = getUserChoice('scissors')
    let computerChoice = getComputerChoice()
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame();
  
  
  
  
  
  
  
  