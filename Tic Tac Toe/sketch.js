var turn = 0;
var moves = 0;
var squares = ["","","","","","","","",""];
var win = 0;

class field{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  show(){
    square(this.x,this.y,400);
    
    //plansza
    for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
        square(this.x+133.3*i,this.y+133.3*j,133.4)
      }
    }
  }
}


function setup() {
  createCanvas(800, 600);
  gameField = new field(200,100);
}

function draw() {
  background(220);
  fill(255);
  
  gameField.show();
  
  
  fill(0);
  textSize(50);
  textAlign(CENTER);
  text("TIC TAC TOE",400,70);
  
  gameOver();
  
  text(squares[0],267+133.3*0,180+133.3*0)
  text(squares[1],267+133.3*1,180+133.3*0)
  text(squares[2],267+133.3*2,180+133.3*0)
  
  text(squares[3],267+133.3*0,180+133.3*1)
  text(squares[4],267+133.3*1,180+133.3*1)
  text(squares[5],267+133.3*2,180+133.3*1)
  
  text(squares[6],267+133.3*0,180+133.3*2)
  text(squares[7],267+133.3*1,180+133.3*2)
  text(squares[8],267+133.3*2,180+133.3*2)
  
  textAlign(LEFT);
  textSize(12);
  
  if (turn==0 && win==0){
    textSize(100);
    fill(0);
    text("X",70,300);
    fill(200);
    text("O",665,300);
    textSize(12);
} 
  else if (turn==1 && win==0){
    textSize(100);
    fill(200);
    text("X",70,300);
    fill(0);
    text("O",665,300);
    textSize(12);
  }
  if (win==1 || moves==9){
    textSize(100);
    fill(200);
    text("X",70,300);
    text("O",665,300);
    textSize(12);
  }
  
}