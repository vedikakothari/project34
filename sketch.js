//Create variables here
var dog, happyDog
var database
var foodS, foodStock

function preload()
{
  //load images here
  dog.loadImage(dogIMG, "Dog.png")
  happyDog.loadImage(happyDogIMG, "happydog.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(10,10,20,20);
  dog.addImage("dogIMG");

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  //add styles here
text("Note: Press UP_ARROW Key To Feed Drago Milk!", 100,200);
textSize(30);
fill("white");
}

function readStock(data){
  foodS = date.val();
}

function writeStock(x){
  database.ref('/').update9({
    Food:x
  })
}


