var Balloon, BalloonAnimation;
var BackgroundImg;
var position,database;

function preeload(){

  BackgroundImg = loadImage("pro-C35Images/HotAirBallon-01.png")
  //BalloonAnimation = loadAnimation("pro-C35Images/HotAirBallon-02.png","pro-C35Images/HotAirBallon-03.png","pro-C35Images/HotAirBallon-04.png")

}

function setup() {

  //database = firebase.database();
  

  createCanvas(500,500);
  
  balloon = createSprite(100,400,10,10);
  balloon.addAnimation("pro-C35Images/__MACOSX/HotAirBallon-02.png","pro-C35Images/__MACOSX/HotAirBallon-03.png","pro-C35Images/__MACOSX/HotAirBallon-04.png")

  // var balloon2 = database.ref('Balloon/position');
  // balloon2.on("value", readPosition, showError);

  database = firebase.database();

  var balloonPosition = database.ref('balloon/position');
  balloonPosition.on("value", readPosition, showError);

}

function draw() {
  background(BackgroundImg);
  
  
  if(position != undefined){

    if(keyDown(LEFT_ARROW)){
        balloon.x = balloon.x -10;
    }
    else if(keyDown(RIGHT_ARROW)){
        balloon.x = balloon.x +10;
    }
    else if(keyDown(UP_ARROW)){
        balloon.y = balloon.y -10;
    }
    else if(keyDown(DOWN_ARROW)){
        balloon.y = balloon.y +10;
    }

}

  
}


 function changePosition(x,y){
   
 database.ref('balloon/position').set({

   'x': position.x + x,
   'y': position.y + y

  })
 }

function readPosition(data){
position = data.val();

Balloon.x = position.x;
Balloon.y = position.y;

}

function updateHeight(x,y){

  database.ref('balloon/position').set({

   'x' : position.x + x ,
   'y' : position.y + y 

  })

}

function readHeight(data){

   height = data.val();
   balloon.x = position.x; 
   balloon.y = position.y;

}

function showError(){

console.log("please check your internet conection or code"); // errore in connection to detabase

}