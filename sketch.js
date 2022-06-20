var sea, seaImg;
var ship, shipImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite (225,200,400,400);
  sea.addImage("sea",seaImg);
  sea.scale = 0.3;
  ship = createSprite(250,250,50,50);
  ship.addAnimation("ship",shipImg);
  ship.scale = 0.2;
}

function draw() {
  background("blue");
  if(sea.x400){
    sea.x = sea.width/200;
    }
  drawSprites();
}