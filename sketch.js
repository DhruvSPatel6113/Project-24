const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.

	paper = new Paper();
	ground = new Ground();
	bin1 = new bin(600,579,100,20);
	bin2 = new bin(545,539,20,100);
	bin3 = new bin(655,539,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(20);
 Engine.update(engine);

  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  ground.display();

  keypressed();
  paper.y=paper.y*(-5);

   
}

function keypressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{ x:0.1,y:-2.4 });

	}
}

