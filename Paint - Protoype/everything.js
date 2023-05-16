var pX = 150;

function setup()
{
  createCanvas(550, 500)
  background(255);
}

function draw()
{
  
  //slad();
  
  //kształt pędzla
  if(ksztalt=="koło")
    {
      mal_ko();
    }
  else
    {
      mal_kw()
    }
  
  //panel boczny i dolny
  textAlign(LEFT)
  noStroke();
  fill(225);
  rect(0,0,pX,400)//panel boczny
  stroke(1);
  fill(200);
  rect(0,400,550,100);//panel dolny
  line(pX,0,pX,400);//panel boczny - |
  line(0,150,pX,150);//kształt - rozmiar
  line(pX,400,pX,500)//aktywny kolor - kolor
  
  //strzałka w dół
  fill(0);
  triangle(126,350,131,355,136,350);
  //strzałka w górę
  triangle(126,339,131,334,136,339);
  //panel informacyjny - rozmiar
  fill(255);
  rect(10,330,105,30);
  fill(0);
  noStroke();
  text(`Rozmiar: ${rozmiar}`,25,350);
  
  //panel informacyjny - kolor
  text("Aktywny kolor: ", 35,420);
  stroke(1);
  fill(kolor);
  rect(10,430,130,60)
  
  //ramka
  strokeWeight(2);
  line(1, 1, 1, 499);
  line(1, 499, 549, 499);
  line(549, 499, 549, 1);
  line(549, 1, 1, 1);
  
  //pędzel
  fill(0);
  noStroke();
  textAlign(CENTER);
  text(`Aktualny kształt pisaka to: \n${ksztalt}`,75,40);
  
  //pędzel - koło
  stroke(0);
  fill(255);
  square(95,100,30);
  fill(kolor);
  circle(110,115,20);
  
  //pędzel - kwadrat
  stroke(0);
  fill(255);
  square(25,100,30);
  fill(kolor);
  square(30,105,20)
  
}