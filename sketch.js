const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundimage;
var snow;
var ground;
var s;

function preload(){
  backgroundimage=loadImage("snow1.jpg") 
 // snow=loadImage("snow4.webp") 

}

function setup() {
  createCanvas(800,500);
 
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(400, 450, 900, 10);
    snow = new Snow(400, 40, 40, 40);
    
}

function draw() {
    //background("black");  
   //rectMode(CENTER)

    image(backgroundimage,1,1,797,497)
   // image(snow,500,40,220,220)
  
    for(var i=0;i<800;i=i+60){
      s=new Snow(i,250, 40, 40);
      s.display();

  }
    console.log(s);

    ground.display();
    snow.display();
    
 // drawSprites();
}
