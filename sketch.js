var trex,trexImage,edges;

function preload(){
  trexImage=loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup() 
{
  createCanvas(1000,400);
  trex=createSprite(50,300);
  trex.addAnimation("trexRunning",trexImage);
  trex.scale=0.5;
  edges=createEdgeSprites();
}

function draw() 
{
background("aqua");
if (keyDown("space")){
  trex.velocityY=-6;  
}
trex.velocityY=trex.velocityY+0.6;  //adding gravity
trex.collide(edges[3]) // bottom edges
//trex.bounceOff(edges[2])  //up edge
drawSprites();
}