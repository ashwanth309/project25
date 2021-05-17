
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,paper;
var binImg,bin;

function preload(){
binImg=loadImage("dustbingreen.png");

}
function setup() {
	createCanvas(1200, 600);
    

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    ground = new Ground(100,600,2400,40);
	

	
	paper= new Paper(70,540,20);

	bin=createSprite(964,510,20,20);
	bin.addImage(binImg);
	bin.scale=0.45;

	binpart1 = new Dustbin(902,505,10,120);
	binpart2 = new Dustbin(962,565,130,10);
	binpart3 = new Dustbin(1024,505,10,120);
	Engine.run(engine);
    
}


function draw() {

  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  ground.display();
  paper.display();
  binpart1.display();
  binpart2.display();
  binpart3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.postion,{x:65,y:-65});
	}
	
}

