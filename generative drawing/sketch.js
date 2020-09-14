// Vitaliy Vitanskyy
//ART 151
// Generative Drawing Machine
// 


// Right Arrow =  New BLACK Canvas
// Left Arrow  =  New WHITE Canvas

// Right Mouse Click = Increase Speed
// Left Mouse Speed  = Decrease Speed 

// Mouse X     =  Opacity of Shapes
// S or s      =  Save as PNG




var pointo = {
  x: 30,
  y: 90
}

var position = {
  t: 90,
  z: 86
}
var col = {
  r:255,
  g: 0,
  b: 0
}
let f = 1


function setup() {
  createCanvas(1000, 1200);

  frameRate(f);
  
  background(0);
  
}

function draw() {

  
  //noStroke();
  color.r = random(0,150);
  color.g= random(10,500);
 color.b = random(0,400);
  
  pointo.x = random(0, width);
  pointo.y = random(0, height);
  
  position.z = random(0, width);
  position.t = random(0, height);
  
  fill(col.r, color.g, color.b, mouseX);
  ellipse(pointo.x, pointo.y, position.z, position.t);
  square(pointo.x, pointo.y, position.z, position.t);
  
  
  
    fill(250);
  rect(0, 0, 1000, 20);
  rect(0, 1180, 1000, 20);
  rect(0, 0, 20, 1200);
  rect(980, 0, 20, 1200);
  
  
  
   if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      f = f + 0.5;
      frameRate(f);
}
   } 
     if (mouseIsPressed) {
    if (mouseButton === RIGHT) {
      f = f/2;
      frameRate(f);
       
}
   }

    
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    fill(255);
    rect(0, 0, 1000, 1200);
     } else if (keyCode === RIGHT_ARROW) {
    fill(0);
     rect(0, 0, 1000, 1200);  
  }
if (key == 's' || key == 'S') saveCanvas('myCanvas.png');
}


