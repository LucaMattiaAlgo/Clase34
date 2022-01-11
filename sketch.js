const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, ground;
var ball, rope;

function setup() {
  createCanvas(1360, 655);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  box1 = new Box(150,100,85,85);
  box2 = new Box(150,150,85,85);
  box3 = new Box(150,200,85,85);
  box4 = new Box(150,250,85,85);
  box5 = new Box(150,100,85,85);
  box6 = new Box(950,150,85,85);
  box7 = new Box(950,200,85,85);
  box8 = new Box(950,100,85,85);
  box9 = new Box(950,100,85,85);
  box10 = new Box(950,100,85,85);
  box11 = new Box(950,100,85,85);
  ball = new Ball(500,500,100,100);
  rope = new Rope(ball.body,{x:500, y:50});
}

function draw() {
  background(180);
  Engine.update(engine);



  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  ball.display();
  rope.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY })

}

