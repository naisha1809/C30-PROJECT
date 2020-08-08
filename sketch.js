const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground1;
var box1,box2,box3,box4,box5, box6,box7,box8,box9,box10,box11,box12;
var sling;
var polygon;
var platform;

function setup() {
    createCanvas(1200,400);
    createSprite(400, 200, 50, 50);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(800,200,220,20);
    ground1 = new Ground(600,300,220,20);
    platform= new Ground(400,400,1200,20);

    box1 = new Box(800,176,35,35);
    box2 = new Box(760,176,35,35);
    box3 = new Box(840,176,35,35);
    box4 = new Box(780,140,35,35);
    box5 = new Box(820,140,35,35);
    box6 = new Box(800,104,35,35);
    box7 = new Box(600,276,35,35);
    box8 = new Box(560,276,35,35);
    box9 = new Box(640,276,35,35);
    box10 = new Box(580,240,35,35);
    box11 = new Box(620,240,35,35);
    box12 = new Box(600,204,35,35);

    polygon = new poly(50,200,40);

    sling = new slingshot(polygon.body,{x:200,y:100});
}

function draw(){
    background(255,255,255);
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    ground1.display();

    platform.display();

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
    box12.display();


    polygon.display();
   
    sling.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y :mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if( keyCode === 32){
        sling.attach(polygon.body);
    }
  }


