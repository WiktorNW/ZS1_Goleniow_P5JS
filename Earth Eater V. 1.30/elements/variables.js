var beta = 0; //beta version of this game - https://editor.p5js.org/WiktorNW06_WIP/sketches/P_LYNfwva

var game = 0; //state of the game (if 1 - game running)
var options = 0; //if options menu is turned on
var fps = 0 //shows fps
var gamePause = 0; //in game pause
var MainMenu = 1; //main menu screen
var end = 0; //end of the game
var skinsMenu = 0; //menu where you can change sun skin
var loading = 0; //loading...
var achievements = 0; //achievements

var settingsSite = 1; //site of settings

var flagEN; //flag of England
var flagPL; //flag of Poland

var lang = ["EN","PL"]; //array which displays language in options
var flags = ["flags/EnglandFlag.jpg","flags/PolandFlag.jpg"]; //array which displays flag of selected language in settings
var langId = 0; //id of languages (connected with array 'lang')

var starX = []; //array of stars' x position
var starY = []; //array of stars' y position
var starsBG = []; //array for stars in background

var earthX = []; //array of earths' X position
var earthY = []; //array of earths' y position
var earths = []; //array of earths

var earthsEated = []; //array that helps to remove eaten Earths
var earthsEaten = 0; //number of eaten Earths
var finishX = 8500; //line that ends this game

var BG; //background for main menu, skins menu, settings menu, pause and end screen

var skinsColors = [
  "#ffff00","#ffffff","#111111","#ff0000","#00ff00","#0000ff",
  "#ff9900","#00ffff","#dddddd","#9999ff","#ff99ff","#5f3900",
  "#330000","#cddc39","#673ab7","#009688","#ff005e","#85796a",
]; //sun skins
var currentSkin = 0; //no. of current skin

var lSpeed = 8; //speed of loading elements
var sPos = -200; //pos of sun in loading
var ePos = -100;  //pos of earth in loading

var starNo = 0; //used to create infinite star effect
var magicalThing = 1;//A Kind Of Magic

var achGet = [false, false, false, false, false, false, false, false]; //unlocked achievements
var achPopUp = 0; //unlocked achievement popup
var timesPlayed = 0; //number of times played game