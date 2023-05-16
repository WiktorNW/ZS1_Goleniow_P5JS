function preload() {
  flagEN = loadImage(flags[0]);
  flagPL = loadImage(flags[1]);
  BG = loadImage('graphics/EarthEater.png');
  BGL = loadImage('graphics/EarthEaterLoading.png');
  trophy = loadImage('graphics/Trophy.png');
}//preload


function setup() {
  createCanvas(600, 400);
  
  Arial = loadFont("fonts/arial.ttf");
  SpaceCrusaders = loadFont("fonts/SpaceCrusaders.ttf");
  
  setInterval(function(){
    FPSCounter = Math.floor(frameRate())
  },1000)
  
}