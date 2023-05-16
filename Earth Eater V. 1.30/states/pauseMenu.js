function pauseMenu(){

  image(BG,0,0);
  background("rgba(0,0,0,0.90)");
 
  noStroke();
  textSize(50);
  fill(255);
  textAlign(CENTER, BASELINE);
  text(textes[langId][1],300,55);
  textSize(32);
  text(textes[langId][9],300,110);
  
  fill(20);
  
  if(gamePause==1 && mouseX>150 && mouseX<450 && mouseY>150 && mouseY<200){
    fill(50);
    rect(150,150,300,50,10); // RESUME
    fill(20);
  }
  else{
    rect(150,150,300,50,10); // RESUME
  }
  
  if(gamePause==1 && mouseX>150 && mouseX<450 && mouseY>225 && mouseY<275){
    fill(50);
    rect(150,225,300,50,10); // RESTART
    fill(20);
  }
  else{
    rect(150,225,300,50,10); // RESTART
  }
  
  if(gamePause==1 && mouseX>150 && mouseX<450 && mouseY>300 && mouseY<350){
    fill(50);
    rect(150,300,300,50,10); //MAIN MENU
    fill(20);
  }
  else{
    rect(150,300,300,50,10); //MAIN MENU
  }
  
  textSize(22);
  fill(255);
  text(textes[langId][10],300,185); // RESUME
  text(textes[langId][11],300,260); // RESTART
  text(textes[langId][12],300,335); // MAIN MENU
  
}