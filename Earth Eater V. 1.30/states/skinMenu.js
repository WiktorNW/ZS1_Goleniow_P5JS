function skinMenu(){
  
  var skinFieldX = 95;
  var skinFieldY = 80;
  var skinFieldGap = 70;
  
  var skinX = skinFieldX+30
  var skinY = skinFieldY+30
  
  image(BG,0,0);
  background("rgba(0,0,0,0.95)");
  
  noStroke();
  textSize(50);
  fill(255);
  textAlign(CENTER, BASELINE);
  text(`${textes[langId][15]}   `,300,55); //SKINS
  
  if (currentSkin!=100){
    strokeWeight(2);
    if(currentSkin==2){
      stroke(255);
    }
    else{
      stroke(0);
    }
    
    fill(skinsColors[currentSkin]);
  }
  else{
    fill(`hsl(${magicalThing} ,100%, 50%)`);
  }
  circle(390,36,40);
  noStroke();
  fill(255);
  fill(20);
  
  if(mouseX>240 && mouseX<360 && mouseY>325 && mouseY<375){
    fill(50);
    rect(240,325,120,50,10); //Back
    fill(20);
  }
  else{
    rect(240,325,120,50,10); //Back
  }
  
  for(let i = 0; i<3; i++){
    
    for(let j = 0; j<6; j++){
      
      if(mouseX>skinFieldX+skinFieldGap*j && mouseX<skinFieldX+skinFieldGap*j+60 && mouseY>skinFieldY+skinFieldGap*i && mouseY<skinFieldY+skinFieldGap*i+60){
        fill(50);
        square(skinFieldX+skinFieldGap*j,skinFieldY+skinFieldGap*i,60,10);
        fill(20);
      }
      else{
        square(skinFieldX+skinFieldGap*j,skinFieldY+skinFieldGap*i,60,10);
      }
      
      
      noStroke()
    
    }//for j
    
  }//for i
  
  for(let k = 0; k<18; k++){
          
    fill(skinsColors[k]);
    strokeWeight(2);
    if (k == 2){
      stroke(255);
    }
    else{
      stroke(0);
    }
    if(k<6){
      circle(skinX+skinFieldGap*k,skinY,40);
    }
    if(k>5 && k<12){
      circle(skinX+skinFieldGap*(k-6),skinY+skinFieldGap,40);
    }
    if(k>11 && k<18){
      circle(skinX+skinFieldGap*(k-12),skinY+skinFieldGap*2,40);
    }
        
  }//for k
      

  fill(255);
  textSize(22);
  text(textes[langId][6],300,360); //BACK
  textAlign(LEFT);
  
}