class hero{
  
  constructor(x,y,z,color){
    this.x = x;
    this.y = y;
    this.z = z;
    this.color = color;
    
  }
  
  show(){
    noStroke();
    fill(this.color);
    circle(this.x,this.y,this.z);
  }
  
  goUp(){
    this.y=this.y-5;
  }
  
  goDown(){
    this.y=this.y+2;
  }
}//hero


class object{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  show(){
    noStroke();
    fill("#0066ff")
    circle(this.x,this.y,this.z);
  }
  
}//object


class stars{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  
  show(){
    fill("#fff");
    circle(this.x,this.y,3);
  }
  
}