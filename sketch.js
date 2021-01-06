var canvas;
var music;
var surface1;
var surface2;
var surface3,surface4;
var box;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
    music = loadSound("music.mp3");
 
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    surface1=createSprite(50,580,150,20);
    surface2=createSprite(210,580,150,20);
    surface3=createSprite(370,580,150,20);
    surface4=createSprite(530,580,150,20);

    surface1.shapeColor="yellow";
    surface2.shapeColor="red";
    surface3.shapeColor="blue";
    surface4.shapeColor="green";

    //create box sprite and give velocity
    box=createSprite(20,40,40,40);
    box.shapeColor="white";
    box.x=Math.round(random(20,600));
    box.velocityX=Math.round(random(5,15));
    box.velocityY=Math.round(random(8,10));
    if (gameState===PLAY){
    music.loop();
    }
   
}

function draw() {
    //background(rgb(169,169,169));
    background(220);

    if (gameState===PLAY){

       

    //add condition to check if box touching surface and make it box
    if (surface1.isTouching(box)&&box.bounceOff(surface1)){
    box.shapeColor="yellow";
    }

    if (surface2.isTouching(box)&&box.bounceOff(surface2)){
    box.shapeColor="red";
    }

    if (surface3.isTouching(box)){
        gameState=END;
    box.shapeColor="blue";
    box.velocityX=0;
    box.velocityY=0;
    music.stop();

    }

    if (surface4.isTouching(box)&&box.bounceOff(surface4)){

    box.shapeColor="green";

    }

    bounceOff();

    }
    
    
    if (gameState===END){
      
        fill("yellow");
        text("GAMEOVER PRESS R TO RESTART ",200,300);
        noFill();
    


    }
   
    if (keyDown("r")&&gameState===END){
        gameState=PLAY;
        box.x=Math.round(random(20,600));
        box.y=40;
        box.velocityX=Math.round(random(5,15));
        box.velocityY=Math.round(random(8,10));
        box.shapeColor="white";
        music.loop();
       
    }
    
   
    createEdgeSprites();
   
  
    
    drawSprites();
   
}

function bounceOff(){

    if (box.x>600){
        box.velocityX=box.velocityX*(-1);
    }
   
   if (box.x<0){
       box.velocityX=box.velocityX*(-1);
   }

   if (box.y<0){
       box.velocityY=box.velocityY*(-1);
   }

}