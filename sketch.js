var path_Img;
var path,jack;
var jackImg;
var leftborder;
var rightborder;
function preload(){
 
path_Img= loadImage("path.png")
jackImg=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png")
}

function setup(){
  createCanvas(400,400);
  
  path=createSprite(200,200);
  path.addImage(path_Img);
  path.velocityY = 4;
  path.scale=1.2;

  jack=createSprite(200,200);
  jack.addAnimation("running",jackImg);

  leftborder = createSprite(45,10,5,800);
  leftborder.visible=false;
  rightborder = createSprite(360,10,5,800);
  rightborder.visible=false;
}


function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  jack.x=World.mouseX

  jack.collide(leftborder);
  jack.collide(rightborder);


  drawSprites();
}
