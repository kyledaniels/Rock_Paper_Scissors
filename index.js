const getUserChoice = userInput=>{
    userInput= userInput.toLowerCase();
    if(userInput==='rock'||'paper'||'scissors')
    {
      return userInput;
    }else{
      console.log('Please enter rock, paper, scissors');
    }
  }