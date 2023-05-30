function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  
  ClockFont = loadFont('Clock.ttf');
  sliders();
  
  for (i=0;i<3;i++){
      textShadowSliders[i].style('display:none')
      textColorSliders[i].style('display:none')
      boxShadowSliders[i].style('display:none')
      boxColorSliders[i].style('display:none')
      boxBackgroundSliders[i].style('display:none')
      clockBackgroundSliders[i].style('display:none')
    }
}

function draw() {
  background(10);
  drawingContext.shadowBlur = 0;
  document.body.style.accentColor = `rgb(${textColorSliders[0].value()},${textColorSliders[1].value()},${textColorSliders[2].value()})`;
  
  getTime();
  slidersTexts()
  
  stroke(0)
  fill(`rgb(${clockBackgroundSliders[0].value()},${clockBackgroundSliders[1].value()},${clockBackgroundSliders[2].value()})`);
  strokeWeight(1)
  circle(200,200,350)
  
  drawingContext.shadowBlur = 20;
  
  textFont(ClockFont);
  
  drawingContext.shadowColor = `rgb(${boxShadowSliders[0].value()},${boxShadowSliders[1].value()},${boxShadowSliders[2].value()})`
  fill(`rgb(${boxBackgroundSliders[0].value()},${boxBackgroundSliders[1].value()},${boxBackgroundSliders[2].value()})`)
  rect(155,100,95,35)
  
  stroke(`rgb(${boxColorSliders[0].value()},${boxColorSliders[1].value()},${boxColorSliders[2].value()})`)
  fill(`rgb(${boxColorSliders[0].value()},${boxColorSliders[1].value()},${boxColorSliders[2].value()})`)
  
  
  textAlign(CENTER);
  textSize(20)
  text(`${hrs}:${mint}:${sec}`,200,125)
  
  fill(`rgb(${textColorSliders[0].value()},${textColorSliders[1].value()},${textColorSliders[2].value()})`);
  stroke(`rgb(${textColorSliders[0].value()},${textColorSliders[1].value()},${textColorSliders[2].value()})`)
  drawingContext.shadowColor = `rgb(${textShadowSliders[0].value()},${textShadowSliders[1].value()},${textShadowSliders[2].value()})`;
  
  
  
  //numbers
  
  push();
  translate(200,200)
  for(x=1;x<13;x++){
  strokeWeight(1)
  for(x2=0;x2<5;x2++){
    rotate(6);
    line(0,-165,0,-170)
  }
  strokeWeight(0)
  text(x,0,-145)
  }
  pop();
  
  //second
  
  push();
  translate(200,200)
  rotate(sec*6);
  strokeWeight(2)
  line(0,0,0,-140)
  pop();
  
  //minute
  
  push();
  translate(200,200)
  rotate(((mint * 60 + sec) / 3600) * 360);
  strokeWeight(3)
  line(0,0,0,-100)
  pop();
  
  //hour
  
  push();
  translate(200,200)
  rotate(((hrs * 60 * 60 + mint * 60 + sec) / 86400) * 720);
  strokeWeight(5)
  line(0,0,0,-60)
  pop();
  
  fill(`rgb(${boxBackgroundSliders[0].value()},${boxBackgroundSliders[1].value()},${boxBackgroundSliders[2].value()})`)
  noStroke()
  circle(200,200,10)
  
}

function mouseClicked(){
  if(mouseX>195 && mouseX<205 && mouseY>195 && mouseY<205 && customization==0){
    customization = 1
    for (i=0;i<3;i++){
      textShadowSliders[i].style('display:block')
      textColorSliders[i].style('display:block')
      boxShadowSliders[i].style('display:block')
      boxColorSliders[i].style('display:block')
      boxBackgroundSliders[i].style('display:block')
      clockBackgroundSliders[i].style('display:block')
    }
    resizeCanvas(800,400)
  }
  else if(mouseX>195 && mouseX<205 && mouseY>195 && mouseY<205 && customization==1){
    customization = 0
    for (i=0;i<3;i++){
      textShadowSliders[i].style('display:none')
      textColorSliders[i].style('display:none')
      boxShadowSliders[i].style('display:none')
      boxColorSliders[i].style('display:none')
      boxBackgroundSliders[i].style('display:none')
      clockBackgroundSliders[i].style('display:none')
    }
    resizeCanvas(400,400)
  }
}

function getTime(){
  
  if(hour()<10){
    hrs = "0"+hour();
  }
  else{
    hrs = hour()
  }
  
  if(minute()<10){
    mint = "0"+minute();
  }
  else{
    mint = minute();
  }
  
  if(second()<10){
    sec = "0"+second();
  }
  else{
    sec = second();
  }
  
}

function sliders(){
  
  //text shadow
  
  textShadowSliders[0] = createSlider(0,255,133);
  textShadowSliders[0].position(405,20);
  textShadowSliders[0].style('120px');
  
  textShadowSliders[1] = createSlider(0,255,251);
  textShadowSliders[1].position(535,20);
  textShadowSliders[1].style('120px');
  
  textShadowSliders[2] = createSlider(0,255,255);
  textShadowSliders[2].position(665,20);
  textShadowSliders[2].style('120px');
  
  //text color
  
  textColorSliders[0] = createSlider(0,255,53);
  textColorSliders[0].position(405,60);
  textColorSliders[0].style('120px');
  
  textColorSliders[1] = createSlider(0,255,190);
  textColorSliders[1].position(535,60);
  textColorSliders[1].style('120px');
  
  textColorSliders[2] = createSlider(0,255,250);
  textColorSliders[2].position(665,60);
  textColorSliders[2].style('120px');
  
  //box shadow
  
  boxShadowSliders[0] = createSlider(0,255,0);
  boxShadowSliders[0].position(405,100);
  boxShadowSliders[0].style('120px');
  
  boxShadowSliders[1] = createSlider(0,255,92);
  boxShadowSliders[1].position(535,100);
  boxShadowSliders[1].style('120px');
  
  boxShadowSliders[2] = createSlider(0,255,146);
  boxShadowSliders[2].position(665,100);
  boxShadowSliders[2].style('120px');
  
  //box color
  
  boxColorSliders[0] = createSlider(0,255,0);
  boxColorSliders[0].position(405,140);
  boxColorSliders[0].style('120px');
  
  boxColorSliders[1] = createSlider(0,255,92);
  boxColorSliders[1].position(535,140);
  boxColorSliders[1].style('120px');
  
  boxColorSliders[2] = createSlider(0,255,146);
  boxColorSliders[2].position(665,140);
  boxColorSliders[2].style('120px');
  
  
  //box background
  
  boxBackgroundSliders[0] = createSlider(0,255,17);
  boxBackgroundSliders[0].position(405,180);
  boxBackgroundSliders[0].style('120px');
  
  boxBackgroundSliders[1] = createSlider(0,255,34);
  boxBackgroundSliders[1].position(535,180);
  boxBackgroundSliders[1].style('120px');
  
  boxBackgroundSliders[2] = createSlider(0,255,41);
  boxBackgroundSliders[2].position(665,180);
  boxBackgroundSliders[2].style('120px');
  
  //clock background
  
  clockBackgroundSliders[0] = createSlider(0,255,0);
  clockBackgroundSliders[0].position(405,220);
  clockBackgroundSliders[0].style('120px');
  
  clockBackgroundSliders[1] = createSlider(0,255,17);
  clockBackgroundSliders[1].position(535,220);
  clockBackgroundSliders[1].style('120px');
  
  clockBackgroundSliders[2] = createSlider(0,255,24);
  clockBackgroundSliders[2].position(665,220);
  clockBackgroundSliders[2].style('120px');
  
}

function slidersTexts(){
  
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "#fff";
  stroke(255)
  fill(255)
  text("Text and clock hands light",600,20)
  text("Text and clock hands color",600,60)
  text("Box shadow light",600,100)
  text("Box text color",600,140)
  text("Box background color",600,180)
  text("Clock background",600,220)
  drawingContext.shadowBlur = 0;
  
}

var hrs;
var mint;
var sec;

var customization = 0;

var textShadowSliders = []
var textColorSliders = []
var boxShadowSliders = []
var boxColorSliders = []
var boxBackgroundSliders = []
var clockBackgroundSliders = []