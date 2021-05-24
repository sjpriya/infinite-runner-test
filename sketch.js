//1. What are group variables? 
//2. Write code for boy to move when down arrow is pressed
//3. Write code for boy to move when right arrow is pressed
//4. Write code to destroy food and increase score when boy is touching it
//5. Think of gameover scenario and implement it. 







var pizzaImage, pizzaG;
var boyImage, boy;
var score;
var gameState = "hungry";


function preload(){
  boyImage = loadImage("boy.png");
  pizzaImage = loadImage("pizza.jpg");
}
function setup() {
  createCanvas(800,800);

  boy = createSprite(200,200,50,50);
  boy.addImage("boy1",boyImage);
  
  pizzaG = new Group();
  score = 0;
}

function draw() {
  background("lightblue");

if(gameState === "hungry"){

  fill("white");
  textSize(25);
  text("The boy is hungry. Use arrow keys to move the boy towards food. ", 20,80);
  
  if(keyDown("UP_ARROW")){
    boy.y = boy.y-50;
  }

  // down arrow

  if(keyDown("LEFT_ARROW")){
    boy.x = boy.x-50;
  }

  // right arrow

  spawnPizza();

  // if character is touching pizza, 
  // destroy pizza and increase score 


  // think of gameover condition

  
}
  
  if(gameState === "gameover"){
    textSize(50);
    text("Game over",300,300);
  }
  
  drawSprites();
  textSize(20);
  text("Score: "+ score,400,40);
}

function spawnPizza(){
  if(frameCount%200===0){
      var b = createSprite(random(30,470),0,50,50);
      b.addImage(pizzaImage);
      b.scale=0.5;
      b.velocityY=4;
      pizzaG.add(b);
  }
}

