var rozmiar = 15;

function rozmiar_dol()
{
   if(rozmiar>1)
    {
      rozmiar=rozmiar-1;
      console.log(`Zmniejszono rozmiar na ${rozmiar}`);
    }
  else
    {
      rozmiar=1;
    }
}
function rozmiar_gora()
{
  rozmiar=rozmiar+1;
  console.log(`Zwiększono rozmiar na ${rozmiar}`);
}
  
function roz_duzy()
{
  rozmiar=25;
  console.log(`Ustawniono rozmiar na duży (${rozmiar})`);
}
  
function roz_normalny()
{
  rozmiar=15;
  console.log(`Ustawniono rozmiar na domyślny (${rozmiar})`);
}
  
  function roz_maly()
{
  rozmiar=5;
  console.log(`Ustawniono rozmiar na mały (${rozmiar})`);
}