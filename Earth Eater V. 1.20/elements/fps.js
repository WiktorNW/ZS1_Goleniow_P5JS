function fpsShow(){
  
  textAlign(LEFT);
  textSize(14);
  fill(255);
  text(`${Math.floor(frameRate())} FPS`,540,20);
  
}