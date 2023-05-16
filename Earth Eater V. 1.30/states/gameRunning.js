function gameRunning(){
  
  background(0);
  
  fill(0)
  rect(finishX,0,1,400);
  finishX += -1
  
  earthsEated = [];
  
  for(i=0; i<starsBG.length; i++){
    starsBG[i].show();
    starsBG[i].x += -1;
  }//for stars
  
  for(i=0; i<earths.length; i++){
    earths[i].show();
    earths[i].x += -1;
    if(dist(earths[i].x, earths[i].y,sun.x,sun.y)<30){
      earthsEated.push(i);
      earthsEaten+=1;
    }
  }//for earths
  
  for (let i of earthsEated){
    earths.splice(i,1);
  }
  
  sun.show();
  if(sun.y<380){
    sun.goDown();
  }
  
  
  if(sun.y>20 && sun.y<380 && keyIsPressed){
    keyPressed()
  }
  
  starNo++;
  
  if(starNo==200){
    starNo=0;
  }
  
  if(starsBG[starNo].x<=sun.x-100){
    starsBG[starNo].x=sun.x+600;
  }
  
  if(currentSkin==100){
    sun.color = `hsl(${magicalThing} ,100%, 50%)`;
  }
  
  fill("rgba(255,255,255,0.5)")
  textAlign(CENTER);
  rect(65,5,170,50,5);
  
  if(game==1 && mouseX>5 && mouseX<55 && mouseY>5 && mouseY<55){
    fill("rgba(255,255,255,0.75)")
    square(5,5,50,5);
    fill("rgba(255,255,255,0.5)")
  }
  else{
    square(5,5,50,5);
  }
  
  textSize(14);
  textStyle(BOLD);
  fill(0);
  text(textes[langId][0],152,25);
  textSize(16);
  text(earthsEaten,150,45);
  rect(17.5,15,10,30);
  rect(32.5,15,10,30);
  
  if(finishX==sun.x){
    game=0;
    end=1;
  }
  
}