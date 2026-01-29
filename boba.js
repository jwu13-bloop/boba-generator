/*
Improvements:
A festive font!
No repeats
Use mouse press to cycle through array
*/

let bgImg; 
let bgImg2;

let moves = [
  "Classic Milk Tea with Boba",
  "Brown Sugar Boba Milk",
  "Jasmine Green Milk Tea",
  "Matcha Milk Tea with Red Bean",
  "Oolong Milk Tea",
  "Passion Fruit Green Tea",
  "Winter Melon Tea with Grass Jelly",
  "Strawberry milk tea with Salted Cheese Foam",
  "Mango sago boba",
];

let move = "Click to get a drink order";

function preload(){
    bgImg = loadImage("bg.jpg"); // your image path
    bgImg2 = loadImage("bg2.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(bgImg, 0, 0, width, height);
}

function draw() {
    textAlign(CENTER, CENTER);
    let txtSize = width * 0.02; // 6% of canvas width
    textSize(txtSize);    
    textFont('Overpass Mono');  
    textWidth(8);       // font family
    fill(150, 10, 10);        // text color (RGB)

    text(move, width / 2, height / 2);
    text
}

function mousePressed() {
  image(bgImg2, 0, 0, width, height);

  if (moves.length > 0) {
    move = random(moves);
    // console.log(move)
    let indexPosition = moves.indexOf(move);
    // console.log(indexPosition);
    moves.splice(indexPosition, 1);
  } else {
    move = "maybe you should try coffee instead :("
  }

  console.log(moves.length);
}
