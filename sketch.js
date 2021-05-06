const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gamestate;
var form1;
var riddle1;
var barImage,woodenBackground;
var bottle1,bottle2,bottle2,bottle3;
var slingshot;
var platform;
var score = 0;
function preload(){
    barImage = loadImage("images/barImage2.jpg");
    woodenBackground = loadImage("images/simpleBackground.jpg");
    
}
function setup(){
    engine = Engine.create();
    world = engine.world;
createCanvas(displayWidth,displayHeight);
form1 = new Form();

riddle1 = new Riddle();

gamestate=0;


}
function draw(){
    Engine.update(engine);
background(woodenBackground);
if (gamestate===0){
    
    form1.display();
    
}
else if (gamestate===1){
   // form1 = new Form();
    form1.greeting.hide();
    form1.input.hide();
    form1.button.hide();
    //riddle1 = new Riddle();
    riddle1.show();
 riddle1.display();         
 console.log("hello")
// gamestate=2;
}
else if(gamestate === 2)
{
 
riddle1.input.hide();
  riddle1.button.hide();
  riddle1.hide();
  text("You win",500,500)
  text("thank you for playing",500,550)
}

}