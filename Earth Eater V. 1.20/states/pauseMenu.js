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
  rect(150,150,300,50,10); // RESUME
  rect(150,225,300,50,10); // RESTART
  rect(150,300,300,50,10); //MAIN MENU
  
  textSize(22);
  fill(255);
  text(textes[langId][10],300,185); // RESUME
  text(textes[langId][11],300,260); // RESTART
  text(textes[langId][12],300,335); // MAIN MENU
  
}