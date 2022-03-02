
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;

function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;


  var ball_options={
    restitution:0.95,
    frictionAir:0.01
  }

  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  console.log(ball);


  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  

}

function draw() 
{
  background(51);
  Engine.update(engine);
  rectMode(CENTER);
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  fill("green");
  rect(ground.position.x,ground.position.y,380,20);
 
}

