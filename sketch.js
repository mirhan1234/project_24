
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600,height,1200,20)
leftDustbin=new Dustbin(710,330,20,100);
centerDustbin=new Dustbin(800,380,200,20);
rightDustbin=new Dustbin(890,330,20,100);

paper=new Paper(100,300,40)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  leftDustbin.display();
  centerDustbin.display();
  rightDustbin.display();
  ground.display();
  paper.display();
  
  drawSprites();

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
	}
}


