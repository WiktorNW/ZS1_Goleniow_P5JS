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
    
    timesPlayed++;
    
  }
  
  //options from main menu
  
  if(MainMenu==1 && mouseX<450 && mouseX>150 && mouseY>262.5 && mouseY<312.5){
    options=1;
    MainMenu=0;
  }
  
  //Achievements
  
  if(MainMenu==1 && mouseX>45 && mouseX<120 && mouseY>262.5 && mouseY<312.5){
    MainMenu=0;
    achievements=1;
    
    achY = 100;
    achTextY = 55;
    achBackY = 1150;
  }
  
  //fps counter
  
  if(options==1 && fps==0 && mouseY>setFPSFieldY && mouseY<setFPSFieldY+50 && mouseX>50 && mouseX<550){
    fps=1;
  }
  else if(options==1 && fps==1 && mouseY>setFPSFieldY && mouseY<setFPSFieldY+50 && mouseX>50 && mouseX<550){
    fps=0;
  }
  
  //back from options
  
  if(options==1 && mouseY>setBackFieldY && mouseY<setBackFieldY+50 && mouseX>250 && mouseX<350){
    options=0;
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
    timesPlayed++;
    
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
    timesPlayed++;
    
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
  
  //MainMenu from Achievements
  
  if(achievements==1 && mouseY>achBackY && mouseY<achBackY+50 && mouseX>250 && mouseX<350){
    
    achievements=0;
    MainMenu=1;
    
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
  
  if(skinsMenu==1 && mouseX>370 && mouseX<410 && mouseY>16 && mouseY<56){
    currentSkin=100;
    achGet[7]=true;
    // achPopUp=1;
  }
}
  

function mouseWheel(event){
  
  if(achievements==1){
    if(event.deltaY < 0 && achTextY<55){
      achTextY +=15;
      achY += 15;
      achBackY += 15;

    }
    else if(event.deltaY > 0 && achBackY>330){
      achTextY -= 15;
      achY -= 15;
      achBackY -= 15;
    }
  }
  
}