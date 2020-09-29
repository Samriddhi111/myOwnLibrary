var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(200,200,20,50);
  gameObject2=createSprite(300,200,50,50)
  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  
   gameObject2.x=mouseX;
   gameObject2.y=mouseY;

   if(isTouching(gameObject1,gameObject2)){
    gameObject1.shapeColor="red";
    gameObject2.shapeColor="red";
   }
    else {
      gameObject1.shapeColor="green";
      gameObject2.shapeColor="green";
    }
  bounceOff(fixedRect,movingRect);

  drawSprites();
}
