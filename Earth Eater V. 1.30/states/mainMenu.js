function mainMenu(){
  
  background(0);
  image(BG,0,0);
  
  
  //title
  
  fill(255);
  textSize(50);
  textAlign(CENTER, BASELINE);
  stroke(0);
  text(textes[langId][1],300,150);
  
  if(beta==1){
    textSize(25);
    text("Beta",300,180);
  }
  
  noStroke();
  
  //options
  
  fill(20)
  //PLAY
  if(MainMenu==1 && mouseX<450 && mouseX>150 && mouseY>192.5 && mouseY<242.5){
    fill(50);
    rect(150,192.5,300,50,10)// PLAY
    fill(20);
  }
  else{
    rect(150,192.5,300,50,10)// PLAY
  }
  
  //SETTINGS
  if(MainMenu==1 && mouseX<450 && mouseX>150 && mouseY>262.5 && mouseY<312.5){
    fill(50);
    rect(150,262.5,300,50,10)// SETTINGS
    fill(20);
  }
  else{
    rect(150,262.5,300,50,10)// SETTINGS
  }
  
  //SKINS
  if(MainMenu==1 && mouseX>25 && mouseX<160 && mouseY>325 && mouseY<375){
    fill(50);
    rect(25,325,135,50,10);// SKINS
    fill(20);
  }
  else{
    rect(25,325,135,50,10);// SKINS
  }
  
  //ACHIEVEMENTS
  if(MainMenu==1 && mouseX>45 && mouseX<120 && mouseY>262.5 && mouseY<312.5){
    fill(50);
    rect(45,262.5,75,50,10);// ACHIEVEMENTS
    fill(20);
  }
  else{
    rect(45,262.5,75,50,10);// ACHIEVEMENTS
  }
  
  image(trophy,64,268);
  
  fill(255);
  textSize(30);
  text(textes[langId][2],300,230);
  text(textes[langId][3],300,300);
  textSize(22)
  text(textes[langId][15],110,360);
  strokeWeight(2);
  if(currentSkin==2){
    stroke(255);
  }
  else{
    stroke(0);
  }
  if (currentSkin!=100){
    fill(skinsColors[currentSkin]);
  }
  else{
    fill(`hsl(${magicalThing} ,100%, 50%)`);
  }
  circle(50,350,30);
  noStroke()
  fill(255)
  textSize(30);
  
}