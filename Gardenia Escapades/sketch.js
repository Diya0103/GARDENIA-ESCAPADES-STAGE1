var gameState=0;
var homepage, gameGarden;
var playBtn, playBtnImage;
var textBubble;
var peter,peterImage;
var emma,emmaImage;
var Gender;

function preload(){
  homepage= loadImage("images/homepagegarden.png");
  playBtnImage= loadImage("images/play.png");
  textBubble= loadImage("images/text_bubble.png");
  gameGarden= loadImage("images/gamegardenstage1.jpg");
  peterImage= loadImage("images/peter1.png");
  emmaImage=loadImage("images/emma1.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  playBtn= createSprite(displayWidth/2,displayHeight-400);
  playBtn.addImage(playBtnImage);
  
  
}

function draw() {
  
  if(gameState===0){
    background(homepage);
    image(textBubble,displayWidth/11, displayHeight/6);
    fill("green");
    textSize(28);
    textStyle(BOLD);
    text("WELCOME TO",displayWidth/11+130,displayHeight/4+40);
    text("GARDENIA ESCAPADES",displayWidth/11+80,displayHeight/4+120);
    if(mousePressedOver(playBtn)){
      //SELECT CHARACTER
      playBtn.x= displayWidth+100;
      gameState=1;
    }
  }
  if (gameState===1){
    background(gameGarden)
    image(textBubble,displayWidth/6,displayHeight/5,400,300);
    fill("white");
    textStyle(BOLD);
    textFont("arial")
    textSize(20);
    text("SELECT YOUR CHARACTER",displayWidth/6+70,displayHeight/3-40);
      peter= createSprite(displayWidth/6+70,displayHeight/3+110)
      peter.addImage(peterImage);
      emma= createSprite(displayWidth/6+250,displayHeight/3+110)
      emma.addImage(emmaImage)
    
        if(mousePressedOver(peter)){
        gameState=2;
        Gender= "P";
    } else if(mousePressedOver(emma)){
      gameState=2;
      Gender= "E";
    }
      console.log(emma.x);
  }

  if(gameState===2){
    background(gameGarden);
   emma.visible= false;
    
  }
 
  

  drawSprites();
}
