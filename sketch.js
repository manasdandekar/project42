var issImage,spacebg;
var spacecraft1img,spacecraft2img,spacecraft3img,spacecraft4img;
var iss,spacecraft;
var hasDocked = false;

function preload(){
 issImage = loadImage("iss.png");
 spacebg= loadImage("spacebg.jpg");
 spacecraft1img=loadImage("spacecraft1.png");
 spacecraft2img=loadImage("spacecraft2.png");
 spacecraft3img=loadImage("spacecraft3.png");
 spacecraft4img=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(330,165);
  iss.addImage(issImage);
  iss.scale = 0.65;

  spacecraft = createSprite(285,350);
  spacecraft.addImage(spacecraft1img);
  spacecraft.scale = 0.15;
}

function draw() {
  background(spacebg);  

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
     spacecraft.y = spacecraft.y-1;
    }

    if(keyDown("DOWN_ARROW")){
     spacecraft.addImage(spacecraft2img);
     spacecraft.y = spacecraft.y+1;
     }
     
    if(keyDown("LEFT_ARROW")){
     spacecraft.addImage(spacecraft3img);
     spacecraft.x = spacecraft.x-1;
     }

    if(keyDown("RIGHT_ARROW")){
     spacecraft.addImage(spacecraft4img);
     spacecraft.x = spacecraft.x+1;
     }

     if(spacecraft.x<290 && spacecraft.y>210 && spacecraft.y<220){
      hasDocked=true;
      fill("white");
      textSize(30);
      text("Docking Successful",285,350);
    }
    }
  drawSprites();
}

 