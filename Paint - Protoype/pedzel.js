var ksztalt="koło";

//Kwadrat
function mal_kw()
{
  if(mouseX>150 && mouseY<400)
  {    
    if(mouseIsPressed===true)
    {
      noStroke();
      fill(kolor);
      square(mouseX-rozmiar/2,mouseY-rozmiar/2,rozmiar)
    }
  }
   ksztalt="kwadrat";
}

//Koło
function mal_ko()
{
  if(mouseX>150 && mouseY<400)
    {
      if(mouseIsPressed===true)
        {
          noStroke();
          fill(kolor);
          circle(mouseX,mouseY,rozmiar)
        }
    }
   ksztalt="koło";
}
/*
function slad()
{
  if(ksztalt=="koło")
  {
    stroke(1);
    fill(kolor);
    circle(mouseX,mouseY,rozmiar);
    noStroke();
  }
  else
  {
    stroke(1);
    fill(kolor);
    square(mouseX-rozmiar/2,mouseY-rozmiar/2,rozmiar);
    noStroke();
  }
  
  fill(255);
  noStroke();
  circle(mouseX,mouseY,rozmiar);
}
*/

function kw_inf()
{
  console.log("Ustawiono kształt pisaka na kwadrat");
}
function ko_inf()
{
  console.log("Ustawiono kształt pisaka na koło");
}