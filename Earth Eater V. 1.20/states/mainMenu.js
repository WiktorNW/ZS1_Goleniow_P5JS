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
  
  fill(20);
  rect(150,192.5,300,50,10)
  rect(150,262.5,300,50,10)
  rect(25,325,135,50,10);
  
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
  fill(skinsColors[currentSkin]);
  circle(50,350,30);
  noStroke()
  fill(255)
  textSize(30);
  
}