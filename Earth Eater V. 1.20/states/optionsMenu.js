function optionsMenu(){
  
  image(BG,0,0);
  background("rgba(0,0,0,0.90)");
  
  //title
  
  noStroke();
  textSize(50);
  fill(255);
  textAlign(CENTER, BASELINE);
  text(textes[langId][3],300,55); //SETTINGS
  
  if(settingsSite==1){

    //field

    fill(20);
    rect(50,100,500,50,10); //FPS
    rect(50,170,500,50,10); //Lang
    rect(240,325,120,50,10); //Back
    fill(40);
    rect(400,325,50,50,10); //Site 1
    fill(20);
    rect(460,325,50,50,10); //Site 2

    

    textAlign(LEFT);

    //text

    fill(255);
    textSize(22);
    text(textes[langId][4],60,135); //FPS
    text(textes[langId][5] + lang[langId],60,205); //LANG
    textAlign(CENTER);
    text(textes[langId][6],300,360); //BACK
    text("1",425,360); //Site 1
    text("2",485,360); //Site 2
    
    textAlign(LEFT);
    textSize(22);
    //rect(475,177.5,64,36)
    if(langId==0){
      image(flagEN,475,177.5);
    }
    else if(langId==1){
      image(flagPL,475,177.5);
    }

    //checkbox

    square(510,110,30,5)

    if(fps==1){
      fill(0);
      square(512.5,112.5,25,5);
      fill(255);
    }

    textAlign(CENTER,BASELINE);

  }
  
  else if(settingsSite==2){
    
    fill(20);
    rect(50,100,500,50,10); //Font
    rect(240,325,120,50,10); //Back
    rect(400,325,50,50,10); //Site 1
    fill(40);
    rect(460,325,50,50,10); //Site 2
    fill(20);
    
    
    rect(50,240,150,75,10); //Go Up
    rect(250,240,300,75,10); //About
    
    
    textAlign(LEFT);

    //text

    fill(255);
    textSize(22);
    if(fontId==0){
      text(textes[langId][16] + textes[langId][18],60,135); //NEW
    }
    else if(fontId==1){
      text(textes[langId][16] + textes[langId][17],60,135); //OLD
    }
    textAlign(CENTER);
    text(textes[langId][6],300,360); //BACK
    text("1",425,360); //Site 1
    text("2",485,360); //Site 2
    
    
    
    text(textes[langId][7],125,270); //GO UP TEXT
    
    textSize(18);
    text(textes[langId][8],400,260); //ABOUT
    
    textFont(Arial);
    textSize(16);
    textAlign(CENTER);
    text("W / ↑",125,300);
    textAlign(LEFT);

    if(fontId==0){
      textFont(SpaceCrusaders);
    }
    else if(fontId==1){
      textFont(newLandContour);
    }
    
    textSize(22);
    
  }
  
}