function loadingGame(){
  
  background(0);
  image(BGL,0,0);
  
  textSize(50);
  textAlign(CENTER);
  text(textes[langId][1],300,100);
  textSize(30);
  text(textes[langId][19],300,300)
  fill("#ffff00");
  circle(sPos,225,40);
  fill("#0066ff");
  circle(ePos,225,20);
}