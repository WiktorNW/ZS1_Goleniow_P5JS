function draw() {
  
  if (currentSkin==100){
    magicalThing++;
    if (magicalThing > 359){
      magicalThing = 1;
    }
  }
  

  textFont(SpaceCrusaders);

  
  
  if(game==0 && MainMenu==0 && loading==1){
    
    loadingGame()
    
  }
  
  if(game==0 && end==1){
    
    finish();
    
    if(achGet[3]!=true){
      achGet[3]=true;
    }
    
    }//finish

  if(MainMenu==1){

    mainMenu();
  
  }//mainMenu
  
  if(achievements==1){
    
    achievementMenu();
    
  }
  
  if(game==1 && loading==0){
    
    gameRunning();
    
  }//game
  
  if(options==1){
    
    optionsMenu();
    
  }//settings
  
  if(gamePause==1){
    
    pauseMenu();
    
  }//pause
  
  if(skinsMenu==1){
    
    skinMenu();
    
  }//skinsMenu
  
  if(fps==1){
      
    fpsShow();
      
  }//showsFPS
  
  showVersion();//shows version
  
  //loading animation
  
  if(loading==1){
    
    ePos+=lSpeed;
    sPos+=lSpeed;
    
    if(sPos>800){
      ePos=-100;
      sPos=-200;
    }
    
  }
  
  if(timesPlayed==1){
    achGet[0]=true;
  }
  
  if(timesPlayed==5){
    achGet[1]=true;
  }
  
  if(timesPlayed==10){
    achGet[2]=true;
  }
  
}