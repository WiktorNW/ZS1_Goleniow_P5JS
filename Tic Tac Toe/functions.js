function mouseClicked(){
  
  //TURN X
  
  if (turn==0){
    if (win==0 && squares[0]=="" && mouseX>200+133.3*0 && mouseX<333.3+133.3*0 && mouseY>100+133.3*0 && mouseY<233.3+133.3*0){
      fill(0);
      textSize(50);
      squares[0] = "X";
      turn=1;
      moves+=1;
    }
    
    else if (win==0 && squares[1]=="" && mouseX>200+133.3*1 && mouseX<333.3+133.3*1 && mouseY>100+133.3*0 && mouseY<233.3+133.3*0){
      fill(0);
      textSize(50);
      squares[1] = "X";
      turn=1;
      moves+=1;
    }
    
    else if (win==0 && squares[2]=="" && mouseX>200+133.3*2 && mouseX<333.3+133.3*2 && mouseY>100+133.3*0 && mouseY<233.3+133.3*0){
      fill(0);
      textSize(50);
      squares[2] = "X";
      turn=1;
      moves+=1;
    }
    
    else if (win==0 && squares[3]=="" && mouseX>200+133.3*0 && mouseX<333.3+133.3*0 && mouseY>100+133.3*1 && mouseY<233.3+133.3*1){
      fill(0);
      textSize(50);
      squares[3] = "X";
      turn=1;
      moves+=1;
    }
    
    else if (win==0 && squares[4]=="" && mouseX>200+133.3*1 && mouseX<333.3+133.3*1 && mouseY>100+133.3*1 && mouseY<233.3+133.3*1){
      fill(0);
      textSize(50);
      squares[4] = "X";
      turn=1;
      moves+=1;
    }
    
    else if (win==0 && squares[5]=="" && mouseX>200+133.3*2 && mouseX<333.3+133.3*2 && mouseY>100+133.3*1 && mouseY<233.3+133.3*1){
      fill(0);
      textSize(50);
      squares[5] = "X";
      turn=1;
      moves+=1;
    }
    
    else if (win==0 && squares[6]=="" && mouseX>200+133.3*0 && mouseX<333.3+133.3*0 && mouseY>100+133.3*2 && mouseY<233.3+133.3*2){
      fill(0);
      textSize(50);
      squares[6] = "X";
      turn=1;
      moves+=1;
    }
    
    else if (win==0 && squares[7]=="" && mouseX>200+133.3*1 && mouseX<333.3+133.3*1 && mouseY>100+133.3*2 && mouseY<233.3+133.3*2){
      fill(0);
      textSize(50);
      squares[7] = "X";
      turn=1;
      moves+=1;
    }
    
    else if (win==0 && squares[8]=="" && mouseX>200+133.3*2 && mouseX<333.3+133.3*2 && mouseY>100+133.3*2 && mouseY<233.3+133.3*2){
      fill(0);
      textSize(50);
      squares[8] = "X";
      turn=1;
      moves+=1;
    }
  }
  
  //TURN O
  
  else if (turn==1){
    if (win==0 && squares[0]=="" && mouseX>200+133.3*0 && mouseX<333.3+133.3*0 && mouseY>100+133.3*0 && mouseY<233.3+133.3*0){
      fill(0);
      textSize(50);
      squares[0] = "O";
      turn=0;
      moves+=1;
    }
    
    else if (win==0 && squares[1]=="" && mouseX>200+133.3*1 && mouseX<333.3+133.3*1 && mouseY>100+133.3*0 && mouseY<233.3+133.3*0){
      fill(0);
      textSize(50);
      squares[1] = "O";
      turn=0;
      moves+=1;
    }
    
    else if (win==0 && squares[2]=="" && mouseX>200+133.3*2 && mouseX<333.3+133.3*2 && mouseY>100+133.3*0 && mouseY<233.3+133.3*0){
      fill(0);
      textSize(50);
      squares[2] = "O";
      turn=0;
      moves+=1;
    }
    
    else if (win==0 && squares[3]=="" && mouseX>200+133.3*0 && mouseX<333.3+133.3*0 && mouseY>100+133.3*1 && mouseY<233.3+133.3*1){
      fill(0);
      textSize(50);
      squares[3] = "O";
      turn=0;
      moves+=1;
    }
    
    else if (win==0 && squares[4]=="" && mouseX>200+133.3*1 && mouseX<333.3+133.3*1 && mouseY>100+133.3*1 && mouseY<233.3+133.3*1){
      fill(0);
      textSize(50);
      squares[4] = "O";
      turn=0;
      moves+=1;
    }
    
    else if (win==0 && squares[5]=="" && mouseX>200+133.3*2 && mouseX<333.3+133.3*2 && mouseY>100+133.3*1 && mouseY<233.3+133.3*1){
      fill(0);
      textSize(50);
      squares[5] = "O";
      turn=0;
      moves+=1;
    }
    
    else if (win==0 && squares[6]=="" && mouseX>200+133.3*0 && mouseX<333.3+133.3*0 && mouseY>100+133.3*2 && mouseY<233.3+133.3*2){
      fill(0);
      textSize(50);
      squares[6] = "O";
      turn=0;
      moves+=1;
    }
    
    else if (win==0 && squares[7]=="" && mouseX>200+133.3*1 && mouseX<333.3+133.3*1 && mouseY>100+133.3*2 && mouseY<233.3+133.3*2){
      fill(0);
      textSize(50);
      squares[7] = "O";
      turn=0;
      moves+=1;
    }
    
    else if (win==0 && squares[8]=="" && mouseX>200+133.3*2 && mouseX<333.3+133.3*2 && mouseY>100+133.3*2 && mouseY<233.3+133.3*2){
      fill(0);
      textSize(50);
      squares[8] = "O";
      turn=0;
      moves+=1;
    }
  }
  
}

function gameOver(){
  
  if (moves==9 && win==0){
    text("DRAW",400,565)
  }
  
  // X WON
  
  if(squares[0]=="X" && squares[1]=="X" && squares[2]=="X"){
    text("X WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[3]=="X" && squares[4]=="X" && squares[5]=="X"){
    text("X WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[6]=="X" && squares[7]=="X" && squares[8]=="X"){
    text("X WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[0]=="X" && squares[3]=="X" && squares[6]=="X"){
    text("X WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[1]=="X" && squares[4]=="X" && squares[7]=="X"){
    text("X WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[2]=="X" && squares[5]=="X" && squares[8]=="X"){
    text("X WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[0]=="X" && squares[4]=="X" && squares[8]=="X"){
    text("X WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[2]=="X" && squares[4]=="X" && squares[6]=="X"){
    text("X WON THIS GAME",400,565);
    win=1;
  }
  
  // O WON
  
  else if(squares[0]=="O" && squares[1]=="O" && squares[2]=="O"){
    text("O WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[3]=="O" && squares[4]=="O" && squares[5]=="O"){
    text("O WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[6]=="O" && squares[7]=="O" && squares[8]=="O"){
    text("O WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[0]=="O" && squares[3]=="O" && squares[6]=="O"){
    text("O WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[1]=="O" && squares[4]=="O" && squares[7]=="O"){
    text("O WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[2]=="O" && squares[5]=="O" && squares[8]=="O"){
    text("O WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[0]=="O" && squares[4]=="O" && squares[8]=="O"){
    text("O WON THIS GAME",400,565);
    win=1;
  }
  else if(squares[2]=="O" && squares[4]=="O" && squares[6]=="O"){
    text("O WON THIS GAME",400,565);
    win=1;
  }
  
}