function createGame(){
  
  if (currentSkin!=100){
    sun = new hero(100,200,40,skinsColors[currentSkin]);
  }
  else{
    sun = new hero(100,200,40,`hsl(${magicalThing} ,100%, 50%)`);
  }
  
  
  for(i=0; i<200; i++){
    starX.pop();
    starY.pop();
    starsBG.pop();
  }
  
  earthsEaten = 0;
  for(i=0; i<100; i++){
    earthX.pop();
    earthY.pop();
    earths.pop();
  }
    
  
  for(i=0; i<200; i++){
    starX.push(Math.floor(Math.random()*800));
    starY.push(Math.floor(Math.random()*400));
    starsBG.push(new stars(starX[i],starY[i]));
  }//for stars
  
  for(i=0; i<100; i++){
    earthX.push(Math.floor(Math.random()*8000+200));
    earthY.push(Math.floor(Math.random()*400));
    earths.push(new object(earthX[i],earthY[i], 20));
  }// for earths
  
  sun.y = 200;
  
  earthsEaten = 0;
  finishX = 8500;
  
}