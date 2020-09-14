var bananaImage, banana,bananaGroup, obstacleImage, obstacleGroup,rock, b1,b2, score, player_running, Monkey, ground;

function preload() {
b2 = loadImage("jungle.jpg")
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("stone.png");
}

function setup() {
 createCanvas(400,400); 
  b1 = createSprite(200,200,400,400);
  b1.addImage(b2);
  b1.velocityX = -4;
  b1.x = b1.width/2;
  
  Monkey = createSprite(100,350,10,10);
  Monkey.addAnimation("running", player_running);
  Monkey.scale = 0.1;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  score = 0;
  
  ground = createSprite(200,380,400,10);
  ground.visible = false;
}

function draw () {
  background(220);
  
  if(Monkey.isTouching(bananaGroup)) {
    bananaGroup.destroyEach();
    score = score + 2; 
    Monkey.scale = Monkey.scale + score/1000
  }
  if(Monkey.isTouching(obstacleGroup)) {
    obstacleGroup.destroyEach();
    score = 0;
    Monkey.scale = 0.1;
  }
  
   if(keyDown("space")) {
    Monkey.velocityY = -12 ;
  }
  Monkey.velocityY = Monkey.velocityY + 0.8;
  Monkey.collide(ground);
 
  rock();
  food();
  drawSprites();
  fill("white");
  text("Score: " + score, 350,50);
}


function food (){
  if(World.frameCount%80===0) {
    var banana = createSprite(400,random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -7;
    banana.lifetime = 100;
    banana.scale = 0.05;
    bananaGroup.add(banana);
  }
}

function rock(){
 if(World.frameCount%300===0) {
   var rock = createSprite(400,340);
   rock.addImage(obstacleImage);
   rock.velocityX = -9;
   rock.lifetime = 80;
   rock.scale = 0.10;
   obstacleGroup.add(rock);
 }
}
  