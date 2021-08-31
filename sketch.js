//Create variables here
var dog , happyDog, foodS, foodStack;
var db;
function preload()
{
	//load images here
dog = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog1 = createSprite(350,200,20,20) ;
  dog1.addImage(dog);
  dog1.scale = 0.2;

  db = firebase.database();

  foodStack = db.ref('food');
  foodStack.on("value",readStack);
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStack(foodS)
  dog1.addImage(happyDog)
}

  drawSprites();
  //add styles here
  textSize(20)
  fill("red")
  stroke()
text("Note: Press Up Aroow To Feed Drago Milk")
}

function readStack() {
foodS = data.val()

}

function writeStack(x){
if(x<=0){
x=0

}else(x = x -1)


db.ref('/').update({Food:x})


}

