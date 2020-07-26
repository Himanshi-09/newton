
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var roof1;
var pendulum1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	roof1 = new roof(400,200,300,20);
	pendulum1 = new pendulum(400,400,50);
	pendulum2 = new pendulum(450,400,50);
	pendulum3 = new pendulum(500,400,50);
	pendulum4 = new pendulum(350,400,50);
	pendulum5 = new pendulum(300,400,50);
	rope1 = new ropes(pendulum1.body,roof1.body,{x:400,y:200},0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  roof1.display();
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  //rope1.display();
  drawSprites();
 
}



