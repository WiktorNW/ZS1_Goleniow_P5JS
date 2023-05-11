function mouseClicked(){
  
  var skinX1=95;
  var skinX2=155;
  var skinY1=80;
  var skinY2=140;
  var skinGap=70;
  
  //game start from main menu
  
  if(MainMenu==1 && mouseX<450 && mouseX>150 && mouseY>192.5 && mouseY<242.5){
    createGame();
    MainMenu=0;
    loading=1;
    
    ePos=-100;
    sPos=-200;
    
    setTimeout(function(){ loading=0; game=1 }, 3000);
    
  }
  
  //options from main menu
  
  if(MainMenu==1 && mouseX<450 && mouseX>150 && mouseY>262.5 && mouseY<312.5){
    options=1;
    MainMenu=0;
  }
  
  //fps counter
  
  if(options==1 && settingsSite==1 && fps==0 && mouseY>100 && mouseY<150 && mouseX>50 && mouseX<550){
    fps=1;
  }
  else if(options==1 && settingsSite==1 && fps==1 && mouseY>100 && mouseY<150 && mouseX>50 && mouseX<550){
    fps=0;
  }
  
  //font change
  
  if(options==1 && settingsSite==2 && fontId==0 && mouseY>100 && mouseY<150 && mouseX>50 && mouseX<550){
    fontId=1;
  }
  else if(options==1 && settingsSite==2 && fontId==1 && mouseY>100 && mouseY<150 && mouseX>50 && mouseX<550){
    fontId=0;
  }
  
  //back from options
  
  if(options==1 && mouseY>325 && mouseY<375 && mouseX>250 && mouseX<350){
    options=0;
    settingsSite=1;
    MainMenu=1;
  }
  
  //pause game
  
  if(game==1 && mouseX>5 && mouseX<55 && mouseY>5 && mouseY<55){
    game=0;
    gamePause=1;
  }
  
  //resume game
  
  if(gamePause==1 && mouseX>150 && mouseX<450 && mouseY>150 && mouseY<200){
    game=1;
    gamePause=0;
  }
  
  //restart game from pause
  
  if(gamePause==1 && mouseX>150 && mouseX<450 && mouseY>225 && mouseY<275){
    createGame();
    loading=1;
    gamePause=0;
    
    ePos=-100;
    sPos=-200;
    
    setTimeout(function(){ loading=0; game=1 }, 3000);
  }
  
  //Main menu from pause
  
  if(gamePause==1 && mouseX>150 && mouseX<450 && mouseY>300 && mouseY<350){
    gamePause=0;
    loading=1;
    
    ePos=-100;
    sPos=-200;
    
    setTimeout(function(){ loading=0; MainMenu=1 }, 1500);
  }
  
  //Main menu from finish
  
  if(end==1 && mouseX>150 && mouseX<450 && mouseY>300 && mouseY<350){
    end=0;
    loading=1;
    
    ePos=-100;
    sPos=-200;
    
    setTimeout(function(){ loading=0; MainMenu=1 }, 1500);
  }
  
  //restart game from finish
  
  if(end==1 && mouseX>150 && mouseX<450 && mouseY>225 && mouseY<275){
    createGame();
    loading=1;
    end=0;
    
    ePos=-100;
    sPos=-200;
    
    setTimeout(function(){ loading=0; game=1 }, 3000);
  }
  
  //Language change
  
  if(langId==0 && settingsSite==1 && options==1 && mouseY>170 && mouseY<220 && mouseX>50 && mouseX<550){
    langId=1;
  }
  else if(langId==1 && settingsSite==1 && options==1 && mouseY>170 && mouseY<220 && mouseX>50 && mouseX<550){
    langId=0;
  }
  
  //skinsMenu
  
  if(MainMenu==1 && mouseX>25 && mouseX<160 && mouseY>325 && mouseY<375){
    
    skinsMenu=1;
    MainMenu=0;
    
  }
  
  //MainMenu from skins
  
  if(skinsMenu==1 && mouseY>325 && mouseY<375 && mouseX>250 && mouseX<350){
    
    skinsMenu=0;
    MainMenu=1;
    
  }
  
  //Settings site 1
  
  if(options==1 && settingsSite==2 && mouseX>400 && mouseX<450 && mouseY>325 && mouseY<375){
    
    settingsSite=1
    
  }
  
  //Settings site 2
  
  if(options==1 && settingsSite==1 && mouseX>460 && mouseX<510 && mouseY>325 && mouseY<375){
    
    settingsSite=2
    
  }
  
  
  
  //Skins
  
  for (i=0; i<6; i++){
      if(skinsMenu==1 && currentSkin!=i && mouseX>skinX1+skinGap*i && mouseX<skinX2+skinGap*i && mouseY>skinY1 && mouseY<skinY2){
      currentSkin=i;
    }
    
    if(skinsMenu==1 && currentSkin!=i+6 && mouseX>skinX1+skinGap*i-6 && mouseX<skinX2+skinGap*i-6 && mouseY>skinY1+skinGap && mouseY<skinY2+skinGap){
      currentSkin=i+6;
    }
    
    if(skinsMenu==1 && currentSkin!=i+12 && mouseX>skinX1+skinGap*i-12 && mouseX<skinX2+skinGap*i-12 && mouseY>skinY1+skinGap*2 && mouseY<skinY2+skinGap*2){
      currentSkin=i+12;
    }
  }
  
  
}