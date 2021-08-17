var fixedRect, movingRect;
var rect1, rect2, rect3, rect4, rect5;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;

  rect1 = createSprite(100, 100, 100, 30);
  rect2 = createSprite(300,100,100,30);
  rect3 = createSprite(500,100,100,30);
  rect4 = createSprite(800,100,50,50);
  rect5 = createSprite(800,700,50,50);

  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
  rect3.shapeColor = "green";
  rect4.shapeColor = "pink"
  rect5.shapeColor = "gold";

  // rect4.velocityX = 3;
  // rect5.velocityX = -3;
  rect4.velocityY = 3;
  rect5.velocityY = -3;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(fixedRect, movingRect)){
   movingRect.shapeColor ="yellow";
   fixedRect.shapeColor = "yellow";
 }
else if(isTouching(movingRect, rect1)){
  movingRect.shapeColor = "blue";
  rect1.shapeColor = "blue";
}
else if(isTouching(movingRect, rect2)){
  movingRect.shapeColor = "orange";
  rect2.shapeColor = "orange";
}
else if(isTouching(movingRect, rect3)){
  movingRect.shapeColor = "white";
  rect3.shapeColor = "white";
}
 else{
   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";
   rect1.shapeColor = "green";
   rect2.shapeColor = "green";
   rect3.shapeColor = "green";
 }

 BouceOff(rect5,rect4);

  drawSprites();
}