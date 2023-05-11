function draw() {
  
  if(fontId==0){
    textFont(SpaceCrusaders);
  }
  else if(fontId==1){
    textFont(newLandContour);
  }

  
  if(game==0 && MainMenu==0 && loading==1){
    
    loadingGame()
    
  }
  
  if(game==0 && end==1){
    
      finish();
    
    }//finish

  if(MainMenu==1){

    mainMenu();
  
  }//mainMenu
  
  if(game==1 && loading==0){
    
    gameRunning();
    
  }//game
  
  if(options==1){
    
    optionsMenu();
    
  }//settings
  
  if(gamePause==1){
    
    pauseMenu();
    
  }//pause
  
   if(fps==1){
      
    fpsShow();
      
  }//showsFPS
  
  if(skinsMenu==1){
    
    skinMenu();
    
  }//skinsMenu
  
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
  
}