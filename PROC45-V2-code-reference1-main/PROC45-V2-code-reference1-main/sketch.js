var snake
var apple
var appleGrup=[]


function preload(){

}

function setup(){
createCanvas(400,400);
snake=createSprite(200,200,10,10);
snake.shapeColor="green";

}

function draw() {
  background("blue");
  generadorDeAplees();
  movimientoDeSnake();
  drawSprites();
  for(var i=0;i<appleGrup.length;i++){
  if(appleGrup[i].isTouching(snake)){
  appleGrup.pop()
  snake.width=snake.width+10
  }
}
}
function generadorDeAplees(){
  if(frameCount%80===0){

  apple=createSprite()
  apple.shapeColor="red"
  apple.y=Math.round(random(0,390))
  apple.x=Math.round(random(0,390))
  apple.width=8
  apple.height=8
  appleGrup.push(apple)
}
}
function movimientoDeSnake(){
  if(keyIsDown(RIGHT_ARROW)){
    snake.x=snake.x+10
  }
  if(keyIsDown(LEFT_ARROW)){
    snake.x=snake.x-10
  }
  if(keyIsDown(UP_ARROW)){
    snake.y=snake.y-10
  }
  if(keyIsDown(DOWN_ARROW)){
    snake.y=snake.y+10
  }
}