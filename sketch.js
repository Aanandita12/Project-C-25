
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1,ball1;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	var option={
		isStatic:false,
		restitution:0.3,
        friction:0.5
     //   density:1.2		
	}
    
	box1  = new Box(700,320,70,70);
	ball1 = new ball(70,70,60,20);
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		 Matter.Body.appleForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	 }
  }
  

function draw() {
  
  background(0);
  
   Engine.update(engine);
   console.log(box1.body.position.x);
   console.log(box1.body.position.y);
   console.log(box1.body.angle);
   colsole.log(ball1.body.ellipse);

  box1.display();
  ball1.display();
  
  drawSprites();
 
}



