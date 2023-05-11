function preload() {
  flagEN = loadImage(flags[0]);
  flagPL = loadImage(flags[1]);
  BG = loadImage('graphics/EarthEater.png');
  BGL = loadImage('graphics/EarthEaterLoading.png');
}//preload


function setup() {
  createCanvas(600, 400);
  
  newLandContour = loadFont("fonts/newlandcontour.TTF");
  Arial = loadFont("fonts/arial.ttf");
  SpaceCrusaders = loadFont("fonts/SpaceCrusaders.ttf");
  
}