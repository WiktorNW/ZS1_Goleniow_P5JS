function finish(){
  
  image(BG,0,0);
  background("rgba(0,0,0,0.90)");
  
  noStroke();
  textSize(50);
  fill(255);
  textAlign(CENTER, BASELINE);
  text(textes[langId][13],300,75); //FINISH
  textSize(30);
  if (langId==0){
    text(`You ate ${earthsEaten}/100 Earths\n(${earthsEaten/100*100}% of human kind)`,300,150) //SUMMARY  
  }
  else if (langId==1){
    text(`Zjadles ${earthsEaten}/100 Ziem\n(${earthsEaten/100*100}% ludzkiego gatunku)`,300,150)
  }
  
  fill(20);
  rect(150,225,300,50,10); // PLAY AGAIN
  rect(150,300,300,50,10); // MAIN MENU
  
  textSize(22);
  fill(255);
  text(textes[langId][14],300,260); // PLAY AGAIN
  text(textes[langId][12],300,335); // MAIN MENU
  
}