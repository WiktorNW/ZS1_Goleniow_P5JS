var achY = 100;
var achTextY = 55;
var achGap = 130;
var achBackY = 1150;

function achievementMenu(){
  
  image(BG,0,0);
  background("rgba(0,0,0,0.90)");
  
  noStroke();
  textSize(50);
  fill(255);
  textAlign(CENTER, BASELINE);
  text(textes[langId][20],300,achTextY); //ACHIEVEMENTS
  
  fill(20);
  
  for(let i=0; i<8; i++){
    rect(50,achY+achGap*i,500,100,10); //ach
    
    if(achGet[i]!=true){
    fill(150);
  }
  else{
      fill(255);
  }
    textAlign(CENTER);
    textSize(30);
    text(textes[langId][16][i],300,achY+35+achGap*i);
    textSize(18);
    text(textes[langId][17][i],300,achY+75+achGap*i);
    fill(20);
  }
  
  fill(20);
  textSize(22);
  
  if(achievements==1 && mouseX>240 && mouseX<360 && mouseY>achBackY && mouseY<achBackY+50){
    fill(50);
    rect(240,achBackY,120,50,10); //Back
    fill(20);
  }
  else{
    rect(240,achBackY,120,50,10); //Back
  }
  fill(255);
  text(textes[langId][6],300,achBackY+35); //BACK
  text("Achievement PopUps Coming Soon",300,achBackY-10);
}

/*function achPop(achID){
  
  if(achPopUp==1){
    fill(20);
    rect(200,25,400,100,10)
    
    setTimeout(function(){
      achPopUp=0;
    },3000);
    
  }
  
}*/