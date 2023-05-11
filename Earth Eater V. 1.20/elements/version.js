function showVersion(){
  
  fill(255);
  textSize(8);
  textAlign(LEFT);
  
  if(beta==1){
    text("V. B 1.20",555,395)
  }
  else{
    text("V. 1.20",560,395)
  }
  
  if(MainMenu!=1 && beta==1){
    textAlign(CENTER);
    text("Beta build",300,395);
  }
  
  textAlign(LEFT);
}