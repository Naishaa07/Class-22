const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,bodies, ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var bodies_options={
    isStatic:true
 }
  bodies=Bodies.rectangle(200,390,50,50,bodies_options);
  World.add(world,bodies);
  console.log(bodies);
  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
}

function draw() {
  background("blue");  
  Engine.update(engine);
  rectMode(CENTER)
 rect (bodies.position.x,bodies.position.y,50,50)
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20)
}