function showVersion(){
  
  var versionNo = "1.30";
  
  fill(255);
  textSize(8);
  textAlign(LEFT);
  
  if(beta==1){
    text(`V. B ${versionNo}`,555,395)
  }
  else{
    text(`V. ${versionNo}`,560,395)
  }
  
  if(MainMenu!=1 && beta==1){
    textAlign(CENTER);
    text("Beta build",300,395);
  }
  
  textAlign(LEFT);
}