
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var bob1,bob2,bob3, bob4,bob5,
var rope1,rope2,rope3, rope4,rope5;
var world;


function preload()
{
	
}

function setup() {
var canvas = createCanvas(800, 700);

    

	engine = Engine.create();
	world = engine.world;

    ground = Bodies.rectangle(width/2, 650, width, 10,{isStatic : true});
  World.add(world, ground);  
    

	rope1=new rope(bob1.body,ground.body,-bobDiameter*2,0)
    rope2=new rope(bob2.body,ground.body,-bobDiameter*2,0)
    rope3=new rope(bob3.body,ground.body,-bobDiameter*2,0)
	rope4=new rope(bob4.body,ground.body,-bobDiameter*2,0)
	rope5=new rope(bob5.body,ground.body,-bobDiameter*2,0)
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}


  drawSprites();
 
}



