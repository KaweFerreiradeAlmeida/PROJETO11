
var ship,ship_running,ship_collided;
var sea,seaImage
function preload(){
 seaImage = loadImage("sea.png");
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");


}

function setup(){
  createCanvas(400,400);
  ship = createSprite(100,200,50,100);
  ship.addAnimation("mexendo",ship_running);
  ship.veloctyX = 5
  ship.scale=0.20
  sea = createSprite(500,330,100,500);
sea.addImage(seaImage);
seaImage.veloctyX = 5;
sea.scale=0;

}

function draw() {
  background(seaImage);

if (seaImage.x < 0){
 seaImage.x = sea.width/2;
}

    drawSprites();

 
}