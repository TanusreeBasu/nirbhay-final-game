var space, obstacles, ship, obstaclesGroup
var niru1, niru2, niru3, niru4, niru5
var obstacle;

function preload(){

ship=loadImage("assets/Innocent.png")
space=loadImage("assets/redspace.jpg")
obstacle1=loadImage("assets/asteroid1.png")
obstacle2=loadImage("assets/asteroid2.png")
obstacle3=loadImage("assets/asteroid3.png")
obstacle4=loadImage("assets/asteroid4.png")
obstacle5=loadImage("assets/asteroid5.png")
}


function setup() {
  createCanvas(displayWidth-100,displayHeight-100);

  spaceship = createSprite(600, 500, 50, 10)
  spaceship.addImage(ship)
  spaceship.scale=0.3

  obstaclesGroup =  new Group()
  
}



function draw() {
  background(space); 
  spawnObstacles()

 spaceship.x=World.mouseX
 for(var i =0; i<obstaclesGroup.length; i++){
 if(obstaclesGroup.get(i).isTouching(spaceship)){
   
    obstaclesGroup.get(i).destroy();
    
   }
 }


  drawSprites();
}

function spawnObstacles(){
  
  if(frameCount% 30 === 0){

    var obstacle = createSprite(200,100,40,10);
    obstacle.velocityY = +6;
obstacle.x = Math.round(random(10, width-100))
obstacle.lifetime = 300;

  obstaclesGroup.add(obstacle);
    var rand = Math.round(random(1,5))
    switch(rand){

    case 1:obstacle.addImage(obstacle1);
    
      break;
    case 2:obstacle.addImage(obstacle2);
           break;  
            
    case 3:obstacle.addImage(obstacle3);
    obstacle.scale= 0.01
           break;
    case 4:obstacle.addImage(obstacle4);
  
           break;
         
    case 5:obstacle.addImage(obstacle5);
   obstacle.scale= 0.002
           break;
      default:break;
    
    }
   




    }
  }



