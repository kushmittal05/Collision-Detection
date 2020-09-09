function setup() {
  createCanvas(800,400);
  player=createSprite(200,200,50,80);
  player.shapeColor="Green";

  obstacle=createSprite(400,200,80,30);
  obstacle.shapeColor="Green";




}

function draw() {
  background(0);  

player.x=World.mouseX;
player.y=World.mouseY;

if (player.x-obstacle.x<player.width/2+obstacle.width/2&&obstacle.x-player.x<player.width/2+obstacle.width/2
  &&player.y-obstacle.y<player.height/2+obstacle.height/2&&obstacle.y-player.y<player.height/2+obstacle.height/2) {

player.shapeColor="Red";

obstacle.shapeColor="Red"

}

else {
  player.shapeColor="Green";

obstacle.shapeColor="Green"

}


  drawSprites();

}