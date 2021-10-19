// Position Variables
var x = 0;
var y = 0;
 
// Speed - Velocity
var vx = 0;
var vy = 0;

var vMultiplier = 0.2;
var bMultiplier = 0.2;


function setup(){
  createCanvas(windowWidth, windowHeight);
  textSize(40);
  fill(0);

}

function draw() {
  background(255);
  text("accelerationX = "+round(accelerationX), 20, 50);
  text("accelerationY = "+round(accelerationY), 20, 150);
  text("accelerationZ = "+round(accelerationZ), 20, 250);

  ballMove();
  ellipse(x, y, 40, 40);
}


function ballMove() {

  vx = vx + accelerationX;
  vy = vy + accelerationY;

  x = x + vx * vMultiplier;
  y = y + vy * vMultiplier; 

  // Bounce when touch the edge of the canvas
  if (x < 20) { 
    x = 20; 
    vx = -vx * bMultiplier; 
  }
  if (y < 20) { 
    y = 20; 
    vy = -vy * bMultiplier; 
  }
  if (x > width - 20) { 
    x = width - 20; 
    vx = -vx * bMultiplier; 
  }
  if (y > height - 20) { 
    y = height - 20; 
    vy = -vy * bMultiplier; 
  }
  
}