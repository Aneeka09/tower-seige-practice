const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var towerBase1,towerbase2;
var towerblocks,ball,ground;
function preload(){
  img1=loadImage("polygon.png")
}

function setup() {
  createCanvas(900,400);
 engine = Engine.create()
 world=engine.world;
  ground = new Ground(width/2,height,width,20);
  //platform = new Ground(150, 305, 300, 170);
stand1=new Ground(390,300,250,10);
stand2= new Ground(700,200,200,10);

block1=new Blocks(300,275);
block2=new Blocks(330,275);
block3=new Blocks(360,275);
block4=new Blocks(390,275);
block5=new Blocks(420,275);
block6=new Blocks(450,275);
block7=new Blocks(480,275);
block8=new Blocks(330,235);
block9=new Blocks(360,235);
block10=new Blocks(390,235);
block11=new Blocks(420,235);
block12=new Blocks(450,235);
block13=new Blocks(360,195);
block14=new Blocks(390,195);
block15=new Blocks(420,195);
block16=new Blocks(390,155);

blocks1=new Blocks(640,175);
blocks2=new Blocks(670,175);
blocks3=new Blocks(700,175);
blocks4=new Blocks(730,175);
blocks5=new Blocks(760,175);
blocks6=new Blocks(670,135);
blocks7=new Blocks(700,135);
blocks8=new Blocks(730,135);
blocks9=new Blocks(700,95);
  
ball=Bodies.circle(50,200,20);
World.add(world,ball);
slingshot=new SlingShot(ball,{x:100,y:200})

}

function draw() {
  background(0);  
  stand1.display();
  stand2.display();
  ground.display();
fill("purple")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  fill("yellow")
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
fill("red")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  fill("blue")
  blocks7.display();
  blocks8.display();
  blocks9.display();
  imageMode(CENTER);
  image (img1,ball.position.x,ball.position.y,40,40);
  slingshot.display();
  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly()

  
}
