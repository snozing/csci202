function setup(){
  createCanvas(windowWidth, windowHeight);
  textSize(40);
}

function draw() {
  background(255);
  text("accelerationX = "+round(accelerationX), 20, 50);
  text("accelerationY = "+round(accelerationY), 20, 150);
  text("accelerationZ = "+round(accelerationZ), 20, 250);
}
