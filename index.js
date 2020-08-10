const getUserChoice = (userInput)=>{
    userInput= userInput.toLowerCase();
    if(userInput==='rock'||userInput==='paper'||userInput==='scissors')
    {
      return userInput;
    }else{
      console.log('Please enter Rock, Pape, or Scissors');
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
    } if (userChoice==='rock'){
       if(computerChoice==='paper'){
         return 'Computer wins!'
       }else{
         return 'User wins!'
       }
    }
  }