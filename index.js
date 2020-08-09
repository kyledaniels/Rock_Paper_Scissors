onst getUserChoice = (userInput)=>{
    userInput= userInput.toLowerCase();
    if(userInput==='rock'||userInput==='paper'||userInput==='scissors')
    {
      return userInput;
    }else{
      console.log('Please enter Rock, Pape, or Scissors');
    }
  }
  
  
  console.log(getUserChoice('CAT'))