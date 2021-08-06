const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball,ball_2,ball_3,ball_4,ball_options; 
var con,con_2,con_3,con_4
var roof;

//Create multiple bobs, mulitple ropes varibale here

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(200,50,10,ball_options);
    World.add(world,ball);

    ball_2 = Bodies.circle(200,50,10,ball_options);
    World.add(world,ball_2);

    ball_3 = Bodies.circle(200,50,10,ball_options);
    World.add(world,ball_3);

    ball_4 = Bodies.circle(200,50,10,ball_options);
    World.add(world,ball_4);

    con = Matter.Constraint.create({
        pointA:{x:400,y:100},
        bodyB:ball,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
    })

    con_2 = Matter.Constraint.create({
      pointA:{x:380,y:100},
      bodyB:ball,
      pointB:{x:0,y:0},
      length:100,
      stiffness:0.1
  })

   con_2 = Matter.Constraint.create({
    pointA:{x:380,y:100},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,)

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
