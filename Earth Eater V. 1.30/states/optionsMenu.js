var setTextY = 55;
var setFPSFieldY = 100;
var setLangFieldY = 170;
var setBackFieldY = 325;
var setFontFieldY = 240;

function optionsMenu(){
  
  image(BG,0,0);
  background("rgba(0,0,0,0.90)");
  
  //title
  
  noStroke();
  textSize(50);
  fill(255);
  textAlign(CENTER, BASELINE);
  text(textes[langId][3],300,setTextY); //SETTINGS

  //field

  fill(20);
  
  if(options==1 && mouseX>50 && mouseX<550 && mouseY>setFPSFieldY && mouseY<setFPSFieldY+50){
    fill(50);
    rect(50,setFPSFieldY,500,50,10); //FPS
    fill(20);
  }
  else{
    rect(50,setFPSFieldY,500,50,10); //FPS
  }
  
  if(options==1 && mouseX>50 && mouseX<550 && mouseY>setLangFieldY && mouseY<setLangFieldY+50){
    fill(50);
    rect(50,setLangFieldY,500,50,10); //Lang
    fill(20);
  }
  else{
    rect(50,setLangFieldY,500,50,10); //Lang
  }
  
  if(options==1 && mouseX>240 && mouseX<360 && mouseY>setBackFieldY && mouseY<setBackFieldY+50){
    fill(50);
    rect(240,setBackFieldY,120,50,10); //Back
    fill(20);
  }
  else{
    rect(240,setBackFieldY,120,50,10); //Back
  }
  
  textAlign(LEFT);

  //text

  fill(255);
  textSize(22);
  text(textes[langId][4],60,setFPSFieldY+35); //FPS
  text(textes[langId][5] + lang[langId],60,setLangFieldY+35); //LANG
  textAlign(CENTER);
  text(textes[langId][6],300,setBackFieldY+35); //BACK
    
  textAlign(LEFT);
  textSize(22);
  //rect(475,177.5,64,36)
  if(langId==0){
    image(flagEN,475,setLangFieldY+7.5);
  }
  else if(langId==1){
    image(flagPL,475,setLangFieldY+7.5);
  }

  //checkbox

  square(510,setFPSFieldY+10,30,5)

  if(fps==1){
    fill(0);
    square(512.5,setFPSFieldY+12.5,25,5);
    fill(255);
  }

  textAlign(CENTER,BASELINE);
    
  fill(20);
    
  rect(50,240,150,75,10); //Go Up
  rect(250,240,300,75,10); //About
  
  fill(255);  
  
  text(textes[langId][7],125,270); //GO UP TEXT
    
  textSize(18);
  text(textes[langId][8],400,260); //ABOUT
    
  textFont(Arial);
  textSize(16);
  textAlign(CENTER);
  text("W / ↑",125,300);
  textAlign(LEFT);
  textFont(SpaceCrusaders);
  textSize(22);
  textAlign(LEFT);
}